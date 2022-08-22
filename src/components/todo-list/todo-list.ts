import { Signal } from 'spred';
import { component, h, list, templateFn } from 'spred-dom';
import { Todo } from '../../model/todo';
import { filteredTodos } from '../../model/todos-filtered';
import { TodoItem } from '../todo-item/todo-item';

const TodoListView = component((todos: Signal<Signal<Todo | null>[]>) => {
  h('section', { class: 'main' }, () => {
    h('ul', { class: 'todo-list' }, () => {
      list(todos, TodoItem);
    });
  });
});

export function TodoList() {
  console.log('render TodoList');
  return TodoListView(filteredTodos);
}

export const todoList = templateFn(TodoList);
