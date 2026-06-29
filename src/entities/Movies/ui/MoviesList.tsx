import { geAppPayload } from "@/shared/payload";

import { MovieCard } from "./MovieCard";

export const MoviesList = async () => {
  const payload = await geAppPayload();

  const movies = await payload.find({
    collection: "movies",
    pagination: false,
    where: {
      isVisible: {
        equals: true,
      },
    },
  });

  return (
    <div className="grid grid-cols-1 gap-3">
      {movies.docs.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
