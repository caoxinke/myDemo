pipeline {
  agent {
    docker 'node:latest'
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
        sh '''rm -rf /opt/dist
docker cp 61643f6ecf34:/var/jenkins_home/workspace/myDemo_master/dist /opt/dist'''
        cleanWs(cleanWhenSuccess: true, cleanWhenAborted: true, cleanWhenFailure: true)
      }
    }

  }
}