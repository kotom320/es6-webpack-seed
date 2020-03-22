import "./style.css";

// import { DocumentSelectionExample } from "./component/document-selection-example";
import { Survey } from "./component/survey"; 
import { InputTextBox } from "./component/InputTextBox";
import { RadioBtn } from "./component/RadioBtn";
import { CheckBox } from "./component/CheckBox";
import { SelectBox } from "./component/SelectBox";
import {TextArea} from "./component/TextArea";
const excute = () => {
  // const documentSelectionExample = new DocumentSelectionExample();
  // const survey = new Survey();
  const inputText = new InputTextBox("1",{subTitle : "1.이름을 입력하세요",type : "text",name:"s1",value : [""]});
  const radioBtn = new RadioBtn("2",{subTitle : "2.성별을 선택하세요",type : "radio",name:"s2",value : ["남자","여자"]});
  const checkBox = new CheckBox("3",{
    subTitle : "3.언어를 선택하세요",
    type : "checkbox",
    name:"s3",
    value : ["java","javaScript","python"]
});
  const selectBox = new SelectBox("4",{
    subTitle : "4.좋아하는 애완동물은?",
    type : "select",
    name:"s4",
    value : ["강아지","고양이"]
});
  const teatArea = new TextArea("5",{
    subTitle : "5.하고싶은말을 남겨주세요",
    name:"s5",
    value : []
});
};

excute();
