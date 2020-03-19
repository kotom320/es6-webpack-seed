export class Survey {
    constructor(configuration = {}) {
        this.init();
        this.count = 1;
        this.arrayResult = [];
        this.setChk = "";
        this.preBtn.disabled= true;
    }

    init(){
        this.newForm = document.createElement('form');
        this.newForm.name = 'form';
        this.newForm.method ='post';
        this.newForm.action = '#';  
        this.s1();
        this.nextBtn();
        this.preBtn();
    }
    removeS(id){
        if(id==1){
            this.newForm.removeChild(this.input1);
        }
        if(id==2){
            this.newForm.removeChild(this.input1);
            this.newForm.removeChild(this.input2);
            this.newForm.removeChild(this.label1);
            this.newForm.removeChild(this.label2);
        }
        if(id==3){
            this.newForm.removeChild(this.input1);
            this.newForm.removeChild(this.input2);
            this.newForm.removeChild(this.input3);
            this.newForm.removeChild(this.label1);
            this.newForm.removeChild(this.label2);
            this.newForm.removeChild(this.label3);
        }if(id==4){
            this.newForm.removeChild(this.select);
        }if(id==5){
            this.newForm.removeChild(this.textArea);
        }
        this.newForm.removeChild(this.btnSubmit);


    }
    nextBtn(){
        this.nextBtn = document.getElementById('next');
        this.nextBtn.addEventListener("click", ()=>{
            if(this.count == 1){
                this.removeS(1);
                this.s2();
            }else if(this.count == 2){
                this.removeS(2);
                this.s3();
            }else if(this.count ==3){
                this.removeS(3);
                this.s4();

            }else if(this.count ==4){
                this.removeS(4);
                this.s5();
                this.nextBtn.disabled = true;
            }
            this.count++;
            if(this.count >4){
                this.count=5;
            }
            this.preBtn.disabled = false;


        });
    }
    preBtn(){
        this.preBtn = document.getElementById('pre');
        this.preBtn.addEventListener("click", ()=>{
            if(this.count == 5){
                this.removeS(5);
                this.s4();
            }else if(this.count ==4){
                this.removeS(4);
                this.s3();
            }else if(this.count ==3){
                this.removeS(3);
                this.s2();
            }else if(this.count == 2){
                this.removeS(2);
                this.s1();
                this.preBtn.disabled= true;
            }
            this.count--;
            if(this.count <2){
                this.count=1;
            }
            this.nextBtn.disabled = false;

            
        });
    }
    rederForm(surveyForm){
        this.title = document.querySelector("#title");
        this.input1 = document.createElement('input');
        this.input2 = document.createElement('input');
        this.input3 = document.createElement('input');
        this.label1 = document.createElement('label');
        this.label2 = document.createElement('label');
        this.label3 = document.createElement('label');


        this.select = document.createElement('select');
        this.option1 = document.createElement('option');
        this.option2 = document.createElement('option');

        this.textArea = document.createElement("textarea");

        this.btnSubmit = document.createElement('input');
        this.btnSubmit.type = "submit";
        this.btnSubmit.value = "확인";

        
        this.input1.type = surveyForm.type;
        this.input1.name = surveyForm.name;
        this.input1.value = surveyForm.value[0];

        this.input2.type = surveyForm.type;
        this.input2.name = surveyForm.name;
        this.input2.value = surveyForm.value[1];

        this.input3.type = surveyForm.type;
        this.input3.name = surveyForm.name;
        this.input3.value = surveyForm.value[2];
        
        this.label1.innerHTML = surveyForm.value[0];
        this.label2.innerHTML = surveyForm.value[1];
        this.label3.innerHTML = surveyForm.value[2];

        this.select.name =surveyForm.name;
        this.select.id = surveyForm.name;

        this.option1.value = surveyForm.value[0];
        this.option2.value = surveyForm.value[1];

        this.option1.innerText = surveyForm.value[0];
        this.option2.innerText = surveyForm.value[1];
        
        this.textArea.name = surveyForm.name;

        if(surveyForm.name == "s1"){
            this.newForm.appendChild(this.input1);
        }
        if(surveyForm.name == "s2"){
            this.newForm.appendChild(this.input1);
            this.newForm.appendChild(this.label1);
            this.newForm.appendChild(this.input2);
            this.newForm.appendChild(this.label2);
        }
        if(surveyForm.name == "s3"){
            this.newForm.appendChild(this.input1);
            this.newForm.appendChild(this.label1);
            this.newForm.appendChild(this.input2);
            this.newForm.appendChild(this.label2);
            this.newForm.appendChild(this.input3);
            this.newForm.appendChild(this.label3);
            this.input1.name = "s31";
            this.input2.name = "s32";
            this.input3.name = "s33";
        }
        if(surveyForm.name == "s4"){
            this.select.appendChild(this.option1);
            this.select.appendChild(this.option2);

            this.newForm.appendChild(this.select);
        }
        if(surveyForm.name == "s5"){
            this.newForm.appendChild(this.textArea);
        }
        //제출버튼
        this.newForm.appendChild(this.btnSubmit);

        this.title.innerHTML=surveyForm.subTitle;
        this.title.after(this.newForm); 
        this.submit();  

    }
    s1() {
        this.surveyForm ={
            subTitle : "1.이름을 입력하세요",
            type : "text",
            name:"s1",
            value : [""]
        };
        this.rederForm(this.surveyForm);
    }
    
    s2() {
        this.surveyForm ={
            subTitle : "2.성별을 선택하세요",
            type : "radio",
            name:"s2",
            value : ["남자","여자"]
        };
        this.rederForm(this.surveyForm);

    }
    s3() { 
        this.surveyForm ={
            subTitle : "3.언어를 선택하세요",
            type : "checkbox",
            name:"s3",
            value : ["java","javaScript","python"]
        };
        this.rederForm(this.surveyForm);
        
    }
    s4(){
        this.surveyForm ={
            subTitle : "4.좋아하는 애완동물은?",
            type : "select",
            name:"s4",
            value : ["강아지","고양이"]
        };
        this.rederForm(this.surveyForm);
    }
    s5(){
        this.surveyForm ={
            subTitle : "5.하고싶은말을 남겨주세요",
            name:"s5",
            value : []
        };
        this.rederForm(this.surveyForm);
    }
    submit(){
        this.newForm.onsubmit = ()=>{
            if(this.count==1){
                this.search = this.newForm.s1.value;
                this.arrayResult[0] = this.newForm.s1.value;
                if(this.arrayResult[0]==""){
                    alert("내용을 반드시 입력해주세요");
                
            }
                else{
                    alert(this.arrayResult);
                    this.removeS(1);
                    this.s2();
                    this.count++
                }
            }else if(this.count==2){
                this.arrayResult[1] = this.newForm.s2.value;
                if(this.arrayResult[1]==""){
                    alert("내용을 반드시 입력해주세요");
                
            }
                else{
                    alert(this.arrayResult);
                    this.removeS(2);
                    this.s3();
                    this.count++
                }
            }else if(this.count==3){
                if(this.newForm.s31.checked){
                    this.setChk += `${this.newForm.s31.value} `;
                }if(this.newForm.s32.checked){
                    this.setChk += `${this.newForm.s32.value} `;
                }if(this.newForm.s33.checked){
                    this.setChk += `${this.newForm.s33.value} `;
                };
                this.arrayResult[2] = this.setChk;
                if(this.arrayResult[2]==""){
                    alert("내용을 반드시 입력해주세요");
                
            }
                else{
                    alert(this.arrayResult);
                    this.setChk = "";
                    this.removeS(3);
                    this.s4();
                    this.count++
                }
            }else if(this.count==4){
                this.arrayResult[3] = this.newForm.s4.value;
                if(this.arrayResult[3]==""){
                    alert("내용을 반드시 입력해주세요");
                
            }
                else{
                    alert(this.arrayResult);
                    this.removeS(4);
                    this.s5();
                    this.count++
                }
            }else if(this.count==5){
                this.arrayResult[4] = this.newForm.s5.value;
                if(this.arrayResult[4]==""){
                    alert("내용을 반드시 입력해주세요");
                
            }
            this.result = this.arrayResult.filter(n=>n);
            if(this.result.length==5){
                document.getElementById("result").innerText = `${this.arrayResult[0]} 님의 성별은 ${this.arrayResult[1]}이며 사용하는 언어는 ${this.arrayResult[2]}입니다.
 선호하는 동물은 ${this.arrayResult[3]}입니다. 마지막으로 하고싶은 말은 "${this.arrayResult[4]}" 입니다`;
            }else if(this.result.length<5)
            alert("빠진부분은 없는지 확인해주세요");


            }

        return false;
        }
        
    }
}
    

    
