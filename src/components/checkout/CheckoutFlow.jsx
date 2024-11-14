const CheckoutFlow = () => {
  return (
    <menu className="flex gap-6 place-content-center border-t border-b border-silver-chalice-950 py-2 cursor-default">
      <li key="summary" className="font-semibold text-silver-chalice-950">
        Order summary
      </li>
      <li key="delivery">Delivery</li>
      <li key="payment">Payment</li>
    </menu>
  );
};

export default CheckoutFlow;
