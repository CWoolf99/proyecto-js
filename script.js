
let repetir=true;
let total=0;
const suma= (a,b) => a+b;
let id=0;
let tamano=0;
let array=[];
alert("Instrucciones:Ingrese los numeros de lo que desea ordenar")
while(repetir){
    id=id+1;
    let producto=parseInt(prompt("Que desea ordenar? 1.-Hamburgesa sencilla $25 2.-Hamburguesa con queso $35 3.-Sandwich de pollo $30"))
    if (producto==1){
        total=suma(total,25)
     } else{
        if (producto==2){
            total=suma(total,35)
         } else{
              if (producto==3){
                total=suma(total,30)
            } else{
                    alert("Número no válido")
                }  
            }
        }
        if (producto==1 || producto==2 || producto==3){
            tamano=parseInt(prompt("Tamaño? 1.-Chico $5 2.-Mediano $10 3.-Grande $15"))
            if (tamano==1){
                total=suma(total,5) 
            } else{
                if (tamano==2){
                    total=suma(total,10)
                } else{
                    if (tamano==3){
                        total=suma(total,15)
                    }
                }
            }
        }
        let orden = {id,producto,tamano,total};
        array.push(orden)
    let confirmacion = prompt("¿Desea pedir otra cosa? si o no")
    if(confirmacion == "no") {
        repetir = false
    }
}
alert(`Tu total es de ${total}`)
/* impresion en la consola de cuantas y que hamburguesas se ordenaron */
for (const producto of array){
    console.log(producto.producto)
}
console.log(array)