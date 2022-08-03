import { component, h, templateFn, text } from 'spred-dom';

export const Info = component(() => {
  console.log('render Info');

  h('footer', { className: 'info' }, () => {
    h('p', { textContent: 'Double-click to edit a todo' });

    h('p', () => {
      text('Created by ');
      h('a', {
        href: 'https://github.com/art-bazhin',
        target: '_blank',
        textContent: 'Art Bazhin',
      });
    });

    h('p', () => {
      text('Part of ');
      h('a', {
        href: 'http://todomvc.com',
        target: '_blank',
        textContent: 'TodoMVC',
      });
    });
  });
});

export const info = templateFn(Info);
