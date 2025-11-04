import { title } from "process";
import ProductCard from "../card/product-card";

const ProductList = () => {
  const products = [
    { id: 1, name: "Product 1", description: "Description 1", price: 100000 },
    { id: 2, name: "Product 2", description: "Description 2", price: 200000 },
    { id: 3, name: "Product 3", description: "Description 3", price: 300000 },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard
            id={product.id}
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
