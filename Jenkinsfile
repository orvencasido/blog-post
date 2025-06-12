pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/orvencasido/blog-post.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t blog-post-app .'
            }
        }

        stage('Stop Previous Container') {
            steps {
                sh '''
                docker stop blog-post || true
                docker rm blog-post || true
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 80:80 --name blog-post blog-post-app'
            }
        }
    }
}
