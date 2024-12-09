import React from 'react';
import DataTable from 'react-data-table-component';

const ProductsTable = ({ products, loading, onEdit, onDelete }) => {
  const customStyles = {
    rows: {
      style: {
        minHeight: '50px',
        backgroundColor: '#f9f9f9',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        backgroundColor: 'grey',
        color: 'white',
        fontWeight: 'bold',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
  };

  const columns = [
    {
      name: 'Product Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => `${row.price} Rs` || 'N/A',
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.category || 'N/A' ,
      sortable: true,
    },
    {
      name: 'Stock',
      selector: (row) => row.stock || 'N/A' ,
      sortable: true,
    },
    {
      name: 'Brand',
      selector: (row) => row.brand || 'N/A' ,
      sortable: true,
    },
    {
      name: 'Rating',
      selector: (row) => row.rating || 0,
      sortable: true,
    },
    {
      name: 'Reviews',
      selector: (row) => (row.reviews ? row.reviews.length : 0),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="btn btn-primary btn-sm"
            style={{ marginRight: '5px' }}
            onClick={() => onEdit(row.id)}
          >
            Edit
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <DataTable
              title="Products List"
              columns={columns}
              data={products}
              pagination
              striped
              highlightOnHover
              progressPending={loading}
              customStyles={customStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
