import React from 'react'

const FilterButton = props => {
  const className = props.selected ? "FilterButton selected" : "FilterButton";
  return <div className={className} onClick={e => props.handleClick(e, props.name)}>{props.name}</div>
}

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  const handleClick = (e, name) => onSelectFilter(name);
  return (
    <div className="Toolbar">
      {filters.map((name, index) =>
        <FilterButton key={index} name={name} handleClick={handleClick} selected={name === selected} />
      )}
    </div>
  );
}
