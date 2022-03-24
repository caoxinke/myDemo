pipeline {
    agent { docker 'node:17.7.2' }
    stages {
        stage('ut') {
            steps {
                sh 'cnpm install'
                sh 'cnpm run test'
            }
        }
        stage('build') {
            steps {
                sh 'cnpm run build'
            }
        }
    }
}