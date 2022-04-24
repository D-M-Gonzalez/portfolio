//declaro las globales
const formula = []; //Mi array de fórmulas

//variables que guardan posiciones
let posFormulas = 0;

//declaro los eventos
class objFormula {
    constructor(formulaPos){
        this.formulaPos = formulaPos; //id de la fórmula ingresada
        this.formulaFinal = []; //array que contiene la fórmula verificada
        this.strNum = []; //matriz que contiene cada uno de los caracteres en cada una de las etapas
        this.resultado = 0; //resultado de la fórmula
    }
    limpiarStr(arrayFormulaOriginal){
        this.formulaFinal = arrayFormulaOriginal.filter((el) => !el.includes(" "));
    }
    nuevoDobleArray(){
        for ( let i = 0; i<=0; i++){
            this.strNum.push();
        }
        for ( let i = 0; i<=0; i++){    
            this.strNum[i] = [];
        }
    }
    //el método agruparNumeros toma caracteres individuales consecutivos de números y los transforma en un número único
    agruparNumeros(num){
        let validNum = "1234567890.";
        this.formulaFinal.forEach((item,pos,arr)=>{
            let tempStr = arr[pos];
            while(validNum.includes(arr[pos+1]) && validNum.includes(item)){
                    tempStr = tempStr + arr[pos+1];
                    arr.shift();
            }
            if(item==="x"){
                tempStr = num;
            }
            if(item==="/x" && num === 0){
                tempStr = 0.0001;
            }
            this.strNum[0].push(tempStr);                   
        })
    }
}

// Tomo el valor ingresado en el cuadro de texto o al presionar enter
export default function hacerCalculo(formulaOriginal,x){

    const resul = aproximate(formulaOriginal,x);
    return resul;
}
    
function calculo(arrayFormulaOriginal,num){
    const nuevaFormula = new objFormula(posFormulas);   
    formula.unshift(nuevaFormula);
    formula[0].limpiarStr(arrayFormulaOriginal);
    //Inicializo la matriz de caracteres y etapas
    formula[0].nuevoDobleArray();
    //agrupo los números para poder operarlos
    formula[0].agruparNumeros(num);
    //Busco etapas y realizo su cálculo si existen
    //realizo el cálculo de la etapa inicial e informo resultado y fórmula de la etapa inicial
    formula[0].resultado = Number(calcular(formula,0));
    formula[0].resultado = formula[0].resultado.toFixed(8);
    return formula[0].resultado
}



//función que llama a las distintas operaciones en el orden de prioridad correcto
function calcular(formula,tier){
    for (const [pos] of formula[0].strNum[tier].entries()){operar(pos,formula[0].strNum[tier],formula,tier,"potenciar")}
    for (const [pos] of formula[0].strNum[tier].entries()){operar(pos,formula[0].strNum[tier],formula,tier,"multiplicar")}
    for (const [pos] of formula[0].strNum[tier].entries()){operar(pos,formula[0].strNum[tier],formula,tier,"dividir")}
    for (const [pos] of formula[0].strNum[tier].entries()){operar(pos,formula[0].strNum[tier],formula,tier,"restar")}
    for (const [pos] of formula[0].strNum[tier].entries()){operar(pos,formula[0].strNum[tier],formula,tier,"sumar")}
    return formula[0].strNum[tier][0];
}

//funciones de operaciones
function operar(pos,arr,formula,tier,operacion){
    let opero = false;
    let operacionStr = "";
    let operacionFuncion;

    switch(operacion){
        case "sumar":
            if(arr[pos] === "+"){
                opero = true;
                operacionStr = "sumar";
                operacionFuncion = (a,b) => {return a + b}
            }
        break;
        case "restar":
            if(arr[pos] === "-"){
                opero = true;
                operacionStr = "restar";
                if (pos===0){
                    arr.unshift("0");
                    pos++;
                }
                operacionFuncion = (a,b) => {return a - b}
            }
        break;
        case "multiplicar":
            if(arr[pos] === "*"){
                opero = true;
                operacionStr = "multiplicar";
                operacionFuncion = (a,b) => {return a * b}
            }
        break;
        case "dividir":
            if(arr[pos] === "/"){
                opero = true;
                operacionStr = "dividir";
                operacionFuncion = (a,b) => {return a / b}
            }
        break;
        case "potenciar":
            if(arr[pos] === "^"){
                opero = true;
                operacionStr = "potenciar";
                operacionFuncion = (a,b) => {return Math.pow(a,b)}
            }
        break;
        default:
        break;        
    }
    if (opero){
        arr[pos-1] = operacionFuncion(parseFloat(arr[pos-1]),parseFloat(arr[pos+1]))
        arr.splice(pos,2);
        for (const [pos] of formula[0].strNum[tier].entries()){
            operar(pos,formula[0].strNum[tier],formula,tier,operacionStr)}
    }
}

