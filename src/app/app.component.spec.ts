import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('El valor varCadena debe ser igual a un valor especifico: Esta es una cadena', () => {
    const appComponent = new AppComponent();
    const valor = appComponent.varCadena;
    expect(valor).toEqual('Esta es una cadena');
  });

  it('Una cadena debe contener el valor de varPalabra', ()=>{
    const appComponent = new AppComponent();
    const valor = appComponent.varPalabra;
    expect('Esta es una palabra').toContain(valor);
  })

  it('Debe retornar True si es mayor de edad, 18 años o mas', ()=>{
    const appComponent = new AppComponent();
    const respuesta = appComponent.isAdult(18);
    expect(respuesta).toBeTruthy();
  })

  it('Debe retornar False si es menor de edad, menos de 18 años', ()=>{
    const appComponent = new AppComponent();
    const respuesta = appComponent.isAdult(17);
    expect(respuesta).toBeFalsy();
  })

  it('Debe retornar Fizz si es divisible por 3', ()=>{
    const appComponent = new AppComponent();
    const respuesta = appComponent.fizzBuzz(3);
    expect(respuesta).toEqual('Fizz');
  })

  it('Debe retornar Buzz si es divisible por 5', ()=>{
    const appComponent = new AppComponent();
    const respuesta = appComponent.fizzBuzz(5);
    expect(respuesta).toEqual('Buzz');
  })

  it('Debe retornar FizzBuzz si es divisible por 3 y 5', ()=>{
    const appComponent = new AppComponent();
    const respuesta = appComponent.fizzBuzz(15);
    expect(respuesta).toEqual("FizzBuzz");
  })

  it('Debe retornar el mismo numero si no es divisible ni por 3 ni por 5', ()=>{
    const appComponent = new AppComponent();
    const respuesta = appComponent.fizzBuzz(4);
    expect(respuesta).toEqual(4);
  })

});
