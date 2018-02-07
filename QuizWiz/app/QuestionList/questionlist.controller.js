/**
 * Created by Ramm on 2/6/2018.
 */
/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('questionListController', QuestionListController);

    QuestionListController.$inject = ["$scope"];

    function QuestionListController() {
        var vm = this;
        vm.title = 'Thanks for staying tuned!';
        vm.formData = {};
        ////////////////
    }
})();