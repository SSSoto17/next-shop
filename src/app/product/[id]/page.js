export default async function ProductSingle({ params }) {
  const id = (await params).id;
  let product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );
  return (
    <main>
      <h1>{product.title}</h1>
    </main>
  );
}
