import { component, h, templateFn } from 'spred-dom';
import { filterButton } from '../filter-button/filter-button';

export const Filter = component(() => {
  h('ul', { className: 'filters' }, () => {
    h('li', () => filterButton({ text: () => 'All', value: () => 'all' }));
    h('li', () =>
      filterButton({ text: () => 'Active', value: () => 'active' })
    );
    h('li', () =>
      filterButton({ text: () => 'Completed', value: () => 'completed' })
    );
  });
});

export const filter = templateFn(Filter);
