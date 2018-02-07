/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('ResultController', ResultController);

    ResultController.$inject = ["$stateParams","dataProviderSvc"];

    function ResultController($stateParams,DataProviderSvc) {
        var vm = this;
        vm.title = 'Thanks for taking the quiz!';
        vm.formData = {};

        vm.$onInit = activate;

        ////////////////

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            vm.totalScore = DataProviderSvc.getScore();
            vm.email = DataProviderSvc.getEmail();
        }
    }
})();