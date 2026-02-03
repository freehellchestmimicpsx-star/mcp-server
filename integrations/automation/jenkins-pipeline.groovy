pipeline {
  agent any
  stages {
    stage('Analyze') {
      steps {
        echo 'Trigger MCP analysis via API'
      }
    }
  }
}
