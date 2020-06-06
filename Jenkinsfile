pipeline: {
    environment {
        registry = "abhay676/demo-app"
        registryCredential = 'Abhay123#Goswami'
        dockerImage = ''
    }
    agent any
    stages {
          stage('Enviroment') {
              env.NODE_ENV='production'
              steps {
                  sh "setting up the envirment for : ${env.NODE_ENV}"
              }
          }
          stage('Install & Build') {
              steps {
                script {
                    npm install
                    npm build
                }
                sh 'Installing and Build successfully'
              }
          }
          stage('Docker Image') {
              steps {
                  sh 'Building docker image'
                  script {
                      dockerImage = docker.build registry + ":$BUILD_NUMBER"
                  }
              }
          }
          stage('Deploy Image') {
              stpes {
                  script {
                      docker.withRegistry( '', registryCredential ) {
                      dockerImage.push()
                  }
              }
          }
      }
          stage('Remove Unused docker image') {
              steps {
                  sh "docker rmi $registry:$BUILD_NUMBER"
          }
      }
  }
}
