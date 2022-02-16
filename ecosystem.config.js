module.exports = {
  apps: [{
    name: 'aws-test',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-183-216-134.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/team1.pem',
      ref: 'origin/master',
      repo: 'git@github.com:tnguyen372/aws-test.git',
      path: '/home/ubuntu/aws-test',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}