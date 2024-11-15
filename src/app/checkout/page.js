import ButtonCTA from "@/components/ButtonCTA";
import PageHeader from "@/components/PageHeader";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";
import PriceTotal from "@/components/checkout/PriceTotal";
import ProductBasket from "@/components/checkout/ProductBasket";

export default async function Checkout({ searchParams }) {
  // FETCHING API
  const data = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  // COLLECTING ITEMS IN BASKET FROM URL PARAMS
  const { items } = await searchParams;
  const parsedProducts = JSON.parse(items);

  // ITEMS IN BASKET AS ARRAY
  const itemsFromBasket = parsedProducts
    .map((params) => {
      return filterData(params.id);
    })
    .flat();

  function filterData(id) {
    return data.products.filter((product) => {
      return product.id === id;
    });
  }

  let subTotal = itemsFromBasket.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  const subTotalRounded = Math.round(subTotal * 100) / 100;

  return (
    <main>
      <section className="h-full w-full max-w-screen-sm place-self-center">
        <PageHeader pageTitle={"Checkout"}>
          <CheckoutFlow />
        </PageHeader>
        <ProductBasket basketItems={itemsFromBasket} />
        <PriceTotal
          subTotal={subTotalRounded}
          discount="-10.99"
          priceTotal="19.97"
        />
      </section>
    </main>
  );
}
