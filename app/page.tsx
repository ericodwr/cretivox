import Image from 'next/image';
import { API_ENDPOINTS } from './api/endpoints';
import Dashboard from './dashboard';
import { product } from './types/product';

async function getData() {
  const res = await fetch(API_ENDPOINTS);

  return res.json();
}

export default async function Home() {
  const data = await getData();

  const categories = data.products.map((c: any) => c.category);

  const unique: string[] = Array.from(new Set(categories));
  const products: product[] = data.products;

  return (
    <main>
      <div>
        <Dashboard categories={unique} products={products} />
      </div>
    </main>
  );
}
