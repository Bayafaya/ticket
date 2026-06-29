import { geAppPayload } from "@/shared/payload";

import { MovieCard } from "./MovieCard";

export const MoviesList = async () => {
  const payload = await geAppPayload();

  const movies = await payload.find({
    collection: "movies",
    where: {
      isVisible: {
        equals: true,
      },
    },
  });

  return (
    <div>
      {movies.docs.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
