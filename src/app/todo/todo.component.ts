import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: { id: number, title: string, completed: boolean }[] = [];

  // Toggle the completion status of the todo item
  toggleCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  // Update the title of the todo item (casting event.target as HTMLInputElement)
  updateTodoTitle(id: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const todo = this.todos.find(todo => todo.id === id);
    if (todo && input.value.trim()) {
      todo.title = input.value.trim();
    }
  }

  // Delete the todo item by its ID
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
