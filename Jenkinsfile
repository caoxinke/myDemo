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
      agent {
        docker {
          image 'node:latest'
        }

      }
      steps {
        sh '''rm -rf /opt/dist
docker cp 61643f6ecf34:/var/jenkins_home/workspace/myDemo_master/dist /opt/dist'''
        cleanWs(cleanWhenSuccess: true, cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
      }
    }

  }
}