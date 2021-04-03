import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListsService } from '../lists.service';
import { HttpClient } from '@angular/common/http';
import {List} from '../list';
@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  lists: List;
  //selectedId:number=0;
  //@Input() selectedList: any;
  // public list:List ={
  //   id:1,
  //   firstName: 'Сидоров',
  //   lastName: 'Иван',
  //   patronymic:'Иванович',
  //   count:1,
  //   cars:{}
  // }
  myForm : FormGroup = new FormGroup({
             
    // "firstName": new FormControl(this.list.firstName),
    // "lastName": new FormControl(this.list.lastName,),
    // "patronymic": new FormControl(this.list.patronymic, )

    
});

submit(){

}
  constructor(private http: HttpClient, private ListsService: ListsService) {
   
   }

  ngOnInit(): void {
    this.ListsService.getOwners().subscribe((data: List) =>
    this.lists = data
   
    
  )
  
  }

   }

