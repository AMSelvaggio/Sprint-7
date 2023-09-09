import { Component } from '@angular/core'; // Se importa el decorador `Component` desde el paquete '@angular/core'. Este decorador nos permite definir un componente de Angular.
import { DefaultTitleStrategy } from '@angular/router';
 
// Utilizamos el decorador `Component` para definir metadatos del componente que vamos a crear.
@Component({
  selector: 'app-home',  // Esto define el nombre del selector que usaremos en HTML para representar este componente. En este caso: <app-home></app-home>
  templateUrl: './home.component.html',  // Ruta del archivo HTML que representa la plantilla del componente. Donde se ejecutara este JS.
  styleUrls: ['./home.component.css']   // Ruta al archivo de estilos CSS que se aplicará específicamente a este componente.
})

// Declaramos la clase `HomeComponent`. Esta clase representa el controlador de nuestro componente.
export class HomeComponent {
  total: number = 0; // Declara una propiedad `total` inicializada a 0. Se usará para mantener un seguimiento del costo total de los servicios.

  serviciosSeleccionados: { [key: string]: number } = {}; // Declara un objeto `serviciosSeleccionados` para rastrear qué servicios ha seleccionado el usuario y su respectivo precio.

  presupuesto(servicio: string, precio: number) {    // Método para actualizar el presupuesto cuando un servicio es seleccionado o deseleccionado.

//Esta sintaxis especifica un tipo de objeto cuyas claves son
//cadenas (string) y cuyos valores son números (number). 
//Esta estructura es conocida como Índice Signatura en TypeScript, 
//y permite definir un objeto que puede tener cualquier número de 
//propiedades cuyos nombres son cadenas y cuyos valores son del tipo especificado (en este caso, números).
//= {}: Inicializa la propiedad con un objeto vacío.



    if (this.serviciosSeleccionados[servicio]) {    // Verifica si el servicio ya está seleccionado.

      this.total -= this.serviciosSeleccionados[servicio];  // Si ya está seleccionado, lo deselecciona y resta su precio del total.

      delete this.serviciosSeleccionados[servicio]  // Elimina el servicio de la lista de servicios seleccionados.

    } else {   // Si el servicio no estaba seleccionado, lo añade a la lista y suma su precio al total.

      this.serviciosSeleccionados[servicio] = precio;

      this.total += precio;

    }
  }


  // Método para actualizar el costo del servicio web cuando se modifica.
  updateWebCost(value: number) {
    if (this.serviciosSeleccionados['web']) {  // Si el servicio web ya estaba seleccionado, resta su costo anterior del total.
      this.total -= this.serviciosSeleccionados['web'];
    }
        // Actualiza el precio del servicio web y lo suma al total.
    this.serviciosSeleccionados['web'] = 500 + value;
    this.total += 500 + value;
  }

}

