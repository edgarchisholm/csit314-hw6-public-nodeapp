pipeline {
  agent any
  stages {
    stage('Install') {
      steps { sh 'npm ci' }
    }
    stage('Test') {
      steps { sh 'npm test' }
    }
    stage('Package') {
      steps { sh 'npm pack' }
    }
  }
  post {
    success { archiveArtifacts artifacts: '*.tgz', fingerprint: true }
  }
}
