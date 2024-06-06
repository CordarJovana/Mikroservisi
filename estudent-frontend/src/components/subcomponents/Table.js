import '../../style/Table.css';

function Table(props) {
    const { data, columns, className } = props;
  
    return (
      <table className={className}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.property} className="text-center">
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`} className="text-center">{row[col.property]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;
  