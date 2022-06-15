let Pedido ='';
const ListMacetas01 = [];
const ListMaceta02 = [];
const ListMaceta03 = [];

class Product {
    constructor(name, price,categoria) {
        this.name = name;
        this.price = price;
        this.categoria = categoria;
    }
}

class CarritoDeCompras {
    constructor() {
        this.productos = []
        this.name = ''
        this.total = 0
    }
    setName(value) {
        this.name = value
    }

    addProduct(product) {
        this.productos.push(product)
    }

    vaciarCarrito() {
        this.productos = [];
    }

    eliminarProducto(valor) {
        this.productos.splice(valor-1, 1);
        alert("Producto Eliminado");
    }

    eliminarUltProducto(valor) {   
        this.productos.pop()
        alert("Producto Eliminado");
    }

    getTotal() {
        Pedido ='';
        let cont=0;
        this.total = 0;
        for (const A of this.productos) {
            cont++;
            this.total = this.total + A.price
            Pedido = Pedido + cont + " - " + A.name +" $"+ A.price   + "\n"
        }
    alert ("Su pedido es: \n" + Pedido + "\n Total: " + this.total);   
    }
}



function operacion(valor1, valor2, operacion) {
    switch (operacion){
        case "1":
            return valor1 + valor2;
            break;
        case "2":
            return valor1 - valor2;
            break;
        case "3":
            return valor1 * valor2;
            break;
        case "4":
            return valor1 / valor2;
            break;
        default:
        return 0;
            break;
    }
}


function pedirNUMERO(texto) {
    let valor = prompt(texto);
    while (isNaN(parseInt(valor)) ) {
        valor = prompt(texto);
    }
    return valor;
}


function realizarPedido(){
    let eleccion=0;
    let macetas='';
    let i=0;

    for (i=0;i < Listproducts.length ;i++ ) {
        macetas= macetas +"" + (i+1) +" - "  + Listproducts[i].name + " $" + Listproducts[i].price +"\n";
    }

    macetas = macetas +"\n"+"-1 - Deshacer (elimina lo último seleccionado)"

    macetas = macetas +"\n"+"0 - Para finalizar"
     
    eleccion = pedirNUMERO("Por favor seleccione una maceta\n" + macetas );
   
    while (eleccion<-1 || eleccion> Listproducts.lenght) { 
        eleccion = pedirNUMERO("Opción incorrecta, por favor seleccione una maceta\n" + macetas );
    }

    while (eleccion!="0") { 

    if (eleccion==-1 && cliente.productos.length>0) {
        cliente.eliminarUltProducto();
    } else{   
        cliente.addProduct(Listproducts[eleccion-1]) ;  
    }

    eleccion = pedirNUMERO("Por favor seleccione una maceta\n" + macetas );
        while (eleccion<-1 || eleccion>Listproducts.lenght) { 
            eleccion = pedirNUMERO("Opción incorrecta, por favor seleccione una maceta\n" + macetas );
        }
    }
}


const cliente = new CarritoDeCompras();

ListMacetas01.push (new Product('Maceta 01', 10000, 1));
ListMaceta02.push (new Product('Maceta 02', 9000, 2));
ListMaceta03.push (new Product('Maceta 03', 8500, 3));

const Listproducts = (ListMacetas01.concat(ListMaceta02)).concat(ListMaceta03);

alert ("Bienvenidos a Rococo Macetas!");

realizarPedido();

cliente.getTotal();

let opcion=0;

opcion = prompt("¿Confirma el pedido? \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito ");

while (opcion <0 || opcion>3) { 
    opcion = pedirNUMERO("Opción incorrecta, ¿Confirma el pedido? \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito");
}

if (opcion==1 ) alert ("Pedido Confirmado");
while (opcion!=1 ){
    switch (opcion){
        case "1":
        alert ("Pedido Confirmado");
            break;
        case "2":
        opcion = pedirNUMERO("Seleccione el producto que desea eliminar\n" + Pedido);
        while (opcion <0 || opcion>cliente.productos.length) { 
            opcion = pedirNUMERO("Seleccione el producto que desea eliminar\n" + Pedido);
        }
        cliente.eliminarProducto(opcion);
        cliente.getTotal();
            break;
        case "3":
            alert ("Se ha vaciado el carrito");
            cliente.vaciarCarrito();   
            cliente.getTotal();
            break;
        default:
            break;
    }
    opcion = prompt("¿Confirma el pedido \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito ");
    
    while (opcion <0 || opcion>3) { 
        opcion = pedirNUMERO("Opción incorrecta, ¿Confirma el pedido? \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito");
    }
}

alert("Muchas gracias por su pedido, vuelva Pronto!");