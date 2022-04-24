export async function deleteItems(resultadoDiv){ //Función que borra los elementos existentes

	const promise = new Promise((resolve,reject)=>{ //declaro una promesa que va a esperar 0.1 segundos para resolverse
		setTimeout(()=>{
			while(resultadoDiv.lastElementChild){
				resultadoDiv.removeChild(resultadoDiv.lastElementChild)
			}
			resolve("deleted")
		},100)
	})
	let respuesta = await promise; //espero la respuesta y la devuelvo
	return respuesta;
}

export async function createItems (resultadoDiv){ //Función que crea los elementos

	const promise = new Promise((resolve,reject)=>{ //declaro una promesa que va a esperar 2 segundos para resolverse
                                                    //por lo que los items van a aparecer con un delay
		setTimeout(()=>{
			resultadoDiv.innerHTML = `<div style=opacity:0>Primero</div> 
										<div style=opacity:0>Segundo</div>
										<div style=opacity:0>Tercero</div>
										<div style=opacity:0>Cuarto</div>
										<div style=opacity:0>Quinto</div>`; //declaro a todos con opacidad 0 para que no sean visibles
			resolve("created")
		},2000)
	})
	let respuesta = await promise; //espero la respuesta y la devuelvo
	return respuesta;
}

export async function animateItems (resultadoDiv){ //Función que anima la aparición

	let respuesta = null;

    for (let b = 0; b<=resultadoDiv.childElementCount+3; b=b+2){ //Mi array de objetos
            for (let i = 0; i<=100; i=i+1){ //Ciclo que va a realizar la animación
                const promise2 = new Promise ((resolve,reject)=>{ //Declaro la promera que va a darle el delay a la animación        
                    setTimeout(()=>{
                        resultadoDiv.childNodes[b].style.opacity = i/100;
                        resolve("animated");
                    },1)
                })
                respuesta = await promise2; //obligo al ciclo a esperar la respuesta, dando por consiguiente el delay en la aparición que yo quiero               
            }
    }
	return respuesta; //retorno la respuesta una vez terminado
}