import { Proyectos } from 'src/app/model/proyectos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  imgP = "../../../assets/Imágenes/Covers/proyectos-default.jpg";

  constructor(
    private proyectosService: ProyectosService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.imgP);
    this.proyectosService.save(proyectos).subscribe(data=>{
      alert("Proyecto añadido.");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló al crear el proyecto.");
      this.router.navigate(['']);
    })
  }
}
