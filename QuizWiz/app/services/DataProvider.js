/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    "use strict";

    angular.module('wizardApp')
        .service('DataProviderSvc', DataProviderService);


    DataProviderService.$inject = ['$http'];

    function DataProviderService($http) {
        var service = this;

        var stepsData =
            [
                [],
                [
                    {
                        question: 'q1',
                        answers: ['a1', 'a2', 'a3', 'a4'],
                        scores: [1,0,0,0],
                        userAnswer: '',
                        id: uuidv4()
                    },
                    {
                        question: 'q2',
                        answers: ['a5', 'a6', 'a7', 'a8'],
                        scores: [0,0,1,0],
                        userAnswer: '',
                        id: uuidv4()
                    }
                ],
                [
                    {
                        question: 'q3',
                        answers: ['a9', 'a10', 'a11', 'a12'],
                        scores: [1,0,0,0],
                        userAnswer: '',
                        id: uuidv4()
                    },
                    {
                        question: 'q4',
                        answers: ['a13', 'a14', 'a15', 'a16'],
                        scores: [0,0,1,0],
                        userAnswer: '',
                        id: uuidv4()
                    }
                ],
                [
                    {
                        question: 'q5',
                        answers: ['a17', 'a18', 'a19', 'a20'],
                        scores: [1,0,0,0],
                        userAnswer: '',
                        id: uuidv4()
                    },
                    {
                        question: 'q6',
                        answers: ['a21', 'a22', 'a23', 'a24'],
                        scores: [0,0,1,0],
                        userAnswer: '',
                        id: uuidv4()
                    }
                ],
                [],
                []
            ];

        var sampleStore = {
            email: '',
            stepsData: stepsData,
            totalSteps: 6
        };

        service.getEmail = function () {
            return sampleStore.email;
        };

        service.updateEmail = function (newEmail) {
            sampleStore.email = newEmail;
        };

        service.getStepData = function(stepId)
        {
            return sampleStore.stepsData[stepId];

        };

        service.updateUserAnswer = function (qid, aid) {

        };
    };
})();
