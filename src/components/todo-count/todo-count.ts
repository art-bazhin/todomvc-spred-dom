import { memo, Signal } from 'spred';
import { component, h, templateFn, text } from 'spred-dom';
import { activeTodosCount } from '../../model/todos-active';

const TodoCountView = component((count: Signal<number>) => {
  const isPlural = memo(() => count() !== 1);
  const itemsLeftString = memo(() =>
    isPlural() ? ' items left' : ' item left'
  );

  return h('span', { className: 'todo-count' }, () => {
    h('strong', { textContent: () => count() + '' });
    text(itemsLeftString);
  });
});

export function TodoCount() {
  return TodoCountView(activeTodosCount);
}

export const todoCount = templateFn(TodoCount);
