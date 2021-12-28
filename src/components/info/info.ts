import { h } from 'spred-dom';

export function Info() {
  console.log('render Info');

  return h('footer', { className: 'info' }, [
    h('p', ['Double-click to edit a todo']),

    h('p', [
      'Created by ',
      h('a', {
        href: 'https://github.com/art-bazhin',
        target: '_blank',
        textContent: 'Art Bazhin',
      }),
    ]),

    h('p', [
      'Part of ',
      h('a', {
        href: 'http://todomvc.com',
        target: '_blank',
        textContent: 'TodoMVC',
      }),
    ]),
  ]);
}
