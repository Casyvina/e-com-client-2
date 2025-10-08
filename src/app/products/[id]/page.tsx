import Image from "next/image";
import { ProductsType } from "@/types";
import ProductInteraction from "@/components/ProductInteraction";
import { products } from "@/components/ProductList";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ color?: string; size?: string }>;
}) => {
  // ✅ both params and searchParams need to be awaited
  const { id } = await params;
  const query = (await searchParams) ?? {};

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return <div className="p-12">Product not found</div>;
  }


  const selectedSize = query.size || product.sizes[0];
  const selectedColor = query.color || product.colors[0];

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
