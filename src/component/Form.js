
export class Form {
    constructor(id,items){
        this.id = id;
        this.items = items;
        this.count = 1;
        this.stepNum = 1;
        this.arrayResult = [];
        this.init();
    }
    init(){
        this.create(this.id);
    }
    create(id){
        // if(this.stepNum == id){
        let survey = document.querySelector("#survey");
        this.surveyWrap = document.createElement("div");
        this.surveyWrap.id = 'sWrap';
        this.newForm = document.createElement('form');
        this.newForm.name = 'form'+this.id;
        this.newForm.method ='post';
        this.newForm.action = '#';
        
        this.btnWrap = document.createElement("div");
        this.btnWrap.id = "btnWrap";


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
        // this.submit();

        survey.appendChild(this.newForm);
        survey.appendChild(this.btnWrap);

            // this.showDisplay();
        // }     
       
    }
    showDisplay(){
        if(this.count == this.id){
            this.newForm.style.display = 'block';
            this.btnWrap.style.display = 'block';

        }else{
            this.newForm.style.display = 'none';
            this.btnWrap.style.display = 'none';

        }
    }
    renderSurvey(items){

    }
    removeSurvey(){
        let survey = document.getElementById('survey');
        while(survey.firstChild){
            survey.removeChild(survey.firstChild);
        }

    }
    nextBtnAct(){
        this.nextBtn.addEventListener("click", ()=>{
            this.count++;
            alert(this.count);
            // this.removeSurvey();
            this.update();
        });
    }

    update(){
        this.create(this.count);
    }
    preBtnAtc(){
        this.preBtn.addEventListener("click", ()=>{
            this.count--;
            alert(this.count);

        });
    }
    

    submit(){
        this.newForm.onsubmit = ()=>{
            let name = this.items.name;
            this.check = this.newForm.s1.value;
            this.arrayResult[this.id-1] = this.check;
                if(!this.check){
                    alert("내용을 반드시 입력해주세요");
                }
                else{
                    alert(this.arrayResult);
                    this.create(2);
                }
            return false;

        }
        
    }
  
}
