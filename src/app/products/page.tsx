import ProductList from "@/components/ProductList";

interface ProductsPageProps {
  searchParams?: Promise<{ category?: string }>;
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  // ✅ Await it
  const query = (await searchParams) ?? {};
  const category = query.category || "";

  return (
    <div className="px-6 md:px-12 lg:px-20">
      <ProductList category={category} params="products" />
    </div>
  );
};

export default ProductsPage;
