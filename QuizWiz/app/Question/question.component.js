/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .component('question', {
            templateUrl:  'Question/question.html',
            controller: 'questionController',
            controllerAs: 'quesCtrl',
            require: {
                // access to the functionality of the parent component called 'formComponent'
                parent: '^questionList'
            },
            bindings: {
                // send a changeset of 'formData' upwards to the parent component called 'formComponent'
                ques: '<'
            }
        })
})();