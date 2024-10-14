import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = { id: this.nextId++, title, completed: false };
    this.todos.push(newTodo);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  updateTodo(id: number, updatedTitle: string): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.title = updatedTitle;
    }
  }

  toggleTodoCompletion(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
