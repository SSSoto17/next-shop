export default async function Checkout({ searchParams }) {
  console.log(await searchParams);
  const products = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  const { items } = await searchParams;
  const parsedProducts = JSON.parse(items);

  return (
    <main>
      <section>
        <ul>
          <li>Product</li>
          <li>Product</li>
          <li>Product</li>
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
