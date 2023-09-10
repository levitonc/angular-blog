import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-card',
  templateUrl: './little-card.component.html',
  styleUrls: ['./little-card.component.css']
})
export class LittleCardComponent implements OnInit{

  @Input()
  imageCover: string = "https://img.freepik.com/fotos-gratis/uma-imagem-de-um-planeta-com-um-buraco-negro-no-centro-e-um-buraco-negro-no-centro_1340-23795.jpg?w=826&t=st=1694283569~exp=1694284169~hmac=2fd5a73a5875373842724b91829fc30d3ae2fcd5df866f599e272b30d4c74076"
  @Input()
  textTittle: string = "Lorem, ipsum dolor."
  @Input()
  textDescription: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim aliquam sint facilis cum necessitatibus ea modi nemo vitae quas quos quam, cupiditate voluptatem rerum tempore, earum impedit facere reiciendis deserunt quod esse debitis saepe aperiam velit."


  constructor(){}
  ngOnInit(): void {

  }
}
