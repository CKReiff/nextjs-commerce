import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import Prose from 'components/prose';
import { getPage } from 'lib/bigcommerce';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const page = await getPage('home');
  console.log(page);

  if (!page) return notFound();

  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <div className="bg-yellow-600">
          <div className="mx-auto mt-36 max-w-7xl px-6 py-12">
            <img src="/bugatti.png" className="-mt-40" />
            <Prose className="mb-8 max-w-3xl text-sm" html={page.body as string} />
          </div>
        </div>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
