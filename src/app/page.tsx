import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-20">
        {[images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} />
            <h2>{image.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
