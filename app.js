var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', 'PARENT_OPTIONS', 'ACCESS_MODIFIERS', function($scope, PARENT_OPTIONS, ACCESS_MODIFIERS) {

    $scope.PARENT_OPTIONS = PARENT_OPTIONS;
    $scope.ACCESS_MODIFIERS = ACCESS_MODIFIERS.modifiers;
    $scope.DEFAULT_ACCESS_MODIFIER = ACCESS_MODIFIERS.default;
    $scope.className = '';
    $scope.variables = [];
    $scope.varName = '';
    $scope.varAccessModifier = undefined; // this is automatically defined in html
    $scope.methods = [];
    $scope.methodName = '';
    $scope.methodAccessModifier = undefined; // this is automatically defined in html

    $scope.addVariable = function() {
        // Check if name already exists
        for (var i in $scope.variables) {
            if ($scope.varName == $scope.variables[i].name) {
                alert('Error: variable already declared! Please choose a different name.');
                return;
            }
        }

        // Add new variable
        $scope.variables.push(new Variable($scope.varName, $scope.varAccessModifier));

        // Reset fields
        $scope.varName = '';
        $scope.varAccessModifier = $scope.DEFAULT_ACCESS_MODIFIER;
    };

    $scope.removeVariable = function(variable) {
        // Find and delete variable
        for (var i in $scope.variables) {
            var curVar = $scope.variables[i];
            if (curVar.compareTo(variable)) {
                $scope.variables.splice(i, 1);
            }
        }
    };

    $scope.addMethod = function() {
        // Check if name already exists
        for (var i in $scope.methods) {
            if ($scope.methodName == $scope.methods[i].name) {
                alert('Error: method already declared! Please choose a different name.');
                return;
            }
        }

        // Add new variable
        $scope.methods.push(new Method($scope.methodName, $scope.methodAccessModifier));
    };

    $scope.removeMethod = function(method) {
        // Find and delete variable
        for (var i in $scope.methods) {
            var curMethod = $scope.methods[i];
            if (curMethod.compareTo(method)) {
                $scope.methods.splice(i, 1);
            }
        }
    };

    $scope.constructES6Class = function() {
        var es6ClassStr = ConstructES6Class.create($scope.className, $scope.variables, $scope.methods);

        console.log(es6ClassStr);
    };

}]);

myApp.value('PARENT_OPTIONS', ['', 'extends', 'implements']);
myApp.value('ACCESS_MODIFIERS', {modifiers:['public', 'private'], default:'public'});

//myApp.controller('mainController', ['$scope', 'cars', function($scope, cars) {
//    console.log('mainController initialized!');
//
//    $scope.cars = cars;
//
//    var evo = new Car(2014, 'Mitsubishi', 'Lancer Evolution');
//    var m3 = new Car(2005, 'BMW', 'M3');
//
//    evo.price = 35000;
//    console.log('evo.price: ' + evo.price);
//
//    console.log('evo: ' + evo.name);
//    console.log(evo.coolStory());
//}]);
//
//myApp.filter('omar', function() {
//    return function(input) {
//        return input + '-khan';
//    };
//});
//
//myApp.value('cars', [{year:2014, make:'Mitsubishi', model:'Lancer Evolution'}, {year:2005, make:'BMW', model:'M3'}]);