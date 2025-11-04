import { Button } from "../ui/button";

const Detail = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square bg-amber-300"></div>
        <div className="flex flex-col gap-4">
          <span>Nama Produk</span>
          <span>IDR 300000</span>
          <span>Description</span>

          <div className="grid grid-cols-2 gap-2">
            <Button>Add To Cart</Button>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex gap-8">
          <span>Descripsi</span>
          <span>Additional Information</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
