import { memo } from 'spred';
import { component, h, node } from 'spred-dom';
import { allTodosCount } from '../../model/todos-all';
import { Footer } from '../footer/footer';
import { header } from '../header/header';
import { info } from '../info/info';
import { todoList } from '../todo-list/todo-list';
import { toggle } from '../toggle/toggle';

export const App = component(() => {
  const isFooterShown = memo(() => allTodosCount() > 0);

  h('section', { className: 'todoapp' }, () => {
    header();

    h('section', { className: 'main' }, () => {
      toggle();
      todoList();
    });

    node(() => isFooterShown() && Footer());
  });

  info();
});
