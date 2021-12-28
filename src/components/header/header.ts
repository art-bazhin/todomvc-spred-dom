import { writable } from 'spred';
import { h } from 'spred-dom';
import { addTodo } from '../../model/add';

interface HeaderProps {
  onSubmit: (value: string) => any;
}

export function HeaderView({ onSubmit }: HeaderProps) {
  const description = writable('');
  const onkeydown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();

    onSubmit(description());
    description('');
  };

  const oninput = (e: any) => {
    description(e.target.value);
  };

  return h('header', { className: 'header' }, [
    h('h1', ['todos']), //
    h('input', {
      attrs: {
        class: 'new-todo',
        autofocus: true,
      },
      placeholder: 'What needs to be done?',
      value: description,
      oninput,
      onkeydown,
    }),
  ]);
}

export function Header() {
  console.log('render Header');

  return HeaderView({
    onSubmit: addTodo,
  });
}
