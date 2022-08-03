import { component, h, templateFn } from 'spred-dom';
import { clearCompletedButton } from '../clear-completed-button/clear-completed-button';
import { filter } from '../filter/filter';
import { todoCount } from '../todo-count/todo-count';

export const Footer = component(() => {
  console.log('render Footer');

  h('footer', { className: 'footer' }, () => {
    todoCount();
    filter();
    clearCompletedButton();
  });
});

export const footer = templateFn(Footer);
