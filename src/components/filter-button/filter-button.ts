import { memo } from 'spred';
import { h } from 'spred-dom';
import { activeFilter, TodoFilter } from '../../model/active-filter';

function createFilterButtonModel(name: string, value: TodoFilter) {
  return {
    name,
    href: '#/' + value,
    selected: memo(() => activeFilter() === value),
  };
}

type FilterButtonModel = ReturnType<typeof createFilterButtonModel>;

export function FilterButtonView({ href, name, selected }: FilterButtonModel) {
  return h('a', {
    href,
    className: memo(() => selected() && 'selected'),
    textContent: name,
  });
}

interface FilterButtonProps {
  text: string;
  value: TodoFilter;
}

export function FilterButton({ text, value }: FilterButtonProps) {
  console.log('render FilterButton', value);
  return FilterButtonView(createFilterButtonModel(text, value));
}
