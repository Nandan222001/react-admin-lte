import React, { useContext, useState } from "react";
import BodyBreadCrumb from "../BodyBreadCrumb/BodyBreadCrumb";
import ProductsTable from "./ProductsTable";
import { ProductContext } from "../../../../providers/ProductContext";
import ProductAddModal from "./ProductAddModal";
import ProductEditModal from "./ProductEditModal";
const Products = () => {

  const [showModal,setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const {products , loading , deleteProduct} = useContext(ProductContext);

  const handleEdit = (product) => {
    console.log('Edit product:', product);
  };
  
  const handleDelete = (id) => {
    const product = {
      id : id
    }
    deleteProduct(product)
    .then((response) => {
    console.log('Product deleted successfully:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  };

  return (
    <>
      <div className="content-wrapper">
      <BodyBreadCrumb value="Products" />

        <section className="content">
          <div className="container-fluid">
          <div className="row">
            <div className="col-10">
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-block btn-secondary" style={{ marginLeft: 0 }} onClick={handleShow}>Add Product</button>
            </div>
          </div>
          <br />
         <ProductsTable products={products} loading={loading} onEdit={handleEdit} onDelete={handleDelete}/>
          </div>
        </section>
      </div>
      <ProductAddModal show={showModal} handleClose={handleClose} />
    </>
  );
  
};

export default Products;
