'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConstructES6Class = (function () {
        function ConstructES6Class() {
                _classCallCheck(this, ConstructES6Class);
        }

        _createClass(ConstructES6Class, null, [{
                key: 'create',
                value: function create(name, inheritance, parentName, variables, methods) {

                        console.log('hai');

                        // Class and constructor
                        var str = 'class ' + name + ' ';

                        if (inheritance != '') {
                                str += inheritance + ' ' + parentName;
                        }

                        str += ' {\n\tconstructor() {\n'; // TODO put in constructor paramters

                        // declare variables
                        for (var i in variables) {
                                var variable = variables[i];
                                str += '\t\tthis.' + variable.name + ';\n';
                        }

                        // END constructor
                        str += '\t}\n\n';

                        // Methods
                        for (var i in methods) {
                                var method = methods[i];
                                str += '\t' + method.name + ' {\n' + '\t\t//TODO implement\n' + '\t}\n\n';
                        }

                        // END class
                        str += '}';

                        return str;
                }
        }]);

        return ConstructES6Class;
})();
//# sourceMappingURL=ConstructES6Class.js.map
