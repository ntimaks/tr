import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoid: number }) {
  const image = await getImage(props.photoid);
  return <img src={image.url} className="w-1/3"></img>;
}
