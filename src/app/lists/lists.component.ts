import { Component, Input, OnInit, EventEmitter,Output } from '@angular/core';
import { List } from '../list';
import { ListsService } from '../lists.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  
  public title: string = 'Владельцы автомобилей';
  public addItem: string = 'Добавить';
  public viewItem: string = 'Просмотр';
  public editItem: string = 'Редактировать';
  public deleteItem: string = 'Удалить';
  public listHeader: string[] = ['Фамилия', 'Имя', 'Отчество', 'Количество автомобилей']

  lists: List;
  selectedList: List;
  selectedId: number;

  onSelect(lists: List): void {
     this.selectedList = lists
    this.selectedId = this.selectedList.id
    console.log(this.selectedList);
    console.log('selectedId',this.selectedId);
  }

  constructor(private http: HttpClient, private ListsService: ListsService) {

  }

  ngOnInit(): void {
    this.ListsService.getOwners().subscribe((data: List) =>
      this.lists = data
    )
  
  }


}
