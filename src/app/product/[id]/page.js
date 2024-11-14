import Image from "next/image";
import MoreInfo from "@/components/MoreInfo";
import ImageGallery from "@/components/ImageGallery";

export default async function ProductSingle({ params }) {
  const id = (await params).id;
  let product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json());

  return (
    <main>
      <header></header>
      <ImageGallery product={product}></ImageGallery>
      {/* <Image src={product.thumbnail} alt={product.title} width="500" height="500" /> */}
      <article className="flow-space">
        <p>Spar {product.discountPercentage}%</p>
        <h1 className="text-silver-chalice-600 text-xl">{product.brand}</h1>
        <h2 className="text-silver-chalice-950 text-4xl">{product.title}</h2>
        <p className="text-2xl pb-8">
          {product.price} <span className="text-sm">$</span>
        </p>
        <h3 className="text-xl font-bold">Description</h3>
        <p className="pb-8">{product.description}</p>
        <MoreInfo></MoreInfo>
      </article>
    </main>
  );
}
