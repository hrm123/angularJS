/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('WorkController', WorkController);

    WorkController.$inject = ["$stateParams","dataProviderSvc"];

    function WorkController($stateParams,DataProviderSvc) {
        var vm = this;
        vm.title = 'What do you do?';
        vm.formData = {};

        vm.$onInit = activate;

        ////////////////

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            DataProviderSvc.setStepID(4);
            vm.title = DataProviderSvc.getEmail() +  ' - Please review your answers before submission';

            const step1Data = DataProviderSvc.getStepData(1).map(function(q,i){
                return {q: q.question, a: q.userAnswer};
            });
            const step2Data = DataProviderSvc.getStepData(2).map(function(q,i){
                return {q: q.question, a: q.userAnswer};
            });
            const step3Data = DataProviderSvc.getStepData(3).map(function(q,i){
                return {q: q.question, a: q.userAnswer};
            });

            vm.allResponses = step1Data.concat(step2Data.concat(step3Data));

        }
    }
})();