import { memo, Signal } from 'spred';
import { h } from 'spred-dom';
import { editedTodo, editTodo, setEditedTodo } from '../../model/edit';
import { removeTodos } from '../../model/remove';
import { Todo } from '../../model/todo';
import { toggleTodo } from '../../model/toggle';

function createTodoItemModel(todo: Signal<Todo>) {
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

type TodoItemModel = ReturnType<typeof createTodoItemModel>;

export function TodoItemView({
  todo,
  editing,
  toggle,
  remove,
  startEdit,
  endEdit,
}: TodoItemModel) {
  const description = memo(() => todo().description);
  const completed = memo(() => todo().completed);

  const liClass = memo(() => {
    const arr = [];

    if (editing()) arr.push('editing');
    if (completed()) arr.push('completed');

    return arr.join(' ');
  });

  const onkeydown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    endEdit(editInput.value);
  };

  const onblur = () => {
    endEdit(editInput.value);
  };

  const editInput = h('input', {
    className: 'edit',
    value: description(),
    onblur,
    onkeydown,
  });

  const ondblclick = () => {
    startEdit();
    editInput.focus();
  };

  return h('li', { className: liClass }, [
    h('div', { className: 'view' }, [
      h('input', {
        className: 'toggle',
        type: 'checkbox',
        onchange: toggle,
        checked: completed,
      }),
      h('label', { ondblclick, textContent: description }),
      h('button', { onclick: remove, className: 'destroy' }),
    ]),
    editInput,
  ]);
}

export function TodoItem(todo: Signal<Todo>) {
  console.log('render TodoItem', todo());
  return TodoItemView(createTodoItemModel(todo));
}
