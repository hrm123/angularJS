/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('StepController', StepController);

    StepController.$inject = ["$scope","$stateParams","dataProviderSvc"];

    function StepController($scope, $stateParams, DataProviderSvc) {
        var vm = this;
        vm.title = 'Thanks for staying tuned!';
        vm.formData = {};
        debugger;
        vm.$onInit = activate;

        ////////////////

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            console.log('Result feature loaded!');
        }
    }
})();