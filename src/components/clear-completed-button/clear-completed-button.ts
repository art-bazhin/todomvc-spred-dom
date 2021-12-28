import { memo, writable } from 'spred';
import { h } from 'spred-dom';
import { removeCompletedTodos } from '../../model/remove';
import { completedTodosCount } from '../../model/todos-completed';

interface ClearCompletedButtonProps {
  text: string;
  onClick: () => any;
}

export function ClearCompletedButtonView({
  text,
  onClick,
}: ClearCompletedButtonProps) {
  console.log('render ClearCompletedButtonView');

  return h('button', {
    className: 'clear-completed',
    onclick: onClick,
    textContent: text,
  });
}

export function ClearCompletedButton() {
  const show = memo(() => completedTodosCount() > 0);

  return memo(() =>
    show()
      ? ClearCompletedButtonView({
          text: 'Clear completed',
          onClick: removeCompletedTodos,
        })
      : null
  );
}
