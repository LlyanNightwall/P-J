import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/services/classes/classes.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit{

  constructor(private classesService : ClassesService){}

  classes : string[] = [];

  ngOnInit(): void {
    this.classesService.getClassesNames(this.classes);
  }

  getClasseInfo(classe: string){
    this.classesService.getClasseInfo(classe);
  }



}
