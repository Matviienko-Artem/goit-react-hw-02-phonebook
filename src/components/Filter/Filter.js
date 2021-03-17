import React from 'react';

const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          // className={}
          type="text"
          name="filter"
          placeholder="Name"
          value={value}
          onChange={onFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
