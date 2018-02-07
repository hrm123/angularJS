/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('PersonalController', PersonalController);

    PersonalController.$inject = ["$stateParams","dataProviderSvc"];

    function PersonalController($stateParams, DataProviderSvc) {
        var vm = this;
        vm.title = 'Please tell us about yourself.';
        vm.formData = {};

        vm.$onInit = activate;
        vm.saveEmail = function(){
            DataProviderSvc.updateEmail(vm.formData.email);
        }
        ////////////////

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            DataProviderSvc.setStepID(0);
            vm.formData.email = DataProviderSvc.getEmail();
        }

    }
})();