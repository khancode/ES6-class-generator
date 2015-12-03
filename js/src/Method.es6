class Method {
    constructor(name, accessModifier) {
        this.name = name;
        this.accessModifier = accessModifier;
    }

    compareTo(method) { return this.name === method.name; }
    toString() { return this.accessModifier + ' - ' + this.name; }
}