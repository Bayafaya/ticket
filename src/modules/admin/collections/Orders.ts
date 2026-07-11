export const OrdersCollection = {
  slug: "orders",

  hooks: {
    beforeChange: [
      //@ts-expect-error bug from payload
      async ({ data, req, operation, originalDoc }) => {
        const newMovieId =
          typeof data.movie === "object" ? data.movie.id : data.movie;
        const newMovie = await req.payload.findByID({
          collection: "movies",
          id: newMovieId,
        });

        const totalTickets = data.adults + data.children;

        if (operation === "update" && originalDoc) {
          const oldMovieId =
            typeof originalDoc.movie === "object"
              ? originalDoc.movie.id
              : originalDoc.movie;

          const oldMovie = await req.payload.findByID({
            collection: "movies",
            id: oldMovieId,
          });

          const oldTotalTickets = originalDoc.adults + originalDoc.children;

          await req.payload.update({
            collection: "movies",
            id: oldMovie.id,
            data: {
              availableSeats: oldMovie.availableSeats + oldTotalTickets,
            },
          });
        }

        if (newMovie.availableSeats < totalTickets) {
          throw new Error("Not enough seats");
        }

        data.totalPrice =
          data.adults * newMovie.adultPrice +
          data.children * newMovie.childPrice;

        await req.payload.update({
          collection: "movies",
          id: newMovie.id,
          data: {
            availableSeats: newMovie.availableSeats - totalTickets,
          },
        });

        return data;
      },
    ],
    afterDelete: [
      //@ts-expect-error bug from payload
      async ({ doc, req }) => {
        const movieId =
          typeof doc.movie === "object" ? doc.movie.id : doc.movie;

        const movie = await req.payload.findByID({
          collection: "movies",
          id: movieId,
        });

        const totalTickets = doc.adults + doc.children;

        await req.payload.update({
          collection: "movies",
          id: movie.id,
          data: {
            availableSeats: movie.availableSeats + totalTickets,
          },
        });
      },
    ],
  },

  fields: [
    {
      name: "movie",
      type: "relationship",
      relationTo: "movies",
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "adults",
      type: "number",
      required: true,
    },
    {
      name: "children",
      type: "number",
      required: true,
    },
    {
      name: "totalPrice",
      type: "number",
    },
  ],
};
