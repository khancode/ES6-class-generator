class ConstructES6Class {

    static create(name, variables, methods) {

        console.log('hai');

        // Class and constructor
        var str = 'class ' + name + ' {\n' +
                  '\tconstructor() {\n'; // TODO put in constructor paramters

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
            str += '\t' + method.name + ' {\n' +
                   '\t\t//TODO implement\n' +
                   '\t}\n\n';
        }

        // END class
        str += '}';

        return str;
    }
}