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

        vm.$onInit = activate;
        vm.stepData = DataProviderSvc.getStepData(DataProviderSvc.getStepID());
        ////////////////
        debugger;
        console.log(vm.stepData);
        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            console.log('Result feature loaded!');
        }

        $scope.$on('AnswerChanged', function(event, data){
            DataProviderSvc.updateUserAnswer(data.qid, data.a);
        });

        vm.updateAnswer = function(qid, aid)
        {

        }
    }
})();