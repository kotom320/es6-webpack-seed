import { Form } from "./Form";

export class RadioBtn extends Form{
    constructor(id,items){
        super(id,items);
        this.title = ""
        this.stepNum = 2;
    }
   
    renderSurvey(items){
        this.input1 = document.createElement('input');
        this.input2 = document.createElement('input');
        this.label1 = document.createElement('label');
        this.label2 = document.createElement('label');

        this.input1.type = items.type;
        this.input1.name = items.name;
        this.input1.value = items.value[0];


        this.input2.type = items.type;
        this.input2.name = items.name;
        this.input2.value = items.value[1];

        this.label1.innerHTML = items.value[0];
        this.label2.innerHTML = items.value[1];

        this.newForm.appendChild(this.input1);
        this.newForm.appendChild(this.label1);
        this.newForm.appendChild(this.input2);
        this.newForm.appendChild(this.label2);

        this.newForm.appendChild(this.btnSubmit);

        this.title.innerHTML=this.items.subTitle;
        

        this.submit();  

    }
}