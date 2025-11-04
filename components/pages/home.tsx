import ProductList from "../product/product-list";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="flex justify-center">
        <div className="flex gap-4">
          <span className="hover:underline">Kaos</span>
          <span className="hover:underline">Celana</span>
          <span className="hover:underline">Jaket</span>
        </div>
      </div>

      <ProductList />
    </div>
  );
};

export default Home;
