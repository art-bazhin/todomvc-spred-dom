import { Children, h } from 'spred-dom';

export function Main(children: Children) {
  console.log('render Main');

  return h('section', { className: 'main' }, children);
}
