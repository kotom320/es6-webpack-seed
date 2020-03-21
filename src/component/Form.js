import { create } from "domain";

export class Form {
    constructor(id,items){
        this.id = id;
        this.items = items;
        create();
        this.count = 1;
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
    renderSurvey(id,items){

    }
    removeSurvey(id){
    }
    nextBtnAct(){
        this.nextBtn.addEventListener("click", ()=>{
            this.removeSurvey();
            
        });
    }
    preBtnAtc(){
        this.preBtn.addEventListener("click", ()=>{
            this.removeSurvey();
            this.renderSurvey();
        });
    }
    

    submit(){
        
        
    }
  
}
