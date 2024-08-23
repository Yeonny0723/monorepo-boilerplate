import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import ErrorBoundary from "../../../../components/error-boundary";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <ErrorBoundary fallback={<h1>Error loading movie videos!</h1>}>
          <MovieVideos id={id} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
