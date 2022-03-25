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
docker cp 61643f6ecf34:/var/jenkins_home/workspace/myDemo_master/dist /opt/dist
docker exec -d 61643f6ecf34 rm -rf /var/jenkins_home/workspace/myDemo_master'''
        cleanWs(cleanWhenSuccess: true, cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true, externalDelete: '/var/jenkins_home/workspace/myDemo_master')
      }
    }

  }
}