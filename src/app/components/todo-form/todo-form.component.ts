import { Component, OnInit } from '@angular/core';


import { Todo }   from '../../model/Todo';
import {v4 as uuidv4} from 'uuid';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  todoTitle:string;

  //intially constructor has no parameters , so added private todoService so that 
  //it is accessible only within the class..........
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  handleAdd()
  {//since newTodo is of type Todo it needs to take all the parameters that 
    //that Todo takes else it throws and error
    
    const newTodo:Todo={
      id:uuidv4(),
      title:this.todoTitle,
      isCompleted:false,
      date:new Date(),
    }
    this.todoService.addTodo(newTodo);
  this.todoTitle="";
  };

  



}
