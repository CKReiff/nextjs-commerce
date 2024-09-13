import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/bigcommerce';
import { Suspense } from 'react';
import { AtSymbolIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default async function Footer() {
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <div className="bg-amber-100 px-6 py-12 text-black">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-md">
            <h3 className="mb-2 text-lg uppercase">Tilmeld dig nyhedsbrevet</h3>
            <p>
              Tilmeld dig vores nyhedsbrev med konkurrencer, tilbud og nyheder. Du vælger selv, hvad
              du vil have nyt om.
            </p>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <a
                className="bg-black p-4 text-center font-bold uppercase text-white hover:text-yellow-600"
                href="https://www.faraos.dk/services/nyhedsbrev"
              >
                Nyhedsbrev
              </a>
            </div>
          </div>
          <div className="max-w-md">
            <h3 className="mb-2 text-lg uppercase">Følg os...</h3>
            <p>
              Alt det nye om konkurrencer, events, tilbud og produkter. Følg os i dag, så er du
              altid opdateret.
            </p>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <a
                target="_blank"
                className="bg-black p-4 text-center font-bold uppercase text-white hover:text-yellow-600"
                href="https://www.facebook.com/Faraos-Cigarer-113617992039965"
              >
                Facebook
              </a>
              <a
                target="_blank"
                className="bg-black p-4 text-center font-bold uppercase text-white hover:text-yellow-600"
                href="https://twitter.com/faraoscigarer"
              >
                twitter
              </a>
              <a
                target="_blank"
                className="bg-black p-4 text-center font-bold uppercase text-white hover:text-yellow-600"
                href="https://www.instagram.com/faraoscigarer/"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-white px-6 py-12 md:flex-row">
        <div className="mb-12 md:mb-0">
          <a
            href="https://dk.trustpilot.com/review/www.faraos.dk"
            className="hover:text-yellow-600"
          >
            Gå til Trustpilot
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="" className="mr-6 basis-full sm:basis-auto">
            <img src="/ehandel.png" />
          </a>
          <p>
            <img src="/card-dankort.png" />
          </p>
          <p>
            <img src="/card-visa.png" />
          </p>
          <p>
            <img src="/card-visaelectron.png" />
          </p>
          <p>
            <img src="/card-mastercard.png" />
          </p>
          <p>
            <img src="/card-faktura.png" />
          </p>
        </div>
      </div>
      <div className="bg-gray-950 p-6 text-sm text-zinc-500">
        <div className="flex flex-col justify-between md:flex-row">
          <p>&copy; Faraos Cigarer Aps Cvr 17272241</p>
          <div className="mt-6 flex flex-col gap-2 md:mt-0 lg:flex-row lg:gap-8">
            <p>
              <MapPinIcon className="mr-1 inline h-5" />
              Skindergade 27, 1159 København K
            </p>
            <p>
              <PhoneIcon className="mr-1 inline h-5" />
              33 32 22 11
            </p>
            <a href="mailto:faraos@faraos.dk" className="hover:text-yellow-600">
              <AtSymbolIcon className="mr-1 inline h-5" />
              faraos@faraos.dk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
