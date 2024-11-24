import useSWR from "swr";
import { useSearchParams } from "next/navigation";

const fetcher = (url) => fetch(url).then((r) => r.json());

import Loading from "@/components/global/Loading";
import ProductCard from "./ProductCard";

export default function ProductGrid({ loadLimit, addToBasket }) {
  // SEARCH PARAMS
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  // DYNAMIC API URL
  let URL = q
    ? `https://dummyjson.com/products/search?q=${q}&limit=${loadLimit}`
    : `https://dummyjson.com/products?limit=${loadLimit}`;

  // FETCH DATA
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <Loading variant="error" />;
  if (isLoading) return <Loading variant="loading" />;

  // DATA
  const products = data.products;
  const totalProducts = data.total;

  return (
    <section className="grid grid-cols-2 auto-rows-fr sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 place-content-start">
      {totalProducts === 0 ? (
        <NoSearchMatches />
      ) : (
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              {...product}
              // addToBasket={addToBasket}
            />
          );
        })
      )}
    </section>
  );
}

// NO SEARCH RESULTS
import { LuSearchX } from "react-icons/lu";

const NoSearchMatches = () => {
  return (
    <article className="col-span-full row-span-full place-self-center text-xl flex items-center gap-2">
      <LuSearchX size="32" />
      No product matches
    </article>
  );
};
