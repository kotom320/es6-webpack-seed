import { create } from "domain";

export class Form {
    constructor(){
        this.id = id;
        this.element = null;
        this.items = items;
        create();
    }

    create(){
        console.error('Override create method.');
    }
    get getValue() {
        return this.element.value;
    }
    getElement() {
        return this.element;
    }
}
