import { Suspense } from 'react';
import ProductsClient from './ProductsClient';

export const metadata = {
  title: 'Seed Catalog | Dev Shree Agro Seeds - Soybean, Wheat, Gram & more',
  description: 'Explore our masterfully selected seed collection. High-yield Soybean, Wheat, Gram, Mustard, and Mung varieties certified for superior farming results.',
  keywords: ['certified seeds', 'soybean variety JS 2433', 'JS 2303', 'HI-1544 wheat', 'high yield seeds India', 'agriculture seed catalog'],
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><span className="loader"></span></div>}>
      <ProductsClient />
    </Suspense>
  );
}
