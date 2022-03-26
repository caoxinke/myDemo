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

  }
}