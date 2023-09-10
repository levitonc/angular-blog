import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../components/data/dataFake'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  imageCover: string = "https://classic.exame.com/wp-content/uploads/2017/09/programac3a7c3a3o.jpg"
  textTittle: string = "Programador arrasa em seu primeiro job"
  textDescription: string = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  private id:string | null  = ""

  constructor(
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id")
    )
    this.seValuesComponent(this.id)
  }
seValuesComponent(id: string | null){
  const result = dataFake.filter(
    article => article.Id == id
        )[0]

 this.textTittle = result.tittle
 this.imageCover = result.photo
 this.textDescription = result.description



}

}
