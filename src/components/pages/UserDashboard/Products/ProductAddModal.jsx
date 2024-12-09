import React,{useState , useContext} from "react";
import {Modal , Button} from "react-bootstrap";
import { ProductContext } from "../../../../providers/ProductContext";
const ProductAddModal = ({ show, handleClose }) => {
    
    const { addProduct } = useContext(ProductContext);
    const [productName,setProductName] = useState('');
    const [productPrice,setProductPrice] = useState('');
    const [productCategory,setProductCategory] = useState('');

    const handleSubmit = () => {

        const newProduct = {
            title : productName,
            category : productCategory ,
            price : productPrice 
        }
        addProduct(newProduct)
        .then((success) => {
          if (success) {
            console.log('Product added successfully!');
          }
        })
        .catch((error) => {
          console.error('Failed to add product:', error);
        });

        setProductName('');
        setProductPrice('');
        setProductCategory('');
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productCategory" className="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="productCategory"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleSubmit}>Add Product</Button>
          </Modal.Footer>
        </Modal>
      ); 
}

export default ProductAddModal;