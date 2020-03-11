export class Survey {
    constructor(configuration = {}) {
        this.init();
        this.count = 1;
        this.arrayResult = [];
        this.setChk = "";

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
    removeS(i){
        if(i==1){
            this.newForm.removeChild(this.input1);
        }
        if(i==2){
            this.newForm.removeChild(this.input1);
            this.newForm.removeChild(this.input2);
            this.newForm.removeChild(this.label1);
            this.newForm.removeChild(this.label2);
        }
        if(i==3){
            this.newForm.removeChild(this.input1);
            this.newForm.removeChild(this.input2);
            this.newForm.removeChild(this.input3);
            this.newForm.removeChild(this.label1);
            this.newForm.removeChild(this.label2);
            this.newForm.removeChild(this.label3);
        }if(i==4){
            this.newForm.removeChild(this.select);
        }if(i==5){
            this.newForm.removeChild(this.textArea);
        }
        this.newForm.removeChild(this.btnSubmit);


    }
    nextBtn(){
        document.getElementById('next').addEventListener("click", ()=>{
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
            }
            this.count++;
            if(this.count >4){
                this.count=5;
            }

        });
    }
    preBtn(){
        document.getElementById('pre').addEventListener("click", ()=>{
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
            }
            this.count--;
            if(this.count <2){
                this.count=1;
            }
            
        });
    }
    s1() {
        this.title = document.querySelector("#title");
        this.title.innerHTML="1.이름을 입력하세요";
        this.input1 = document.createElement('input');

        this.input1.type = "text";
        this.input1.name = "s1";

        this.newForm.appendChild(this.input1);
        this.btnSubmit = document.createElement('input');
        this.btnSubmit.type = "submit";
        this.newForm.appendChild(this.btnSubmit);

        this.title.after(this.newForm); 
        this.submit();  
    }
    s2() {
        this.title = document.querySelector("#title")
        this.title.innerHTML="2.성별을 선택하세요";

        this.input1 = document.createElement('input');
        this.input2 = document.createElement('input');
        this.label1 = document.createElement('label');
        this.label2 = document.createElement('label');

        this.label1.innerHTML = "남자";
        this.label2.innerHTML = "여자";


        this.input1.type = "radio";
        this.input1.name = "s2";
        this.input1.value="남자";
        this.input2.setAttribute("type","radio");
        this.input2.setAttribute("name","s2");
        this.input2.setAttribute("value","여자");


        this.newForm.appendChild(this.input1);
        this.newForm.appendChild(this.label1);
        this.newForm.appendChild(this.input2);
        this.newForm.appendChild(this.label2);

        this.btnSubmit = document.createElement('input');
        this.btnSubmit.type = "submit";
        this.newForm.appendChild(this.btnSubmit);

        this.title.after(this.newForm);  
        this.submit();  
    }
    s3() { 
        this.title = document.querySelector("#title")
        this.title.innerHTML="3.언어를 선택하세요";

        this.input1 = document.createElement('input');
        this.input2 = document.createElement('input');
        this.input3 = document.createElement('input');

        this.input1.setAttribute("type","checkbox");
        this.input1.setAttribute("name","s31");
        this.input1.setAttribute("value","java");

        this.input2.setAttribute("type","checkbox");
        this.input2.setAttribute("name","s32");
        this.input2.setAttribute("value","javaScript");

        this.input3.setAttribute("type","checkbox");
        this.input3.setAttribute("name","s33");
        this.input3.setAttribute("value","python");

        this.label1 = document.createElement('label');
        this.label2 = document.createElement('label');
        this.label3 = document.createElement('label');

        this.label1.innerHTML = "JAVA"
        this.label2.innerHTML = "JavaScript"
        this.label3.innerHTML = "Python"
       
        this.newForm.appendChild(this.input1);
        this.newForm.appendChild(this.label1);
        this.newForm.appendChild(this.input2);
        this.newForm.appendChild(this.label2);
        this.newForm.appendChild(this.input3);
        this.newForm.appendChild(this.label3);

        this.btnSubmit = document.createElement('input');
        this.btnSubmit.type = "submit";
        this.newForm.appendChild(this.btnSubmit);

        this.title.after(this.newForm);  


    }
    s4(){
        this.title = document.querySelector("#title");
        this.title.innerHTML="4.좋아하는 애완동물은?";

        this.select = document.createElement('select');

        this.option1 = document.createElement('option');
        this.option2 = document.createElement('option');
        this.select.setAttribute("name","s4");
        this.select.setAttribute("id","s4");
        this.option1.setAttribute("value","강아지");
        this.option2.setAttribute("value","고양이");
        this.option1.innerText = "강아지";
        this.option2.innerText = "고양이";

        this.select.appendChild(this.option1);
        this.select.appendChild(this.option2);

        this.newForm.appendChild(this.select);
        this.btnSubmit = document.createElement('input');
        this.btnSubmit.type = "submit";
        this.newForm.appendChild(this.btnSubmit);
        this.title.after(this.newForm);

    }
    s5(){
        this.title = document.querySelector("#title");
        this.title.innerHTML="5.하고싶은말";
        this.textArea = document.createElement("textarea");
        this.textArea.name = "s5";
        this.newForm.appendChild(this.textArea);
        this.btnSubmit = document.createElement('input');
        this.btnSubmit.type = "submit";
        this.newForm.appendChild(this.btnSubmit);

        this.title.after(this.newForm);


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
    

    
