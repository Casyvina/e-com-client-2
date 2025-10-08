import ProductList from "@/components/ProductList";

const ProductsPage = ({
  searchParams,
}: {
  searchParams: { category?: string };
}) => {
  const category = searchParams?.category || "all"; // fallback if needed

  return (
    <div className="">
      <ProductList category={category} params="products" />
    </div>
  );
};

export default ProductsPage;