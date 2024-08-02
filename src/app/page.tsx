import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-20">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col text-center">
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            alt={image.name}
            width={480}
            height={480}
          />
          <h2>{image.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex h-full w-full text-2xl">
          Please sign in to view images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
