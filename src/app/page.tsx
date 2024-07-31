import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/8b874165-ccb7-43c1-9758-3768d3097b04-b6l3mp.png",
  "https://utfs.io/f/5726b09d-b059-419b-a5f6-1bba1cde012e-qyzp4u.png",
  "https://utfs.io/f/cbdb0eb7-8b22-476e-abf0-48776a442d6e-hv8j6y.png",
  "https://utfs.io/f/59f262b9-f9e3-4b60-950d-043b26d60325-s5i33z.png",
  "https://utfs.io/f/f2fd8d39-21e5-42d7-9076-c2f72462821a-6pvtz1.png",
  "https://utfs.io/f/f6cf2550-524f-4a10-9cef-80b7b200626b-5kkfyy.png",
  "https://utfs.io/f/a8ed478c-e6db-4145-ad64-fa787a887577-jp6xeh.png",
  "https://utfs.io/f/f215bd20-c963-4d57-a422-fcafda42bef1-d54gvy.png",
  "https://utfs.io/f/0d673ecb-7ce9-4eb6-be94-a0318cade125-f8782o.png",
  "https://utfs.io/f/fde8f882-be99-4d8d-8041-9623ed78392c-xb7h3i.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-20">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
