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
            debugger;
            var step1DataModel = DataProviderSvc.getStepData[1];
            const step1Data = step1DataModel.map(function(q,i){
                return {q: q.question, a: q.answers[q.userAnswer]};
            });
            const step2Data = DataProviderSvc.getStepData[2].map(function(q,i){
                return {q: q.question, a: q.answers[q.userAnswer]};
            });
            const step3Data = DataProviderSvc.getStepData[3].map(function(q,i){
                return {q: q.question, a: q.answers[q.userAnswer]};
            });

            const allResponses = [];
            allResponses.push(step1Data);
            allResponses.push(step2Data);
            allResponses.push(step3Data);
            console.log('Work feature loaded!');
        }
    }
})();