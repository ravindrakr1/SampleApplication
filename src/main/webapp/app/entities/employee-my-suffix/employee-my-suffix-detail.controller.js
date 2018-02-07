(function() {
    'use strict';

    angular
        .module('sampleApplicationApp')
        .controller('EmployeeMySuffixDetailController', EmployeeMySuffixDetailController);

    EmployeeMySuffixDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Employee', 'Department', 'Job'];

    function EmployeeMySuffixDetailController($scope, $rootScope, $stateParams, previousState, entity, Employee, Department, Job) {
        var vm = this;

        vm.employee = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('sampleApplicationApp:employeeUpdate', function(event, result) {
            vm.employee = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
