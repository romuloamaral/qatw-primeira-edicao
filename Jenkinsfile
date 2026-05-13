pipeline {
    agent {
        dockerfile {
            args '--network qatw-primeira-edicao_skynet'
        }
    }

    environment {
        BASE_URL = 'http://paybank-mf-auth:3000/'
        TEST_USER = credentials('test-user')
        TEST_USER_PASSWORD = credentials('test-user-password')
    }

    stages {
        stage('Node.js Deps') {
            steps {
                sh 'npm ci'
            }
        }
        stage('E2E Tests') {
            steps {
                //sh 'npx playwright test'
                sh 'npm run test:bdd'
                allure includeProperties: false,
                jdk: '',
                resultPolicy: 'LEAVE_AS_IS',
                results: [[path: 'allure-results']]
            }
        }
    }
}


// pipeline {
//     agent {
//         docker {
//             image 'mcr.microsoft.com/playwright:v1.59.1-noble'
//             args '--network qatw-primeira-edicao_skynet'
//         }
//     }

//     stages {
//         stage('Node.js Deps') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('E2E Tests') {
//             steps {
//                 sh 'npx playwright test'
//                 allure includeProperties: false, jdk: '', resultPolicy: 'LEAVE_AS_IS', results: [[path: 'allure-results']]
//             }
//         }
//     }
// }