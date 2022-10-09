import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdult(age: number) {
    if (age >= 18){
      return true;
    }
      return false;
  }

  fizzBuzz(number:number){
    if((number%3 == 0) && (number%5 == 0)){
      return "FizzBuzz";
    }
    if(number%3 == 0){
      return "Fizz";
    }
    if(number%5 == 0){
      return "Buzz";
    }
    return number;
  }

  title = 'UnitTest';
  varCadena = 'Esta es una cadena';
  varPalabra = "Esta";
}

