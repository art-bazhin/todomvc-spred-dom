import { memo, Signal } from 'spred';
import { editedTodo, editTodo, setEditedTodo } from './edit';
import { removeTodos } from './remove';
import { Todo } from './todo';
import { toggleTodo } from './toggle';

export function createTodoModel(todo: Signal<Todo>) {
  const editing = memo(() => todo() === editedTodo());

  return {
    todo,
    editing,

    toggle() {
      toggleTodo(todo());
    },

    startEdit() {
      setEditedTodo(todo());
    },

    endEdit(newDescription: string) {
      editTodo({
        ...todo(),
        description: newDescription,
      });
    },

    remove() {
      removeTodos([todo().id]);
    },
  };
}
