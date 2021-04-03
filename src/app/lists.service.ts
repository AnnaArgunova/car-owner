import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{List} from './list'

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  
  getOwners(){
    return this.http.get('api/lists')
  }
  constructor(private http:HttpClient) { }


  postList(list:List){
const body =  list
return this.http.post(
  'api/lists',
  body
)
  }

}
