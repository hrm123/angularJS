/**
 * Created by Ramm on 2/6/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('answerController', AnswerController);

    AnswerController.$inject = [ ];

    function AnswerController() {
        var vm = this;
        vm.title = 'Thanks for staying tuned!';
        vm.formData = {};

        ////////////////
    }
})();