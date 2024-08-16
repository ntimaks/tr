import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col items-center">
          <Link href={`/img/${image.id}`} className="w-full aspect-square relative group">
            <div className="w-full h-full p-0.5 bg-[#213c2f] ">
              {/* Added hover effects for scale and glow */}
              <div className="relative w-full h-full">
                <Image
                  src={image.url}
                  alt={image.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
          <h2 className="mt-2 text-sm truncate w-full text-center">{image.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <SignedOut>
        <div className="flex items-center justify-center h-screen text-2xl">
          Please sign in to view images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
