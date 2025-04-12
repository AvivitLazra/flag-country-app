'use client';

function ExpenseItemTable(props) {
  return (
    <div>
      <img
        src={props.flag}
        alt={props.name}
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          border: '1px solid #ccc',
        }}
      />
      <div>{props.name}</div>
    </div>
  );
}
export default ExpenseItemTable;
