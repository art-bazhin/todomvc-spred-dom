import { memo, Signal } from 'spred';
import { component, h, node } from 'spred-dom';
import { Todo } from '../../model/todo';
import { createTodoModel, TodoModel } from '../../model/todo-model';

const EditInput = component<any>(
  (props: {
    description: Signal<string>;
    onblur: () => any;
    onkeydown: (e: KeyboardEvent) => any;
  }) => {
    h('input', {
      class: 'edit',
      value: props.description,
      onblur: props.onblur,
      onkeydown: props.onkeydown,
    });
  }
);

export const TodoItemView = component(
  ({ todo, editing, toggle, remove, startEdit, endEdit }: TodoModel) => {
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
      console.log('blur end');
      endEdit(editInput.value);
    };

    const editInput = EditInput({
      description,
      onblur,
      onkeydown,
    }) as HTMLInputElement;

    const ondblclick = () => {
      startEdit();
      editInput.focus();
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
      node(editInput);
    });
  }
);

export function TodoItem(todo: Signal<Todo | null>) {
  console.log('render TodoItem', todo());
  return TodoItemView(createTodoModel(todo));
}
