
let formh=document.getElementById('formh')
let Stotal=document.getElementById('STotal')
let total=0;
const suma= (a,b) => a+b;
let id=0;
let array=[];
formh.addEventListener('submit', (e) =>{
    e.preventDefault()
    id=id+1;
    let producto=document.getElementById('producto').value
    let tamano=document.getElementById('tamano').value
    formh.reset()
    if (producto==1){
        total=suma(total,25)
     } else{
        if (producto==2){
            total=suma(total,35)
         } else{
              if (producto==3){
                total=suma(total,30)
            } else{
                    alert("Número de producto no válido")
                }  
            }
        }
        if (tamano==1){
            total=suma(total,5) 
         } else{
            if (tamano==2){
                total=suma(total,10)
            } else{
                if (tamano==3){
                    total=suma(total,15)
                } else{
                    alert("Número de combo no válido")
                }  
            }
        }
        let orden = {id,producto,tamano,total};
        array.push(orden)
        
        Stotal.innerHTML = `<h2> Tu total es de ${total}</h2>`
})

console.log(array)
