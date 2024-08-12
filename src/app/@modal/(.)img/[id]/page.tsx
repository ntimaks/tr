export default function PhotoModal({
  params: { id: photoid },
}: {
  params: { id: string };
}) {
  return <div>{photoid}</div>;
}
