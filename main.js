let menu;
let opcionProducto = 1;
let cantVelas = 0;
let cantHome= 0;
let totalVelas = 0;
let totalHome = 0;


    while ((opcionProducto == 1) || (opcionProducto == 2) || (menu== "Y" )){
        opcionProducto = parseInt(prompt ("Ingrese 1 si quiere velas, 2 si quiere Home Spray o 3 si quiere terminar su pedido.")); 
        if ((opcionProducto  >= 1 )  && (opcionProducto <= 3)) { 
            if (opcionProducto == 1){
                cantVelas = parseInt(prompt ("Ingrese la cantidad de Velas que desea"));
                totalVelas= totalVelas + cantVelas;
            } else if (opcionProducto == 2){
                cantHome = parseInt(prompt ("Ingrese la cantidad de Home Spray que desea"));
                totalHome = totalHome + cantHome;
            } else if (opcionProducto == 3){
                 alert (`Su pedido es de: ${totalVelas} Velas y ${totalHome} Home Spray`);
            } 
        } else {
            menu= prompt (`Número invalido. Por favor ingrese "Y" para volver al menu principal`); 
        }
    } 
        
