/* eslint-disable max-lines */
"use client";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";

import { Movie } from "@/modules/admin/payload-types";

import { MovieModal } from "./MovieModal";

const { Text } = Typography;

const BRAND = "#ff3131";
const CARD_BG = "#111111";
const CARD_BORDER = "rgba(255,255,255,0.08)";
const MODAL_BG = "#111111";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const [open, setOpen] = useState(false);

  const availabilityPercent =
    movie.totalSeats > 0
      ? Math.round((movie.availableSeats / movie.totalSeats) * 100)
      : 0;

  const seatsColor =
    availabilityPercent > 50
      ? "#52c41a"
      : availabilityPercent > 20
        ? "#faad14"
        : BRAND;

  const posterUrl = typeof movie.poster === "object" ? movie.poster?.url : null;

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        style={{
          width: "100%",
          borderRadius: 14,
          overflow: "hidden",
          background: CARD_BG,
          border: `1px solid ${CARD_BORDER}`,
          cursor: "pointer",
          transition: "transform 0.18s, box-shadow 0.18s",
          boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform =
            "translateY(-4px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${BRAND}55`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 4px 24px rgba(0,0,0,0.35)";
        }}
      >
        {/* Постер */}
        <div style={{ position: "relative", height: 300 }}>
          {posterUrl ? (
            <Image
              src={posterUrl}
              fill
              style={{ objectFit: "cover" }}
              alt={movie.name}
            />
          ) : (
            <div
              style={{
                height: "100%",
                background: "#1c1c1c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
                {"Нет постера"}
              </Text>
            </div>
          )}

          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(6px)",
              border: `1px solid ${seatsColor}55`,
              borderRadius: 6,
              padding: "3px 9px",
              fontSize: 12,
              color: seatsColor,
              fontWeight: 600,
            }}
          >
            {movie.availableSeats} {"мест"}
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background:
                "linear-gradient(to top, #111111 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Инфо */}
        <div style={{ padding: "12px 14px 16px" }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: "#fff",
              marginBottom: 8,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {movie.name}
          </div>

          {movie.startTime && (
            <div
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.45)",
                marginBottom: 10,
              }}
            >
              <ClockCircleOutlined style={{ marginRight: 5 }} />
              {dayjs(movie.startTime).format("DD MMM, HH:mm")}
              {movie.endTime && ` — ${dayjs(movie.endTime).format("HH:mm")}`}
            </div>
          )}

          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 7,
                padding: "6px 10px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 2,
                }}
              >
                {"ВЗРОСЛЫЙ"}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>
                {movie.adultPrice} {"т"}
              </div>
            </div>
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 7,
                padding: "6px 10px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 2,
                }}
              >
                {"ДЕТСКИЙ"}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>
                {movie.childPrice} {"т"}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 12,
              background: BRAND,
              color: "#fff",
              textAlign: "center",
              borderRadius: 8,
              padding: "8px 0",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: 0.3,
            }}
          >
            {"Забронировать"}
          </div>
        </div>
      </div>
      <MovieModal
        modalBg={MODAL_BG}
        movie={movie}
        open={open}
        setOpen={setOpen}
        seatsColor={seatsColor}
        brand={BRAND}
        posterUrl={posterUrl}
      />
    </>
  );
};
