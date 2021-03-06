/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('FormController', FormController);

    FormController.$inject = ['FormDataModel'];

    function FormController(FormDataModel) {
        var vm = this;
        vm.title = 'Multi-Step Wizard';
        // we will store all of our form data in this object
        vm.formData = new FormDataModel();

        vm.$onInit = activate;
        vm.getData = getData;

        ////////////////

        function activate() {

        }

        function getData() {
            return vm.formData;
        }
    }
})();