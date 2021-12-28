import { h } from 'spred-dom';
import { ClearCompletedButton } from '../clear-completed-button/clear-completed-button';
import { Filter } from '../filter/filter';
import { TodoCount } from '../todo-count/todo-count';

export function Footer() {
  console.log('render Footer');

  return h('footer', { className: 'footer' }, [
    TodoCount(),
    Filter(),
    ClearCompletedButton(),
  ]);
}
