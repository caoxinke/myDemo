pipeline {
    agent { docker 'node:17.7.2' }
    stages {
        stage('ut') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        },
        stage('build') {
            steps {
                sh 'npm run build'
            }
        },
        stage('it') {
            steps {
                sh 'npm run e2e'
            }
        },
    }
}