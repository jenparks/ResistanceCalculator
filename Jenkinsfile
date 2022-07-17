pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('e2e') {
      steps {
        sh 'docker build --tag testimage .'
        sh 'docker run -p 4200:4200 -d -it --name testcontainer -v $WORKSPACE:/app testimage:latest'
        sh './node_modules/protractor/bin/webdriver-manager update'
        sh 'ng e2e --devServerTarget='
        sh 'docker rm -f testcontainer || true'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Not yet implemented'
      }
    }
  }
}
