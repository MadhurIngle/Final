import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-even-number',
  templateUrl: './even-number.component.html',
  styleUrls: ['./even-number.component.scss']
})
export class EvenNumberComponent implements OnInit {

  constructor() { }
  firstNumber = new FormControl('', [Validators.required, Validators.email]);
  secondNumber = new FormControl('', [Validators.required]);
  resultTxt = new FormControl('');
  isError = false;
  result = '';
  ngOnInit(): void {
  }

  printEven() {
    let errorMessage = '';
    const firstNumber = parseInt(this.firstNumber.value);
    const secondNumber = parseInt(this.secondNumber.value);
    console.log(firstNumber, secondNumber);
    if (isNaN(firstNumber)) {
      this.isError = true;
      errorMessage = 'Number 1 input ' + this.firstNumber.value + ' is not a valid number\n';
    }
    if (isNaN(secondNumber)) {
      this.isError = true;
      console.log(secondNumber);
      errorMessage = errorMessage + 'Number 2 input ' + this.secondNumber.value + ' is not a valid number\n';
    }
    if ((this.firstNumber.value < 2 || this.firstNumber.value > 1000)) {
      this.isError = true;
      errorMessage = errorMessage + 'Number 1 input ' + this.firstNumber.value + ' is not in range of 2 and 1000\n';
    }
    if ((this.secondNumber.value < 2 || this.secondNumber.value > 1000)) {
      this.isError = true;
      errorMessage = errorMessage + 'Number 2 input ' + this.secondNumber.value + ' is not in range of 2 and 1000\n';
    }
    if (this.isError) {
      console.log(this.resultTxt.value)
      this.resultTxt.setValue(errorMessage);
    }
  
  }

}
