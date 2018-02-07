/**
 * Created by Ramm on 2/6/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('answerController', AnswerController);

    AnswerController.$inject = ["$scope" ];

    function AnswerController($scope) {
        var vm = this;
        vm.title = 'Thanks for staying tuned!';
        vm.formData = {};
        vm.selected = '';


        ////////////////
        vm.$onInit = function(){
            debugger;
            vm.selectedAnswer = vm.useranswer;
        }
        vm.newValue = function(value) {
            console.log(value);
            $scope.$emit('AnswerChanged',{qid: vm.groupid, a : vm.selectedAnswer});
        }

        vm.$onChanges = function (changes) {
            if (changes.selectedAnswer) {

            }
        }
    }
})();