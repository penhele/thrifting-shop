import { Handbag, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  id,
  name,
  description,
  price,
}: {
  id: number;
  name: string;
  description: string;
  price: number;
}) => {
  return (
    <Link
      key={id}
      href={`/detail/${id}`}
      className="flex flex-col gap-2 border rounded-xl transition hover:shadow-lg hover:border-gray-300"
    >
      <div className="aspect-square bg-amber-300 rounded-t-xl">gambar</div>
      <div className="flex flex-col gap-2 p-2">
        <span>{name}</span>

        <span className="text-xs text-gray-500">{description}</span>

        <div className="flex justify-between items-center">
          <span className="text-sm">IDR {price}</span>
          <div className="flex gap-2">
            <Heart className="size-4" />
            <Handbag className="size-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
