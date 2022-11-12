
import { Injectable } from '@angular/core';


//created 
import { of } from 'rxjs';
import {Todo}  from "./../model/Todo";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[];

  constructor() { 
    // harding coding some values they can also be done using html but doing here bcz want to change then later
    this.todos=[

      {
        id:'111',
        title:"Learn c++",
        isCompleted:true,
        date:new Date(),

      },
      {
        id:'222',
        title:"Learn DSA",
        isCompleted:false,
        date:new Date(),

      },
      {
        id:'333',
        title:"Learn CP",
        isCompleted:false,
        date:new Date(),

      }
    ];
  }


  //CRUD app starts ...... 
  // reading operation
  getTodos()
  {

    // making all the content  in the constructor to observable
    return of(this.todos);

  }

  addTodo(todo:Todo)
  {
    this.todos.push(todo);
  }
// modifying the app
// here either the specified id to be modified can be passed or entire to do can be passed here entire todo is passed
  changeStatus(todo:Todo)
  {
    this.todos.map((singleTodo) =>{
      if(singleTodo.id==todo.id)
      {
        todo.isCompleted=!todo.isCompleted;

      }
    });
  }

// it can be done  using 1.findIndex or 2.map or 3.filter 
// here we are looping  thorugh the entire todo for the specfied todo to find
// where the passed is present
  deleteTodo(todo:Todo)
  {
    const indexofTodo=this.todos.findIndex(
    (currentObj)=> currentObj.id===todo.id

    );
    //deleting one value from it using splice.....
    this.todos.splice(indexofTodo,1);

  }






}
