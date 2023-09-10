import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-card',
  templateUrl: './little-card.component.html',
  styleUrls: ['./little-card.component.css']
})
export class LittleCardComponent implements OnInit{

  @Input()
  imageCover: string = ""
  @Input()
  textTittle: string = ""
  @Input()
  textDescription: string = ""
  @Input()
  Id:string = ""

  constructor(){}
  ngOnInit(): void {

  }
}
