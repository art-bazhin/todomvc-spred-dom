import { memo } from 'spred';
import { h } from 'spred-dom';
import { allTodosCount } from '../../model/todos-all';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Info } from '../info/info';
import { Main } from '../main/main';
import { TodoList } from '../todo-list/todo-list';
import { Toggle } from '../toggle/toggle';

export function App() {
  const isFooterShown = memo(() => allTodosCount() > 0);

  return h([
    h('section', { className: 'todoapp' }, [
      Header(),
      Main([
        Toggle(), //
        TodoList(),
      ]),
      memo(() => (isFooterShown() ? Footer() : null)),
    ]),
    Info(),
  ]);
}
