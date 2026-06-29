import type { CollectionConfig } from "payload";

export const MoviesCollection: CollectionConfig = {
  slug: "movies",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Название фильма",
    },
    {
      name: "poster",
      type: "upload",
      relationTo: "media",
      label: "Постер",
    },
    {
      name: "description",
      type: "richText",
      label: "Описание",
    },
    {
      name: "startTime",
      type: "date",
      label: "Начало",
      defaultValue: () => new Date(),
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "endTime",
      type: "date",
      label: "Конец",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "rentalPeriod",
      label: "Период проката",
      type: "group",
      fields: [
        {
          name: "from",
          label: "С",
          type: "date",
          required: true,
          admin: {
            date: {
              pickerAppearance: "dayOnly",
            },
          },
        },
        {
          name: "to",
          label: "По",
          type: "date",
          required: true,
          admin: {
            date: {
              pickerAppearance: "dayOnly",
            },
          },
        },
      ],
    },
    {
      name: "totalSeats",
      type: "number",
      label: "Всего мест",
      defaultValue: 18,
      required: true,
    },
    {
      name: "availableSeats",
      type: "number",
      label: "Доступные места",
      defaultValue: 18,
      required: true,
    },
    {
      name: "adultPrice",
      type: "number",
      label: "Взрослый билет",
      defaultValue: 3000,
      required: true,
    },
    {
      name: "childPrice",
      type: "number",
      label: "Детский билет",
      defaultValue: 2000,
      required: true,
    },
    {
      name: "isVisible",
      label: "Видимость",
      type: "checkbox",
      defaultValue: false,
      required: true,
    },
  ],
};
