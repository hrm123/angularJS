/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('questionController', QuestionController);

    QuestionController.$inject = [ ];

    function QuestionController() {
        var vm = this;
        vm.title = 'Thanks for staying tuned!';
        vm.formData = {};
        vm.selectedAnswer = '';

        ////////////////
    }
})();