import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="card-body table-responsive p-0">
      <table className="table table-striped table-valign-middle">
        <thead>
          <tr>
            {columns.map((col, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
