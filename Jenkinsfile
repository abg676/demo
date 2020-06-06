pipeline {
  agent {
    node {
      label 'Checkout'
    }

  }
  stages {
    stage('Fetch') {
      steps {
        setGitHubPullRequestStatus()
      }
    }

  }
}