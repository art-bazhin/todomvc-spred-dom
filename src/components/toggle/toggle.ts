import { memo, Signal } from 'spred';
import { component, h, node, templateFn } from 'spred-dom';
import { allTodosCount } from '../../model/todos-all';
import { allTodosAreCompleted } from '../../model/todos-completed';
import { toggleAll } from '../../model/toggle';

interface ToggleProps {
  shown: Signal<boolean>;
  checked: Signal<boolean>;
  onToggle: () => any;
}

const ToggleLabel = component(() => {
  h('label', {
    htmlFor: 'toggle-all',
  });
});

const ToggleView = component(({ checked, shown, onToggle }: ToggleProps) => {
  h('input', {
    id: 'toggle-all',
    className: 'toggle-all',
    type: 'checkbox',
    checked: checked,
    onchange: onToggle,
  });

  node(() => shown() && ToggleLabel());
});

export function Toggle() {
  console.log('render Toggle');

  return ToggleView({
    onToggle: toggleAll,
    checked: allTodosAreCompleted,
    shown: memo(() => !!allTodosCount()),
  });
}

export const toggle = templateFn(Toggle);
