export default function MovieDetail({
  // server component by default
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);
  return <h1>Movie {id}</h1>;
}
