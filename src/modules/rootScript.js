export default function rootScript(b,e){
    let base = b; //base de la raíz
    let exp = e; //exponente de la raíz
    let num = 0.0; //número utilizado para realizar el cálculo, el que va a ser el resultado de la raiz
    let resul = 0.0; //resultado de la inversa de la raíz
    let prec = 1000.0; //presición inicial
    let mayor = false; //condición de corte, si vengo de mayor
    let menor = false; //condición de corte, si vengo de menor
    let limit = 0; //límite de iteraciones

    !base ? base = 1 : base = Number(base).toFixed(5);
    !exp ? exp = 1 : exp = Number(exp);
    

    while (resul.toFixed(5)!==base){ //Comparo mi resultado con mi base. 
                                    //La idea es realizar una cantidad grande de "potencias",
                                    // y encontrar la correcta para que
                                    //me de igual a la base, osea realizar una inversa de la raíz.

        if (limit > 1000){break} //si supero las 1000 iteraciones que corte y de error
        //Declaro mis condiciones de aproximación,
        // en donde si mi resultado se acercó a mi base,
        // entonces sigo por el mismo camino y voy aumentando
        //mi número o reduciendo, por cada iteración.
        if ( resul < base ){
            menor = true;
            num = num + prec;
            resul = num;
        }
        if ( resul > base ){
            mayor = true;
            num = num - prec;
            resul = num;
        }

        //Declaro mis condiciones de corte,
        // en donde si mi resultado se alejó de mi base entonces doy la vuelta y
        // hago que mis iteraciones sean mas pequeñas.
        if ( mayor === true && resul < base){
                    prec = prec / 10.0;
                    mayor = false;
        }
        if ( menor === true && resul > base ){
            prec = prec / 10.0;
            menor = false;
        }
        //Realizo el cálculo
        for (let i=0; i<exp-1; i++){
            resul = resul*num;
        }
        limit++; //Aumento el límite, para evitar loops infinitos
    }
    num = (num).toFixed(5);
    return num; //retorno el resultado
}

