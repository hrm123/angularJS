/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .controller('AddressController', AddressController);

    AddressController.$inject = [];

    function AddressController() {
        var vm = this;
        vm.title = 'Where do you live?';
        vm.formData = {};

        vm.$onInit = activate;

        ////////////////

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
        }
    }
})();