/**
 * Created by Ramm on 2/5/2018.
 */
(function () {
    'use strict';

    angular
        .module('wizardApp')
        .component('formComponent', {
            templateUrl:  'form/form.html',
            controller: 'FormController',
            controllerAs: 'vm'
        })
})();