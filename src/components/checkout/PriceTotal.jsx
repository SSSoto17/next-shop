import ButtonCTA from "../ButtonCTA";

const PriceTotal = ({ subTotal, discount, priceTotal }) => {
  return (
    <footer className="py-4 grid gap-4 border-silver-chalice-400 border-t cursor-default">
      <ul>
        <li className="flex justify-between font-semibold text-lg">
          <p>Subtotal:</p>
          <p>{subTotal}</p>
        </li>
        <li className="flex justify-between text-lg">
          <p>Discount:</p>
          <p className="text-tabasco-600">{discount}</p>
        </li>
        <li className="flex justify-between font-bold text-xl py-4">
          <p>Total:</p>
          <p>{priceTotal}</p>
        </li>
      </ul>
      <ButtonCTA label="Pay now" />
    </footer>
  );
};

export default PriceTotal;
