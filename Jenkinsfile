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
        sh 'sleep 60'
        sh 'ng e2e --devServerTarget='
        sh 'docker rm -f testcontainer || true'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker image remove -f deployimage || true'
        sh 'docker rm -f deploycontainer || true'
        sh 'docker build --tag deployimage .'
        sh 'docker run -p 5000:4200 -d -it --name deploycontainer -v $WORKSPACE:/app deployimage:latest'
      }
    }
  }
}
