import { Signal } from 'spred';
import { component, h, list, templateFn } from 'spred-dom';
import { Todo } from '../../model/todo';
import { filteredTodoSignals } from '../../model/todos-filtered';
import { TodoItem } from '../todo-item/todo-item';

const TodoListView = component((todos: Signal<Signal<Todo | null>[]>) => {
  h('section', { className: 'main' }, () => {
    h('ul', { className: 'todo-list' }, () => {
      list(todos, TodoItem);
    });
  });
});

export function TodoList() {
  console.log('render TodoList');
  return TodoListView(filteredTodoSignals);
}

export const todoList = templateFn(TodoList);
