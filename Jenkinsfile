pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Building...'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
    stage('e2e') {
      steps {
        echo 'Not yet implemented'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Not yet implemented'
      }
    }
  }
}
