var myApp = angular.module('myApp', ['hljs']);

myApp.value('PARENT_OPTIONS', ['', 'extends']);
myApp.value('ACCESS_MODIFIERS', {modifiers:['public', 'private'], default:'public'});
myApp.value('ANIMATION', {resultText:'flipInX', button:'bounceInRight'});
myApp.value('INPUT_VALIDATION', [
    {
        groupId: 'classComponentError',
        errors: [
            {
                id: 'classNameError',
                requirements: ['!empty', 'no whitespace']
            },
            {
                id: 'parentNameError',
                requirements: ['!empty', 'no whitespace']
            }
        ]
    },
    {
        groupId: 'variableComponentError',
        errors: [
            {
                id: 'variableNameError',
                requirements: ['!empty', 'no whitespace', 'no duplicate']
            }
        ]
    },
    {
        groupId: 'methodComponentError',
        errors: [
            {
                id: 'methodNameError',
                requirements: ['!empty', 'no whitespace', 'no duplicate']
            }
        ]
    }
]);

myApp.config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
        // replace tab with 4 spaces
        tabReplace: '    '
    });
});

myApp.controller('mainController', ['$scope', '$timeout', 'PARENT_OPTIONS', 'ACCESS_MODIFIERS', 'ANIMATION', function($scope, $timeout, PARENT_OPTIONS, ACCESS_MODIFIERS, ANIMATION) {

    $scope.PARENT_OPTIONS = PARENT_OPTIONS;
    $scope.ACCESS_MODIFIERS = ACCESS_MODIFIERS.modifiers;
    $scope.DEFAULT_ACCESS_MODIFIER = ACCESS_MODIFIERS.default;
    $scope.buttonAnimation = ANIMATION.button;
    $scope.className;
    $scope.inheritance = '';
    $scope.parentClassName = '';

    $scope.variables = [];
    $scope.varName = '';
    $scope.varAccessModifier = undefined; // this is automatically defined in html

    $scope.methods = [];
    $scope.methodName = '';
    $scope.methodAccessModifier = undefined; // this is automatically defined in html

    $scope.resultText = '';

    $scope.showParentNameInput = undefined;

    $scope.classComponentError = false;
    $scope.classNameError = false;
    $scope.parentClassNameError = false;

    $scope.variableComponentError = false;
    $scope.variableNameError = false;

    $scope.methodComponentError = false;


    $scope.$watch('className', function(newValue, oldValue) {


        console.log('dat courageous feel');

        if (newValue !== oldValue) {

            if (newValue.length !== 0) {
                console.log('good');

                var es6ClassStr = ConstructES6Class.create($scope.className, $scope.inheritance, $scope.parentClassName, $scope.variables, $scope.methods);

                console.log(es6ClassStr);

                $scope.resultText = es6ClassStr;

                console.log('dat showParentInput: ' + $scope.showParentNameInput);
            }
            else
                $scope.resultText = '';
        }
    });

    function validateClass() {

        if ($scope.className.length === 0) {

        }

    }

    $scope.addVariable = function() {

        // Check if name already exists
        for (var i in $scope.variables) {
            if ($scope.varName == $scope.variables[i].name) {
                alert('Error: variable already declared! Please choose a different name.');
                return;
            }
        }

        validateVariableInput($scope.varName, $scope.variables);

        // Add new variable
        $scope.variables.push(new Variable($scope.varName, $scope.varAccessModifier));

        // Reset fields
        $scope.varName = '';
        $scope.varAccessModifier = $scope.DEFAULT_ACCESS_MODIFIER;

        $scope.constructES6Class();
    };

    $scope.removeVariable = function(variable) {
        // Find and delete variable
        for (var i in $scope.variables) {
            var curVar = $scope.variables[i];
            if (curVar.compareTo(variable)) {
                $scope.variables.splice(i, 1);
            }
        }

        $scope.constructES6Class();
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

        // Reset fields
        $scope.methodName = '';
        $scope.methodAccessModifier = $scope.DEFAULT_ACCESS_MODIFIER;

        $scope.constructES6Class();
    };

    $scope.removeMethod = function(method) {
        // Find and delete variable
        for (var i in $scope.methods) {
            var curMethod = $scope.methods[i];
            if (curMethod.compareTo(method)) {
                $scope.methods.splice(i, 1);
            }
        }

        $scope.constructES6Class();
    };

    $scope.constructES6Class = function() {

        //// define requirements
        //var requirements = {
        //
        //}
        var validationResult = validateInput($scope.className, $scope.inheritance, $scope.parentClassName, $scope.variables, $scope.methods);

        console.log(validationResult.classComponentError);

        if (validationResult.classComponentError.length == 0)
            console.log("classComponent good! :D");
        else
            console.log("classComponent bad! :(");

        if (validationResult.variableComponentError.length == 0)
            console.log("variableComponent good! :D");
        else
            console.log("variableComponent bad! :(");

        if (validationResult.methodComponentError.length == 0)
            console.log("methodComponent good! :D");
        else
            console.log("methodComponent bad! :(");

        //var validation = inputValidation.validate($scope, $scope.className, $scope.inheritance, $scope.parentClassName, $scope.variables, $scope.methods);

        //if (validation.error) {
        //    alert('Error: ' + validation.message);
        //    return;
        //}

        var es6ClassStr = ConstructES6Class.create($scope.className, $scope.inheritance, $scope.parentClassName, $scope.variables, $scope.methods);

        console.log(es6ClassStr);

        $scope.resultText = es6ClassStr;

        // Replay animation
        $('#resultTextarea').addClass('animated ' + ANIMATION.resultText);

        $timeout(function() {
            $('#resultTextarea').removeClass('animated ' + ANIMATION.resultText);
        }, 1000);
    };

    function validateClassNameInput(className, inheritance, parentName) {

        var errorResult = [];

        if (className.length === 0) {
            errorResult.push({
                component: 'classNameError',
                message: 'enter class name'
            });
        }

        if (inheritance === 'extends' && parentName.length === 0) {
            errorResult.push({
                component: 'parentNameError',
                message: 'enter parent name'
            });
        }

    }

    function validateVariableInput(className, variable, variablesArr) {

        //if (className.length === 0)

    }

    function validateInput(className, inheritance, parentClassName, variables, methods) {
        console.log('inputValidation:');
        console.log('className: ' + className);
        console.log('inheritance: ' + inheritance);
        console.log('parentClassName: ' + parentClassName);
        console.log('variables: ' + variables);
        console.log('methods: ' + methods);

        var result = {
            classComponentError: [],
            variableComponentError: [],
            methodComponentError: []
        };

        if (className.length === 0) {
            //result.classComponentError.error = true;
            //result.classComponentError.message = true;
            //result.classNameError = true;

            console.log('rawr! >:D');

            result.classComponentError.push(
                {
                    component: 'classNameError',
                    error: 'enter class name'
                }
            );
        }

        if (inheritance === 'extends' && parentClassName.length === 0) {
            result.classComponentError.push(
                {
                    component: 'parentNameError',
                    error: 'enter parent name'
                }
            );
        }

        if (variables)

        return result;
    }


}]);

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