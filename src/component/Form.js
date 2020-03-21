
export class Form {
    constructor(id,items){
        this.id = id;
        this.items = items;
        this.count = 1;
        this.create();
    }

    create(){
        this.survey = document.querySelector("#survey");
       
        this.newForm = document.createElement('form');
        this.newForm.name = 'form';
        this.newForm.method ='post';
        this.newForm.action = '#';
        
        this.btnWrap = document.createElement("div");

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
        this.title.innerHTML = this.items.subTitle;

        this.newForm.appendChild(this.title);
        this.renderSurvey(this.items);
        this.btnWrap.appendChild(this.preBtn);
        this.btnWrap.appendChild(this.nextBtn);
        this.nextBtnAct();
        this.preBtnAtc();
        this.submit();

        this.survey.appendChild(this.newForm);
        this.survey.append(this.btnWrap);
    }
    renderSurvey(items){

    }
    removeSurvey(){
        alert("폼 제거");
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
        this.newForm.onsubmit = ()=>{
            this.check = this.newForm.s1.value;
            this.arrayResult += this.check;
                if(!this.check){
                    alert("내용을 반드시 입력해주세요");
                }
                else{
                    alert(this.arrayResult);
                }
            return false;

        }
        
    }
  
}
