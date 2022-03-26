pipeline {
  agent {
    docker {
      image 'node:latest'
    }

  }
  stages {
    stage('ut') {
      steps {
        sh 'yarn install'
        sh 'yarn run test'
      }
    }

    stage('build') {
      steps {
        sh 'yarn run build'
      }
    }

    stage('deploy') {
      steps {
        sh 'mv /var/lib/docker/volumes/jenkins-data/_data/workspace/myDemo_master/dist /opt/workspace'
      }
    }

  }
}