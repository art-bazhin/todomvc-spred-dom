import { memo, Signal, writable } from 'spred';
import { component, h } from 'spred-dom';
import { Todo } from '../../model/todo';
import { createTodoModel, TodoModel } from '../../model/todo-model';

export const TodoItemView = component(
  ({ todo, editing, toggle, remove, startEdit, endEdit }: TodoModel) => {
    const description = memo(() => todo().description);
    const completed = memo(() => todo().completed);
    const editInput = writable<HTMLInputElement>();

    const liClass = memo(() => {
      const arr = [];

      if (editing()) arr.push('editing');
      if (completed()) arr.push('completed');

      return arr.join(' ');
    });

    const onkeydown = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      endEdit(editInput()!.value);
    };

    const onblur = () => {
      endEdit(editInput()!.value);
    };

    const ondblclick = () => {
      startEdit();
      editInput()!.focus();
    };

    h('li', { class: liClass }, () => {
      h('div', { class: 'view' }, () => {
        h('input', {
          class: 'toggle',
          type: 'checkbox',
          onchange: toggle,
          checked: completed,
        });
        h('label', { ondblclick, text: description });
        h('button', { onclick: remove, class: 'destroy' });
      });
      h('input', {
        class: 'edit',
        value: description,
        ref: editInput,
        onblur,
        onkeydown,
      });
    });
  }
);

export function TodoItem(todo: Signal<Todo | null>) {
  console.log('render TodoItem', todo());
  return TodoItemView(createTodoModel(todo));
}
