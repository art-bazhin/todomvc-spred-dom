import { Signal } from 'spred';
import { h, list } from 'spred-dom';
import { Todo } from '../../model/todo';
import { filteredTodos } from '../../model/todos-filtered';
import { TodoItem } from '../todo-item/todo-item';

export function TodoListView(todos: Signal<Todo[]>) {
  return h('section', { className: 'main' }, [
    h('ul', { className: 'todo-list' }, [
      list(
        todos,
        (todo) => TodoItem(todo),
        (todo) => todo.id
      ),
    ]),
  ]);
}

export function TodoList() {
  console.log('render TodoList');
  return TodoListView(filteredTodos);
}
