import { Form } from "./Form";

export class InputTextBox extends Form{
    constructor(id,items){
        super(id, items);
        this.create();
    }
    create(){
        this.survey = document.querySelector("#survey");
        this.newForm = document.createElement('form');
        this.newForm.name = 'form';
        this.newForm.method ='post';
        this.newForm.action = '#';
        
        this.preBtn = document.createElement('button');
        this.preBtn.id = 'pre';
        this.preBtn.innerText = '이전';

        this.nextBtn = document.createElement('button');
        this.nextBtn.id = 'next';
        this.nextBtn.innerText = '다음';

        this.btnSubmit = document.createElement('input');
        this.btnSubmit.type = "submit";
        this.btnSubmit.value = "확인";

        this.title = document.createElement("h3");
        this.title.innerHTML = items.subTitle;

        this.newForm.appendChild(this.title);
        renderSurvey(this.items);
        this.newForm.appendChild(this.preBtn);
        this.newForm.appendChild(this.nextBtn);
        nextBtnAct();
        preBtnAtc();

        this.survey.appendChild(this.newForm);
    }
    renderSurvey(items){
        this.input1 = document.createElement('input');

        this.input1.type = items.type;
        this.input1.name = items.name;
        this.input1.value = items.value[0];

        this.newForm.appendChild(this.input1);

        this.newForm.appendChild(this.btnSubmit);

        this.title.innerHTML=surveyForm.subTitle;
        this.title.after(this.newForm); 

        this.submit();  

    }
    removeSurvey(id){
        this.newForm.removeChild(this.input1);


    }
    submit(){

    }

}