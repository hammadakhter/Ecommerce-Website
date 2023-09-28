import Image from "next/image";
import Link from "next/link";

const products = [
    {
      id: 1,
      name: 'MENS SHIRT',
      description: 'This is very bueatiful shirt for mens',
      price: '$39.99',
      image: '/public/mens shirts.jpg', 
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '$29.99',
      
    },
    // Add more products here
  ];
  
  const ProductsPage = () => {
    return (
      <div>
        <div className="container mt-4">
          <h2>Products</h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    width={100}
                    height={100}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                    <Link
                      href={`/products/${product.id}`}
                      className="btn btn-primary"
                        >
                         View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductsPage;