/**
 * Created by Ramm on 2/6/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .component('answer', {
            templateUrl:  'Answer/answer.html',
            controller: 'answerController',
            controllerAs: 'answerCtrl',
            require: {
                // access to the functionality of the parent component called 'formComponent'
                parent: '^question'
            },
            bindings: {
                // send a changeset of 'formData' upwards to the parent component called 'formComponent'
                ans: '<',
                groupid: '<',
                useranswer: '@'
            }
        })
})();