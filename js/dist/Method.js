'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = (function () {
    function Method(name, accessModifier) {
        _classCallCheck(this, Method);

        this.name = name;
        this.accessModifier = accessModifier;
    }

    _createClass(Method, [{
        key: 'compareTo',
        value: function compareTo(method) {
            return this.name === method.name;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.accessModifier + ' - ' + this.name;
        }
    }]);

    return Method;
})();
//# sourceMappingURL=Method.js.map
