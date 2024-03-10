import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    firstNumber = 0;
    secondNumber=0;

    handleFirstNumberChange(event){
        this.firstNumber = event.target.value;
    }
    handleSecondNumberChnage(event){
        this.secondNumbert = event.target.value;
    }
    handleClick(event){
        
    }
}