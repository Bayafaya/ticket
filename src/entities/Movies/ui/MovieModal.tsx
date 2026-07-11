/* eslint-disable max-lines */

"use client";
import {
  ClockCircleOutlined,
  UserOutlined,
  PhoneOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Modal, Form, Input, InputNumber, Button, notification } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";

import { Movie } from "@/modules/admin/payload-types";

type MovieModalProps = {
  movie: Movie;
  posterUrl?: string | null;
  modalBg: string;
  brand: string;
  seatsColor: string;
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const MovieModal = ({
  movie,
  posterUrl,
  modalBg,
  seatsColor,
  brand,
  open,
  setOpen,
}: MovieModalProps) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const createOrder = async (values: {
    name: string;
    phone: string;
    adults: number;
    children: number;
  }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movie: movie.id, ...values }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.errors?.[0]?.message || "Ошибка бронирования");
      }
      api.success({
        message: "Готово!",
        description: `Билеты на «${movie.name}» забронированы.`,
      });
      setOpen(false);
      form.resetFields();
      window.open("https://pay.kaspi.kz/pay/l4xklso8", "_blank");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      api.error({ message: "Ошибка", description: e.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => {
        setOpen(false);
        form.resetFields();
      }}
      footer={null}
      width={460}
      title={null}
      styles={{
        mask: { backdropFilter: "blur(4px)" },
        container: { background: modalBg, padding: 0, borderRadius: 14 },
      }}
    >
      {contextHolder}
      <div
        style={{
          position: "relative",
          height: 160,
          borderRadius: "14px 14px 0 0",
          overflow: "hidden",
        }}
      >
        {posterUrl ? (
          <Image
            src={posterUrl}
            fill
            style={{ objectFit: "cover", filter: "brightness(0.45)" }}
            alt={movie.name}
          />
        ) : (
          <div style={{ height: "100%", background: "#1a1a1a" }} />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(22,22,22,1) 0%, rgba(22,22,22,0.1) 100%)",
          }}
        />
        <div style={{ position: "absolute", bottom: 20, left: 24, right: 24 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>
            {movie.name}
          </div>
          {movie.startTime && (
            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                marginTop: 4,
              }}
            >
              <ClockCircleOutlined style={{ marginRight: 5 }} />
              {dayjs(movie.startTime).format("DD MMMM, HH:mm")}
              {movie.endTime && ` — ${dayjs(movie.endTime).format("HH:mm")}`}
            </div>
          )}
        </div>
      </div>

      {/* Статистика */}
      <div
        style={{
          display: "flex",
          gap: 1,
          background: "rgba(255,255,255,0.05)",
          borderTop: `1px solid rgba(255,255,255,0.06)`,
          borderBottom: `1px solid rgba(255,255,255,0.06)`,
        }}
      >
        {[
          {
            label: "ВСЕГО МЕСТ",
            value: movie.totalSeats,
            icon: <TeamOutlined />,
          },
          {
            label: "СВОБОДНО",
            value: movie.availableSeats,
            color: seatsColor,
          },
          { label: "ВЗРОСЛЫЙ", value: `${movie.adultPrice} т` },
          { label: "ДЕТСКИЙ", value: `${movie.childPrice} т` },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: "12px 0",
              textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.35)",
                marginBottom: 4,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: item.color || "#fff",
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Форма */}
      <div style={{ padding: "24px 24px 20px" }}>
        <Form form={form} layout="vertical" onFinish={createOrder}>
          <Form.Item
            name="name"
            label={
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                {"ИМЯ"}
              </span>
            }
            rules={[{ required: true, message: "Введите имя" }]}
            style={{ flex: 1 }}
          >
            <Input
              prefix={
                <UserOutlined style={{ color: "rgba(255,255,255,0.25)" }} />
              }
              placeholder="Иван Иванов"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                borderRadius: 8,
              }}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label={
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                {"ТЕЛЕФОН"}
              </span>
            }
            rules={[{ required: true, message: "Введите телефон" }]}
            style={{ flex: 1 }}
          >
            <Input
              prefix={
                <PhoneOutlined style={{ color: "rgba(255,255,255,0.25)" }} />
              }
              placeholder="+7 700 000 00 00"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                borderRadius: 8,
              }}
            />
          </Form.Item>

          <div style={{ display: "flex", gap: 12 }}>
            <Form.Item
              name="adults"
              label={
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                  {"ВЗРОСЛЫЕ"}
                </span>
              }
              initialValue={1}
              rules={[{ required: true }]}
              style={{ flex: 1 }}
            >
              <InputNumber
                min={0}
                max={movie.availableSeats}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  color: "#fff",
                }}
                styles={{
                  input: {
                    color: "#fff",
                  },
                }}
              />
            </Form.Item>
            <Form.Item
              name="children"
              label={
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                  {"ДЕТИ"}
                </span>
              }
              initialValue={0}
              rules={[{ required: true }]}
              style={{ flex: 1 }}
            >
              <InputNumber
                min={0}
                max={movie.availableSeats}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                }}
                styles={{
                  input: {
                    color: "#fff",
                  },
                }}
              />
            </Form.Item>
          </div>

          {/* Итого */}
          <Form.Item noStyle shouldUpdate>
            {() => {
              const adults = form.getFieldValue("adults") || 0;
              const children = form.getFieldValue("children") || 0;
              const total =
                adults * movie.adultPrice + children * movie.childPrice;
              return total > 0 ? (
                <div
                  style={{
                    background: `${brand}15`,
                    border: `1px solid ${brand}40`,
                    borderRadius: 8,
                    padding: "10px 14px",
                    marginBottom: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}
                  >
                    {`${adults} взр. + ${children} дет.`}
                  </span>
                  <span
                    style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}
                  >
                    {total} {"тенге"}
                  </span>
                </div>
              ) : null;
            }}
          </Form.Item>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              padding: "10px 14px",
              marginBottom: 16,
              color: "rgba(255,255,255,0.65)",
              fontSize: 12,
              lineHeight: 1.5,
            }}
          >
            <strong style={{ color: "#fff" }}>{"Примечание:"}</strong>{" "}
            {`После оплаты
            через Kaspi мы проверим поступление платежа и свяжемся с вами по
            указанному телефону для подтверждения бронирования.`}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <Button
              onClick={() => {
                setOpen(false);
                form.resetFields();
              }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                borderRadius: 8,
                height: 42,
              }}
            >
              {"Отмена"}
            </Button>
            <Button
              htmlType="submit"
              loading={loading}
              disabled={movie.availableSeats === 0}
              style={{
                flex: 2,
                background: movie.availableSeats === 0 ? "#333" : brand,
                border: "none",
                color: "#fff",
                borderRadius: 8,
                height: 42,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              {movie.availableSeats === 0 ? "Мест нет" : "Забронировать"}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};
