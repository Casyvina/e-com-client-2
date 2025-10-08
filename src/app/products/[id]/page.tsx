import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 59.9,
  sizes: ["xs", "s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    title: product.name,
    description: product.description,
  };
};
const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: Promise<{ color?: string; size?: string }>;
}) => {
  const { size, color } = (await searchParams) ?? {};
  const selectedSize = size || product.sizes[0];
  const selectedColor = color || product.colors[0];

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default ProductPage;
