import FullPageImageView from "~/components/full-image-page";
export default async function PhotoModal({
  params: { id: photoid },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoid);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  return <FullPageImageView photoid={idAsNumber} />;
}
