import { create } from "domain";

export class Form {
    constructor(){
    create();
    }
    create(){
        console.error('Override create method.');

    }
}
