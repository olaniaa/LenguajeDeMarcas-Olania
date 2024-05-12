let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

    function increment(){
        count +=  1
        countEl.textContent = count //Ponemos textcontent porque innerText de fallos con formato

    }

    function decrement(){
        if (count > 0) {
            count -= 1;
            countEl.textContent = count;
        }

    }
    let total= 0

    function save(){
        let countStr = count + " / ";
        saveEl.textContent += countStr;
        count = 0;
        
    }


    function actualizarReloj() {
        let hora = new Date();
        let Horas = hora.getHours();
        let Minutos = hora.getMinutes();
        let Segundos = hora.getSeconds();

        Horas = (Horas < 10) ? "0" + Horas : Horas;
        Minutos = (Minutos < 10) ? "0" + Minutos : Minutos;
        Segundos = (Segundos < 10) ? "0" + Segundos : Segundos;

         let HoraCompleta = Horas + ":" + Minutos + ":" + Segundos;
        document.getElementById("reloj").innerText = HoraCompleta;


        let Dia = hora.getDate();
        let Mes = hora.getMonth() + 1; 
        let Año = hora.getFullYear();

        let FechaCompleta = Dia + "/" + Mes + "/" + Año;
        document.getElementById("fecha").innerText = FechaCompleta;
    }

    setInterval(actualizarReloj, 1000);


    const expreso = 40;
    const regional = 25;
    const alta_velocidad= 50;
    const local= 30;

    function comprar() {
        let estacion = document.getElementById('estaciones').value;
        let cantidad = document.getElementById('cantidadBilletes').value;
    
        let contenido = document.getElementById('billetes');
    
        contenido.innerHTML += '<p>Has seleccionado ' + cantidad + ' billetes para el tipo de viaje de ' + estacion + ':</p>';
        contenido.innerHTML += '<p>Total a pagar: €' + calcularTotal(estacion, cantidad) + '</p>';
    }

    function calcularPrecio(precio, cantidad) {
        return precio * cantidad;
    }
    function calcularTotal(estaciones, cantidad) {
        switch (estaciones) {
            case 'Regional':
                return regional * cantidad;
            case 'Alta velocidad':
                return alta_velocidad * cantidad;
            case 'Expreso':
                return expreso * cantidad;
            case 'Local':
                return local * cantidad;
            default:
                return 0;
        }
    }