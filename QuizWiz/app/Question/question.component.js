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
            controllerAs: 'vm',
            require: {
                // access to the functionality of the parent component called 'formComponent'
                parent: '^questionListComponent'
            }
        })
})();