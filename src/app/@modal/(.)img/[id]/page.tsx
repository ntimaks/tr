import { getImage } from "~/server/queries";
import FullPageImageView from "~/components/full-image-page";
import { Modal } from "./modal";
export default async function PhotoModal({
  params: { id: photoid },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoid);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  const image = await getImage(idAsNumber);
  return (
    <Modal>
      <FullPageImageView photoid={idAsNumber} />
    </Modal>
  );
}
