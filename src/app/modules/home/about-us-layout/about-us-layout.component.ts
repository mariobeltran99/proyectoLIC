import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gf-about-us-layout',
  templateUrl: './about-us-layout.component.html',
  styleUrls: ['./about-us-layout.component.scss']
})
export class AboutUsLayoutComponent implements OnInit {

  constructor() { }

  developer = [
    {
      name: "Mario Josue Beltran Garcia ",
      description: "Estudiante de LIC y DPS",
      photo: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png"
    },
    {
      name: "Fher Enrique Climaco Escamilla",
      description: "Estudiante de LIC",
      photo: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png"
    },
    {
      name: "Walter Ernesto Corpeño Parada ",
      description: "Estudiante de LIC y trabajador de React",
      photo: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png"
    },
    {
      name: "Katherine Milagro Alfaro Rico.",
      description: "Estudiante de LIC",
      photo: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png"
    },
    {
      name: "Wilber Adonay Cruz Cruz",
      description: "Dedito",
      photo: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png"
    }]

  ngOnInit(): void { }
}
