import { memo, writable } from 'spred';

export type TodoFilter = 'all' | 'completed' | 'active';

const hash = writable<string>(window.location.hash);

window.addEventListener('hashchange', () => {
  hash(window.location.hash);
});

export const activeFilter = memo<TodoFilter>(() => {
  const _hash = hash();
  if (_hash.substr(0, 2) !== '#/') return 'all';

  const filter = _hash.substr(2);

  switch (filter) {
    case 'all':
    case 'completed':
    case 'active':
      return filter;
  }

  return 'all';
});
