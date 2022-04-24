const fruitsObject = [{
    name: "Banana",
    points: 0,
},{
    name: "Manzana",
    points: 0,
},{
    name: "Pera",
    points: 0,
},{
    name: "Sandía",
    points: 0,
},{
    name: "Anana",
    points: 0,
},{
    name: "Kiwi",
    points: 0,
},{
    name: "Naranja",
    points: 0,
},{
    name: "Mandarina",
    points: 0,
},{
    name: "Maracuyá",
    points: 0,
},{
    name: "Frutilla",
    points: 0,
},{
    name: "Cereza",
    points: 0,
},{
    name: "Uva",
    points: 0,
},{
    name: "Melón",
    points: 0,
},{
    name: "Pomelo",
    points: 0,
},{
    name: "Ciruela",
    points: 0,
},{
    name: "Durazno",
    points: 0,
},{
    name: "Frambuesa",
    points: 0,
},{
    name: "Limón",
    points: 0,
},{
    name: "Tomate",
    points: 0,
},{
    name: "Higo",
    points: 0,
},]


export default function frutaSearch(fruta){ //Mi función de ordenamiento

    fruitsObject.forEach((el)=>{ //Reinicio cualquier cosa que pueda estar guardada
        el.points = 0;
    })

    try{
        fruitsObject.forEach((el)=>{ //Primer algoritmo de matcheo, este compara 
                                    //cada item de cada objeto base con el 
                                    //item en la misma posición del ingresado
                                    //por el usuario y le asigna un puntaje
            const string1 = el.name.toUpperCase().split("");
            const string2 = fruta.toUpperCase().split("");
            const partialValue = 1/string1.length;
            string1.forEach((item,pos)=>{
                (comparison(item,string2[pos])) &&  (el.points = el.points + partialValue);
            })
            
        })    
        
        fruitsObject.forEach((el)=>{ //Segundo algoritmo de matcheo, este busca
                                    //caracteres que coincidan en el objeto base
                                    //retirandolos tanto del string ingresado
                                    //por el usuario como del base para que
                                    //al repetir letras no se asignen puntos
                                    //adicionales
            let string1 = el.name.toUpperCase().split("");
            let string2 = fruta.toUpperCase().split("");
            const partialValue = 1/string1.length;
            while(string1.length !== 0 && string2.length !== 0){
                let bool = false;
                string2 = string2.map((item,pos,arr)=>{
                    let element = item;
                    if (comparison(item,string1[0]) && bool === false){
                        (el.points = el.points + partialValue);
                        element = "";
                        bool = true;
                    }       
                    return element              
                })
                string1.shift();
            }
        })

        fruitsObject.forEach((el)=>{ //Tercer algoritmo de matcheo, este compara
                                    //el objeto base con el string ingresado de manera
                                    //exacta, para darle mayor puntaje a los ingreasdos
                                    //correctamente
            const string1 = el.name.toUpperCase();
            const string2 = fruta.toUpperCase();
            const bool = comparison(string1,string2);
            (bool && (el.points = el.points + 1));
        })
    }
    catch(err){
        console.log(err) //devuelvo error si algo sucede
    }

    fruitsObject.sort(function(a,b){return b.points - a.points}) //ordeno mi objeto base de mayor puntaje a menor
    return fruitsObject; //lo devuelvo a mi componente en react
}

function comparison(el1,el2){ //funcion adicional que compara, y también declara ciertas excepciones para faltas ortográficas
    const error1 = ["V","B"];
    const error2 = ["C","S","Z"];
    const error = [["A","Á","À"],["E","É","È"],["I","Í","Ì"],["O","Ó","Ò"],["U","Ú","Ù"]]
    let bool = false;
    let string1 = el1;
    let string2 = el2;

    if(error1.includes(el1) && error1.includes(el2)){
        bool = true;
    }
    if(error2.includes(el1) && error2.includes(el2)){
        bool = true;
    }
    error.forEach((el,pos,arr)=>{
        if (el.includes(el1)){
            string1 = arr[pos][0]
        }
        if (el.includes(el2)){
            string2 = arr[pos][0]
        }
    })

    if (bool === false && string1 === string2){
        bool = true;
    }
    return bool;
}