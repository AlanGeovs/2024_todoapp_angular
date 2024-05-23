import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Bienbenidos a la seccion';
  tasks = ['Instalar Angular CLI', 'Crear proyeceto', 'Crear componentes'];
  tareas = ['Priemra', 'Segunda', 'Tercera'];

  name = 'Alan';
  age = 18;
  disable = 'true';
  img =
    'https://genesysapp.com/wp-content/uploads/2023/01/GenesysApp-Diseno-y-Desarrollo-Web-6.jpg';

  person = {
    name: 'Alan Geovanni',
    age: 18,
    avatar:
      'https://genesysapp.com/wp-content/uploads/2023/01/GenesysApp-Diseno-y-Desarrollo-Web-6.jpg',
  };

  clickHandler() {
    alert('Hola');
  }

  changeHandled(event: Event) {
    console.log(event);
  }
}
