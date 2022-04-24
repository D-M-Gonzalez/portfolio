const mathScriptString = 
`function aproximate(a,x){
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
}`

export default mathScriptString;