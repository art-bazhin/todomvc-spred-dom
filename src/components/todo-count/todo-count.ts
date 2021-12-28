import { memo, Signal } from 'spred';
import { h } from 'spred-dom';
import { activeTodosCount } from '../../model/todos-active';

export function TodoCountView(count: Signal<number>) {
  const isPlural = memo(() => count() !== 1);
  const itemsLeftString = memo(() =>
    isPlural() ? ' items left' : ' item left'
  );

  return h('span', { className: 'todo-count' }, [
    h('strong', [count]),
    itemsLeftString,
  ]);
}

export function TodoCount() {
  return TodoCountView(activeTodosCount);
}
