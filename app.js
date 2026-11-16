"use strict";
{
    async function cargarBestias() {

        //Metemos el div del index en una constante para poder utilizarlo
        const lista = document.getElementById("lista")

        //Pide el archivo JSON
        const respuesta = await fetch("data.json");
        
        //Convierte la informacion del archivo en un array JS
        const bestias = await respuesta.json();

        //Repite esta acción con cada entrada individual del array.
        for(const bestia of bestias){
            const targeta = document.createElement("div")
            targeta.className = "lista";
            targeta.innerHTML = `
                    <a href="">
                        <div class="bestia">
                            <div class="bestiaImg"><img src="src/img/wybern.jpg" alt=""></div>
                            <div class="bestiaInfo">${bestia.id} | ${bestia.name}</div>
                        </div>
                    </a>
            `
            lista.appendChild(targeta);
        }

    }
    cargarBestias();
}