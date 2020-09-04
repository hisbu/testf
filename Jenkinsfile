pipeline {
    agent any
    environment {
        // CI = 'true'
        DOCKER_TAG = getDockerTag()
    }
    stages {
        stage('Build') {
            steps {
                echo 'start build'
                    sh 'npm install'
            }
        }

        stage('Build rigup project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build docker image') {
            steps {
                script {
                	app = docker.build("hisbu/frontend-rigup")
                }
            }
        }
        stage('Test docker image') {
            steps {
                sh 'docker run -d --rm --name testImages2 -p 8085:80 hisbu/frontend-rigup'
                // input message: "Finished test image? (Click proceed to continue)"
            }
        }
        stage('Clean up docker test') {
            steps {
                sh 'docker stop testImages2'
            }
        }
        stage('Push image to registry') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
                        app.push("${DOCKER_TAG}")
                        app.push("latest")
                    }
                }
            }
        }
        stage('Clean up image') {
            steps {
                sh 'docker rmi hisbu/frontend-rigup'

            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'chmod +x changeTag.sh'
                sh "./changeTag.sh ${DOCKER_TAG}"
                sshagent(['sshkey']) {
                    sh "scp -o StrictHostKeyChecking=no frontend-config-k8s.yml hisbu@35.198.224.116:/home/hisbu/"
                    sh "ssh hisbu@35.198.224.116 sudo kubectl apply -f ."
                }
            }
        }
        stage('Deployment to Production') {
            steps {
                milestone(1)
                kubernetesDeploy (
                    kubeconfigId: 'kubeconfig',
                    configs: 'frontend.yml',
                    enableConfigSubstitution: true
                )
            }
        }
    }
}

def getDockerTag() {
    def tag = sh script: "git rev-parse HEAD", returnStdout: true
    return tag 
}