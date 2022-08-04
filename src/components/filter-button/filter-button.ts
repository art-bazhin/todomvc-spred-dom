import { memo } from 'spred';
import { component, h, templateFn } from 'spred-dom';
import { activeFilter, TodoFilter } from '../../model/active-filter';

function createFilterButtonModel(name: () => string, value: () => TodoFilter) {
  return {
    name,
    href: memo(() => '#/' + value()),
    selected: memo(() => activeFilter() === value()),
  };
}

type FilterButtonModel = ReturnType<typeof createFilterButtonModel>;

const FilterButtonView = component(
  ({ href, name, selected }: FilterButtonModel) => {
    h('a', {
      href,
      class: () => (selected() ? 'selected' : ''),
      text: name,
    });
  }
);

interface FilterButtonProps {
  text: () => string;
  value: () => TodoFilter;
}

export function FilterButton({ text, value }: FilterButtonProps) {
  console.log('render FilterButton', value);
  return FilterButtonView(createFilterButtonModel(text, value));
}

export const filterButton = templateFn(FilterButton);
