var startUpCalcApp = angular.module('startUpCalcApp', []);

startUpCalcApp.controller('CalcController', ['$scope', function($scope) {
    // $scope.funding = { startingEstimate: 0 };
    // $scope.computeNeeded = function() {
    //     $scope.needed = $scope.startingEstimate * 10;
    // };
    // $scope.$watch('funding.startingEstimate', computeNeeded);
    $scope.computeNeeded = function() {
        $scope.needed = $scope.startingEstimate * 10;
    };
    $scope.requestFunding = function() {
        window.alert("Sorry, please get more customers first.");
    }
    $scope.reset = function() {
        $scope.startingEstimate = 0;
        $scope.needed = 0;
    }
}]);