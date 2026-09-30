// const somar = require('./calculadora');
import { ehPar, somar } from './calculadora';
import { subtrair } from './calculadora';
import { multiplicar } from './calculadora';
import { dividir } from './calculadora';
import { somarNegativos } from './calculadora';
import { DivisãoZero } from './calculadora';
import { potencia} from './calculadora';
import {porcentagem} from './calculadora';
import { media } from './calculadora';

describe('Operações matemáticas', () =>{

     //Somar 
     test('Deve somar dois números', () =>{
        // Arrange
        const a = 8;
        const b = 5;
    
        // Act 
        const resultado = somar(a, b);

        // Assert
        expect(resultado).toBe(13)
         
    });
    
    //Subtrair
    test('Deve subtrair dois números', () =>{
        // Arrange
        const a = 10;
        const b = 4;
    
        // Act 
        const resultado = subtrair(a, b);

        // Assert
        expect(resultado).toBe(6)
         
    });


    //Multiplicaçãó
    test( 'Deve multiplicar dois numeros', () => {
    const a = 3;
    const b = 4;

    const resultado = multiplicar(a, b);
    expect(resultado).toBe(12)
      
    });

        //  Dividir
    test('Deve dividir dois números', () =>{
    
        const a = 10;
        const b = 2;
    
        const resultado = dividir(a, b);

    
        expect(resultado).toBe(5)
            
    });
            //  Somar números negativos

    test('Deve somar dois números negativos', () =>{

        const a = -2;
        const b = -3;
    
        const resultado = somarNegativos(a, b);

        expect(resultado).toBe(-5)
         
    });

            // Deve dividir Zero 

        test('Deve dividir com zero', () =>{

        const a = 10;
        const b = 0;
    
        const resultado = DivisãoZero(a, b);

        expect(resultado).toBe(0)

        });
    
        //Número Par
        test('Deve verificar se o número é par', () => {
            //Deve reconhcer 4 como par
            const n = 7 ;
            const resultado = ehPar(n)
            expect(resultado).toBe(false);

        });

        //Calcular Potência

        test('Deve calcular uma potencia',( ) => {
            const base= 2;
            const expoente= 3;

            const resultado = potencia(base, expoente);
            expect(resultado).toBe(8);

        });

        //Calcular Porcetagem
        test('Deve calcular uma porcentagem', () => {
            const valor = 200;
            const percentual = 10;

            const resultado = porcentagem(valor, percentual);
            expect(resultado).toBe(20);
        });

                // Calcular media 
         test ('Deve calcular media de tres numeros', () => {

            const a = 6 ;
            const b = 7;
            const c = 8;


            const resultado = media ( a,b,c);
            expect(resultado).toBe(7)
         });

});