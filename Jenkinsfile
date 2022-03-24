pipeline {
    agent { docker 'node:latest' }
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