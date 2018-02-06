(function() {
    'use strict';

    // Creating our angular app and inject ui-router
    // =============================================================================
    var app = angular.module('wizardApp', ['ui.router']);

    // Configuring our states
    // =============================================================================
    app.config(StatesConfig);
    StatesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function StatesConfig($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/quizwiz/step');

        $stateProvider
        // PARENT STATE: form state
            .state('form', {
                url: '/quizwiz',
                component: 'formComponent',
                resolve: { StepData: ['dataProviderSvc','$stateParams', function (DataProviderSvc, $stateParams) {
                    debugger;
                    if($stateParams.stepsChanged) {
                        return DataProviderSvc.ChangeCurrentStepId($stateParams.stepsChanged);
                    }
                    else{
                        return DataProviderSvc.ChangeCurrentStepId(1); // step 1 data by default
                    }
                }]
                }
            })
            .state('form.step', {
                url: '/step',
                component: 'stepComponent'
            })
            // NESTED STATES: child states of 'form' state
            // URL will become '/form/personal'
            .state('form.personal', {
                url: '/home',
                component: 'personalComponent'
            })

            // URL will become /form/work
            .state('form.work', {
                url: '/work',
                component: 'workComponent'
            })

            // URL will become /form/address
            .state('form.address', {
                url: '/address',
                component: 'addressComponent'
            })

            // URL will become /form/result
            .state('form.result', {
                url: '/result',
                component: 'resultComponent'
            });
    }
})();
