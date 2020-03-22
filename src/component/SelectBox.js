import { Form } from "./Form";

export class SelectBox extends Form{
    constructor(id,items){
        super(id,items);
        this.title = ""
        this.stepNum = 4;
    }
   
}