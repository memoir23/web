/**
 * Created by Dani on 2016.01.25..
 */
angular.module('myApp', []).controller('ElementController', ['$scope', function($scope) {


    $scope.order = '';
    $scope.products = [
        {
            name: 'First object',
            price: 19,
            update: new Date('2014', '03', '08'),
            likes: 0

        },
        {
            name: 'Second object',
            price: 18.20,
           update: new Date('2013', '08', '01'),
             likes: 0

        },
        {
            name: '3rd object',
            price: 23.49,
            update: new Date('1999', '07', '08'),
             likes: 0

        },
        {
            name: '4th object',
            price: 17.49,
            update: new Date('2011', '08', '16'),
           likes: 0

        }
    ];

    $scope.plusOne = function(index) {
        
        $scope.products[index].likes += 1;
    };

    $scope.setOrder = function(order) {
        $scope.order = order;
    };

}]);