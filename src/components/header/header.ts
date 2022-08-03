import { writable } from 'spred';
import { component, h, templateFn } from 'spred-dom';
import { addTodo } from '../../model/add';

interface HeaderProps {
  onSubmit: (value: string) => any;
}

const HeaderView = component(({ onSubmit }: HeaderProps) => {
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

  h('header', { className: 'header' }, () => {
    h('h1', { textContent: 'todos' });
    h('input', {
      className: 'new-todo',
      autofocus: true,
      placeholder: 'What needs to be done?',
      value: description,
      oninput,
      onkeydown,
    });
  });
});

export function Header() {
  console.log('render Header');

  return HeaderView({
    onSubmit: addTodo,
  });
}

export const header = templateFn(Header);
