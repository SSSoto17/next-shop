const BasketSidebar = () => {
  return (
    <section className="sticky bottom-0 bg-main-background">
      <h3>My Basket</h3>
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
  );
};

export default BasketSidebar;
