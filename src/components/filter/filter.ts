import { h } from 'spred-dom';
import { FilterButton } from '../filter-button/filter-button';

export function Filter() {
  return h('ul', { className: 'filters' }, [
    h('li', [FilterButton({ text: 'All', value: 'all' })]),
    h('li', [FilterButton({ text: 'Active', value: 'active' })]),
    h('li', [FilterButton({ text: 'Completed', value: 'completed' })]),
  ]);
}
