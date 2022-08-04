import { memo } from 'spred';
import { component, h, node, templateFn } from 'spred-dom';
import { removeCompletedTodos } from '../../model/remove';
import { completedTodosCount } from '../../model/todos-completed';

interface ClearCompletedButtonProps {
  text: () => string;
  onClick: () => any;
}

export const ClearCompletedButtonView = component(
  ({ text, onClick }: ClearCompletedButtonProps) => {
    console.log('render ClearCompletedButtonView');

    h('button', {
      class: 'clear-completed',
      onclick: onClick,
      text,
    });
  }
);

export const ClearCompletedButton = component(() => {
  const show = memo(() => completedTodosCount() > 0);

  node(
    () =>
      show() &&
      ClearCompletedButtonView({
        text: () => 'Clear completed',
        onClick: removeCompletedTodos,
      })
  );
});

export const clearCompletedButton = templateFn(ClearCompletedButton);
