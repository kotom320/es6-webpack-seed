import { Form } from "./Form";

export class TextArea extends Form{
    constructor(id,items){
        super(id,items);
        this.title = ""
        this.stepNum = 5;
    }
   
}