"use client";

import Image from "next/image";
import { useState } from "react";

import { Movie } from "@/modules/admin/payload-types";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    adults: 1,
    children: 0,
  });

  const createOrder = async () => {
    await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie: movie.id,
        ...form,
      }),
    });

    setOpen(false);
  };

  return (
    <div>
      <h2 onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        {movie.name}
      </h2>

      <Image
        src={movie.poster?.url || ""}
        width={200}
        height={320}
        alt={movie.name}
      />

      {open && (
        <div style={{ border: "1px solid #ccc", padding: 20 }}>
          <h3>Бронирование</h3>
          <h3>Всего мест: {movie.totalSeats}</h3>
          <h3>Доступные места: {movie.availableSeats}</h3>
          <h3>Даты: {movie.startTime}</h3>
          <h3>Даты конец: {movie.endTime}</h3>

          <input
            placeholder="Имя"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Телефон"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            type="number"
            placeholder="Взрослые"
            onChange={(e) =>
              setForm({ ...form, adults: Number(e.target.value) })
            }
          />

          <input
            type="number"
            placeholder="Дети"
            onChange={(e) =>
              setForm({ ...form, children: Number(e.target.value) })
            }
          />

          <button onClick={createOrder}>Забронировать</button>
          <button onClick={() => setOpen(false)}>Закрыть</button>
        </div>
      )}
    </div>
  );
};
