import { LightningElement, track } from 'lwc';

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

    /* change */ 
    @track displayValue = '';
    
    buttons = [
        { label: '7' },
        { label: '8' },
        { label: '9' },
        { label: 'C' },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '/' },
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '*' },
        { label: '0' },
        { label: '+' },
        { label: '-' },
        { label: '=' }
    ];

    handleButtonClick(event) {
        const buttonValue = event.target.label;

        if (buttonValue === 'C') {
            // Clear the display
            this.displayValue = '';
        } else if (buttonValue === '=') {
            // Evaluate the expression
            try {
                this.displayValue = eval(this.displayValue).toString();
            } catch (error) {
                this.displayValue = 'Error';
            }
        } else {
            // Append the button value to the display
            this.displayValue += buttonValue;
        }
    }

}