import CTA from "./CTA";

const Hero = () => {
  return (
    <section className="bg-[url('../assets/hero.jpg')] bg-cover bg-center h-full col-span-full grid grid-cols-subgrid py-6 place-content-center">
      <article className="flow-space bg-silver-chalice-50 drop-shadow-main rounded-xl p-6 col-start-2">
        <h1 className="font-bold text-4xl text-silver-chalice-950">NextShop</h1>
        <p className="text-xl">Ready for your Next big splash?</p>
        <CTA url="/products" label="Explore our selection" icon />
      </article>
    </section>
  );
};

export default Hero;
