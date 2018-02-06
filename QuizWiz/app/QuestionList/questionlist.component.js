/**
 * Created by Ramm on 2/5/2018.
 */
/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .component('questionList', {
            templateUrl:  'QuestionList/questionlist.html',
            controller: 'questionListController',
            controllerAs: 'qlController',
            require: {
                // access to the functionality of the parent component called 'formComponent'
                parent: '^stepComponent'
            },
            bindings: {
                // send a changeset of 'formData' upwards to the parent component called 'formComponent'
                questions: '<'
            }
        })
})();