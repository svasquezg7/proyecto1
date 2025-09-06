import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/comentario';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-list-comentarios',
  imports: [NgForOf, RouterLink],
  templateUrl: './list-comentarios.html',
  styleUrl: './list-comentarios.scss'
})
export class ListComentarios {
  listComentarios: Comentario [] =[
   {titulo:"Comentario1", creador:"Santiago", texto:"Comentario de prueba", fechaCreacion: new Date('2023-01-01')},
   {titulo:"Comentario2", creador:"Santiago", texto:"Comentario de prueba", fechaCreacion: new Date('2023-01-01')},
   {titulo:"Comentario3", creador:"Santiago", texto:"Comentario de prueba", fechaCreacion: new Date('2023-01-01')},
  ];
}
