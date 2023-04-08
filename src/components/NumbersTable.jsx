import React from 'react';
import './NumbersTable.css';

const NumbersTable = (props) => {
  const table = [...Array(props.limit)];
  return (
    <div className="table-contenedor">
      {table.map((_, index) => (
        <div className={`table-box ${(index + 1) % 2 == 0 ? ' red' : ''}`}>{index + 1}</div>
      ))}
    </div>
  );
};

export default NumbersTable;
