import React,{createContext , useState , useEffect} from 'react'

export const ProductContext = createContext();
export const ProductProvider = ({children}) => {

  const [products , setProduct] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?sortBy=title&order=desc')
    .then((res) => res.json())
    .then((data)=> {
      setProduct(data.products);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching in products",error);
      setLoading(false);
    });
  },[]);



  //add new product
  const addProduct = (newProduct) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((addedProduct) => {
          setProduct((prevProducts) => [addedProduct, ...prevProducts]);
          setLoading(false);
          resolve(true); // Resolve the promise if the product is added successfully
        })
        .catch((error) => {
          console.error('Error adding product:', error);
          setLoading(false);
          reject(false); // Reject the promise in case of an error
        });
    });
  };

//Delete a profuct
const deleteProduct = (product) => {
  return new Promise((resolve, reject) => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${product.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.isDeleted === true) {
          setProduct((prevProducts) => prevProducts.filter(p => p.id !== product.id));
          resolve(data);  
        } else {
          reject('Failed to delete product');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error deleting product:', error);
        reject(error);  
      });
  });
};


  return (
    <ProductContext.Provider value={{ products, loading , addProduct , deleteProduct }}>
      {children}
    </ProductContext.Provider>      
  )
}

