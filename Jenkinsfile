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
        sh 'git config --global http.version HTTP/1.1'
      }
    }

    stage('deploy') {
      agent {
        docker {
          image 'node:latest'
        }

      }
      steps {
        sh 'rm -rf /opt/dist'
        sh '''docker cp 61643f6ecf34:/var/jenkins_home/workspace/myDemo_master@2/dist /opt/dist
'''
        sh 'git config --global http.version HTTP/1.1'
      }
    }

  }
}