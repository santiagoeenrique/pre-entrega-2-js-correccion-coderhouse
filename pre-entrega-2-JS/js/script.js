//Funcion de carrito de compras de verduleria
//Este simulador de veruleria simula la compra, suma si el usuario elige ser comprando lo suma con otro producto, y dependiendo los kilos se multiplica

//Todas las salidas de resultados estan con "console.log" (mayormente)

const productosFruta = [
    {nombre:"Frutilla", precio:1500 },
    {nombre:"Manzana", precio: 1000 },
    {nombre:"Sandia", precio:3000 },
    {nombre:"Pera", precio: 900 },
    {nombre:"Zanahoria", precio: 1000 },
    {nombre:"Moron", precio: 1300 }
    ];


//Puse el metodo de filtrado y busqueda con .filter y .find
//Hice 2 filtrados, uno con el precio de la fruta superior a $1.300 y otra inferior a $1.300, hice como me dijo de cambiarlo por valores numericos
//Filtrado de fruta cara
const filtradoDeFrutasCaras = productosFruta.filter(fruta => fruta.precio > 1300) 
console.log(filtradoDeFrutasCaras, "Esta fruta es cara")

//Filtrado de frutas baratas
const filtradoDeFrutasBaratas = productosFruta.filter(fruta => fruta.precio < 1300) 
console.log(filtradoDeFrutasBaratas, "Esta fruta es barata")

//.find()
console.log(productosFruta.find((productosFruta) =>{
    return productosFruta.nombre === ""}));//le acomode el espacio

let carrito = []

let respuesta = prompt("Bienvenido, deseas compras algo? Si o no.")

while(respuesta != "si" && respuesta != "no"){
    alert("Por favor te solicitamos que ingreses si o no.")
    respuesta = prompt("Bienvenido, deseas compras algo? Si o no.")
}

if(respuesta == "si"){
    alert("Te mostraremos todos los productos que tenemos")
    let producto = productosFruta.map((productosFruta) => productosFruta.nombre + " " + productosFruta.precio + "$")
    
    alert(producto.join(" - "))
}
else if (respuesta == "no"){
    alert("Muchas gracias por visitar la pagina, hasta luego.")
}

while(respuesta != "no"){
    let producto = prompt("Selecciona un producto para agregarlo al carrito.")
    let precio = 0

    if(producto == "frutilla" || producto == "manzana" || producto == "sandia" || producto == "pera" || producto == "zanahoria" || producto == "moron"){
        switch(producto){
            case "frutilla":
                precio = 1500
                break

                case "manzana":
                    precio = 1000
                    break

                    case "sandia":
                        precio = 3000
                        break

                        case "pera":
                            precio = 900
                            break

                            case "zanahoria":
                                precio = 1000
                                break

                                case "moron":
                                    precio = 1300
                                    break

                                    default:
                                    break
                }
    let kilos = parseInt(
        prompt("¿Cuantos kilos deseas llevar para este producto?")
      );
  
      carrito.push({ producto, kilos, precio });
      console.log(carrito);
  
    } else {
      alert("Lo siento, no tenemos ese producto");
    }

    respuesta = prompt("¿Desea seguir comprando, si o no?");
  
    while (respuesta == "no") {
      alert("Muchas gracias por la compra, espero vernos pronto");
  
      carrito.forEach((carritoFinal) => {
        console.log(
          `producto: ${carritoFinal.producto}, kilos: ${
            carritoFinal.kilos
          }, su total a pagar por producto: ${carritoFinal.kilos * carritoFinal.precio}`
        );
      });
      break;
    }
  }
  
  const total = carrito.reduce((acc, el) => acc + el.precio * el.kilos, 0)
  console.log(`el total a pagar por su compra es de:  ${total}`)