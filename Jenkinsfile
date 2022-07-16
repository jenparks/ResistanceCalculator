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
        echo 'Not yet implemented'
        docker build --tag testimage .
        docker run -p 4200:4200 -d -it --name testcontainer -v /home/jp00213/Desktop/cs6261project4:/cs6261 testimage:latest
        
        ./node_modules/protractor/bin/webdriver-manager update
        ng e2e --devServerTarget=
        docker rm testcontainer || true
      }
    }
    stage('Deploy') {
      steps {
        echo 'Not yet implemented'
      }
    }
  }
}
