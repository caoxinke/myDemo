pipeline {
    agent { docker 'node:latest' }
    stages {
        stage('ut') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}