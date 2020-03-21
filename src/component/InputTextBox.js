import { Form } from "./Form";

export class InputTextBox extends Form{
    constructor(id,items){
        super(id,items);
        this.title = ""
    }
   
    renderSurvey(items){
        this.input1 = document.createElement('input');

        this.input1.type = items.type;
        this.input1.name = items.name;

        this.newForm.appendChild(this.input1);

        this.newForm.appendChild(this.btnSubmit);

        this.title.innerHTML=this.items.subTitle;
        

        this.submit();  

    }
 
   
}