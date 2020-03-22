import { Form } from "./Form";

export class CheckBox extends Form{
    constructor(id,items){
        super(id,items);
        this.title = ""
        this.stepNum = 3;
    }
   
}