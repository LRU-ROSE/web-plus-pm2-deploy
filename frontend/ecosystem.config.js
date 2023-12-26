require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_KEY, DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO, BACKEND_URL
} = process.env;

module.exports = {
  apps: [{
    name: 'frontend',
    script: './build/index.html',
  }],
  deploy: {
    production: {
      key: DEPLOY_KEY,
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'post-deploy': `cd frontend && npm i && REACT_APP_BACKEND_URL=${BACKEND_URL} npm run build`,
    },
  },
};