function aproximate(a,x){
    const arrayTemp = a.split("=");
    //Declaro mis estados iniciales
    let num = Number(x); //Incognita
    let bajada = true; //Relacion entre la incognita 1 y 2
    let subida = false; //Relacion entre la incognita 1 y 2

    num = doAproximate(bajada,subida,num,arrayTemp)

    if(num === "error"){

        num = Number(x);
        bajada = false; //Relacion entre la incognita 1 y 2
        subida = true; //Relacion entre la incognita 1 y 2
    
        num = doAproximate(bajada,subida,num,arrayTemp)
    }

    (num !== "error" && (num = Number(num).toFixed(5)))
    return num; // devuelvo el resutlado
}

function doAproximate(bajada,subida,num,arrayTemp){
    let resul1 = 0.0; //Resultado formula 1
    let resul2 = 1.0; //Resultado formula 2
    let prec = 100.0; //Precision de la aproximación inicial
    let limit = 0; //limite de iteraciones para evitar un infinite loop
    let resulAnt = 0; //Diferencia entre resultados anterior
    let resulAct = 0; //Diferencia entre resultados actual
    let numAnt = 0;

    while (Number(resul1).toFixed(3)!==Number(resul2).toFixed(3)){ //Comparo ambos resultados, mi objetivo es que sean iguales
        if (limit > 500){break}

            //Declaro las condiciones de aproximación. Cada condicion compara la diferencia entre el resultado actual y el anterior, mi objetivo
            //es que el resultado de la diferencia tienda a 0. Comparo también el movimiento de la incognita, donde bajada es para
            //una incognita que reduce su valor tras cada iteración y subida una que lo aumenta, por ejemplo:
            //Si mi diferencia de resultados se acerco a 0, estoy llendo por buen camino, entonces sigo como estoy
            //Si mi diferencia de resultados se alejo del 0, estoy llendo por mal camino, entonces en vez de "ir en bajada", cambio a subida, por lo que
            //mi incognita va a empezar a crecer. Para todo esto tengo en cuenta si la diferencia de resultados fué positiva o negativa, ya que el comportamiento
            //sería diferente.
            if ( resulAnt < resulAct && bajada && resulAct < 0){ 
                numAnt = num;
                num = (num < 0) ? (num + prec) : (num - prec);   
            } else if ( resulAnt < resulAct && bajada && resulAct > 0){
                numAnt = num;
                bajada = false;
                subida = true;
                num = (num < 0) ? (num - prec) : (num + prec); 
            } else if ( resulAnt < resulAct && subida && resulAct < 0){
                numAnt = num;
                num = (num < 0) ? (num - prec) : (num + prec);                 
            } else if ( resulAnt < resulAct && subida && resulAct > 0){
                subida = false;
                bajada = true;
                numAnt = num;
                num = (num < 0) ? (num + prec) : (num - prec);   
            } else if ( resulAnt > resulAct && bajada && resulAct < 0){
                numAnt = num;
                bajada = false;
                subida = true;
                num = (num < 0) ? (num - prec) : (num + prec); 
            } else if ( resulAnt > resulAct && bajada && resulAct > 0){
                numAnt = num;
                num = (num < 0) ? (num + prec) : (num - prec); 
            } else if ( resulAnt > resulAct && subida && resulAct < 0){
                numAnt = num;
                bajada = true;
                subida = false;
                num = (num < 0) ? (num + prec) : (num - prec);           
            } else if ( resulAnt > resulAct && subida && resulAct > 0){
                numAnt = num;
                num = (num < 0) ? (num - prec) : (num + prec);   
            } else if ( resulAnt === resulAct && subida){
                numAnt = num;
                num = (num < 0) ? (num - prec) : (num + prec); 
            } else if ( resulAnt === resulAct && bajada){
                numAnt = num;
                num = (num < 0) ? (num + prec) : (num - prec);  
            }
            //Declaro la condición de corte, para aumentar la presición de la aproximación. En este caso, cada vez que crucé el 0, o la infinidad, quiere decir
            //Que me "pasé" de mi resultado, por lo que tengo que volver pero esta vez, con iteraciones mas pequeñas.
            if ( (resulAnt > 0 && resulAct < 0) || (resulAnt < 0 && resulAct > 0) || (resulAct === Infinity) || ( num > 0 && numAnt < 0 ) || ( num < 0 && numAnt > 0 )  ){
                prec = prec/10;
            }

            //Opero
        resulAnt = resul1 - resul2;
        const arrayFormulaOriginal1 = arrayTemp[0].split("");
        const arrayFormulaOriginal2 = arrayTemp[1].split("");
        resul1 = calculo(arrayFormulaOriginal1,num);
        resul2 = calculo(arrayFormulaOriginal2,num);
        resulAct = resul1 - resul2;
        limit++; //Aumento en 1 la iteración, para que si llego al límite corte la función
    }
    (limit>500) && (num = "error");
    return num;
}