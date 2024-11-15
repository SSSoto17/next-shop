import Link from "next/link";

import MoreInfo from "@/components/MoreInfo";
import ImageGallery from "@/components/ImageGallery";
import { MdOutlineArrowBack } from "react-icons/md";

export default async function ProductSingle({ params }) {
  const id = (await params).id;
  let product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json());

  return (
    <main>
      <header className="pt-4">
        <Link href="/products/" className="flex items-center">
          <span className="pr-2">
            <MdOutlineArrowBack />
          </span>
          Back to products
        </Link>
      </header>
      <section className="grid md:grid-cols-2 gap-8">
        <ImageGallery product={product}></ImageGallery>
        <article className="flow-space">
          <p className="w-fit py-2 px-6 -ml-3 top-3 bg-tabasco-800 rounded-lg text-silver-chalice-50">Save {product.discountPercentage}%</p>
          <h1 className="text-silver-chalice-600 text-xl">{product.brand}</h1>
          <h2 className="text-silver-chalice-950 text-4xl">{product.title}</h2>
          <p className="text-2xl pb-8">
            {product.price} <span className="text-sm">$</span>
          </p>
          <h3 className="text-xl font-bold">Description</h3>
          <p className="pb-8">{product.description}</p>
          <MoreInfo product={product}></MoreInfo>
        </article>
      </section>
    </main>
  );
}
