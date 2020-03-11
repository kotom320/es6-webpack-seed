
export class Calculator {

  constructor(configuration = {}) {
    this.number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.oper = ['+' , '-' ,'x','/'];
    this.show = "";
    this.showTextElement = document.querySelector("#showtext");
    this.init();

  }

  init() {
    this.unSelected();
    this.selecteNum();
    this.operlation();
    this.gateEqual();
    this.gateClear();
    this.gateDel();
  }

  unSelected() {
    this.showTextElement.value = 0;
  }
  gateNum(i) {
    document.getElementById(i).addEventListener("click", () => {
      console.log("press" + i);

      this.show = this.show + document.getElementById(i).id;
      this.showTextElement.value = this.show;
    });
  }
  selecteNum() {
    for (var i of this.number) {
      this.gateNum(i);
    }
  }

  gateOper(clac){
    document.getElementById(clac).addEventListener("click", () => {
        console.log(isNaN(this.show.charAt(this.show.length-1)));
        if(isNaN(this.show.charAt(this.show.length-1)) || this.show == "" ){
          
            return;
        }
        this.show = this.show + document.getElementById(clac).id;
      this.showTextElement.value = this.show;
    })
  }
  operlation() {
    for(var clac of this.oper){
        this.gateOper(clac);
    }
  }

  gateEqual(){
    document.getElementById('=').addEventListener("click", () => {
        console.log('!!!!!!!!!!!!')
        //0. 맨 처음이 0일경우 숫자는 0을 제외한다.
        //1. 맨 마지막이 숫자가 아닐경우, 그 문자를 지움
        //2. x 를 *로 변경해서 계산
        //3. eval함수를 사용해보기
        //4. = 을 눌렀을떄 결과값이 showtext에 나오게
        let result = null;
        let operString = this.show;
        operString = this.show;
        if(operString==""){
        return;

        }
        while(operString.charAt(0)==0){
          if(operString==0){
            operString= 0+"";
            break;
          }   
          operString = operString.slice(1,operString.length);
            console.log(operString);
                       
        }        
        if(isNaN(operString.charAt(operString.length-1))){
            operString = operString.slice(0,operString.length-1);
            console.log(operString);            
        }
        operString =  operString.replace(/x/g,'*');
        result = eval(operString)
        console.log(operString,result);
        this.showTextElement.value = result;
        this.show = result+"";
    })
    
  }
  

  gateClear(){
    document.getElementById('c').addEventListener("click", () => {
        this.show = "";
        this.unSelected();
    });

  }
  gateDel(){
    document.getElementById('d').addEventListener("click", () => {
        this.show = this.show.slice(0,this.show.length-1);
        console.log(this.show);
        if(this.show.length==0){
            this.unSelected();
        }else{

            this.showTextElement.value=this.show;
        }
    });
  }
}
