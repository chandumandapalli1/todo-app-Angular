import { Component, OnInit } from '@angular/core';

//created
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from "./../../model/Todo";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // this syntax helps to use the faTrashAlt as a variable 
  faTrashAlt=faTrashAlt;

//importing array of todos from model -> todo.ts
  todos:Todo[];

//constructor comes with no parameters and the following parameter is being 
//added and we want only this component to have access over the todoService 
  constructor(private todoService:TodoService) { }
  //ngOnInit() need not be called its called automatically when  component is initilized.
  //here we r subscribing , if we want to unsubscribe we can do it manually 
  //but angular does it automaticlly but it we want to do it like 
  //hey after subscribing i need to stay for next 20sec and need to unsubscribe then 
  //can manually handle unsubscribe it 
  //here since data is being brought from TodoService which is being changed to 
  // todoService:TodoService  --- now calling that f() form here and subscribing to that
  //observable and since data is returned inthe form of array of todos 
  //create a variable of array of todos such that the todos varible can have same prototype 
  //as created in model   so import model also 
  
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos)=>{
      this.todos=todos;

    });
  }

  changeTodoStatus(todo:Todo)
  {
    this.todoService.changeStatus(todo);

  }


  deleteTodo(todo:Todo)
  {
    this.todoService.deleteTodo(todo);

  }





}
