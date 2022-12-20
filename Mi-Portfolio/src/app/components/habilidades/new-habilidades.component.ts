import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  
  constructor(private skillService: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
   const skill = new Skills(this.nombre, this.porcentaje);
   this.skillService.save(skill).subscribe(
    data => {
      alert("Habilidad creada correctamente.");
      this.router.navigate(['']);
    }, err => {
      alert("Falló al crear la habilidad.");
      this.router.navigate(['']);
    }
   )
  }
}
