/**
 * Created by OK8721 on 12/2/2015.
 */

class Car {
    constructor(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
    }

    get name() { return this.year + ' ' + this.make + ' ' + this.model }

    coolStory() { return 'cool story bro'; }
}