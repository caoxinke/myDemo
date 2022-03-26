pipeline {
  agent any
  stages {
    stage('ut') {
      agent {
        docker {
          image 'node:latest'
        }

      }
      steps {
        sh 'yarn install'
        sh 'yarn run test'
      }
    }

    stage('build') {
      agent {
        dockerfile {
          filename 'node:latest'
        }

      }
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