import { memo, Signal } from 'spred';
import { h } from 'spred-dom';
import { allTodosCount } from '../../model/todos-all';
import { allTodosAreCompleted } from '../../model/todos-completed';
import { toggleAll } from '../../model/toggle';

interface ToggleProps {
  shown: Signal<boolean>;
  checked: Signal<boolean>;
  onToggle: () => any;
}

export function ToggleView({ checked, shown, onToggle }: ToggleProps) {
  return h([
    h('input', {
      id: 'toggle-all',
      className: 'toggle-all',
      type: 'checkbox',
      checked: checked,
      onchange: onToggle,
    }),

    memo(() =>
      shown()
        ? h('label', {
            htmlFor: 'toggle-all',
          })
        : null
    ),
  ]);
}

export function Toggle() {
  console.log('render Toggle');

  return ToggleView({
    onToggle: toggleAll,
    checked: allTodosAreCompleted,
    shown: memo(() => !!allTodosCount()),
  });
}
