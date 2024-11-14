export default async function Checkout({ searchParams }) {
  const data = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  const { items } = await searchParams;
  const parsedProducts = JSON.parse(items);

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

  console.log(itemsFromBasket);
  return (
    <main>
      <section>
        <ul>
          {itemsFromBasket.map((product) => {
            return product ? <li>{product.title}</li> : "Your basket is empty!";
          })}
        </ul>
        <footer>
          <p>Subtotal: (price)</p>
          <p>Total savings: (discount)</p>
          <p>Total: (price - discount)</p>
          <button>Pay now</button>
        </footer>
      </section>
    </main>
  );
}
