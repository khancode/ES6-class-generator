
class Variable {
    constructor(name, accessModifier) {
        this.name = name;
        this.accessModifier = accessModifier;
    }

    compareTo(variable) { return this.name === variable.name; }
    toString() { return this.accessModifier + ' - ' + this.name; }
}