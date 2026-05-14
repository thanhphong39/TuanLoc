const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

export interface ApiProduct {
  _id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  features: string[];
  images: string[];
  supportPhone: string;
}

export interface ApiPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  badge: string;
}

export const getProducts = (params?: Record<string, string>) =>
  fetch(`${BASE}/api/products${params ? "?" + new URLSearchParams(params) : ""}`)
    .then<{ products: ApiProduct[]; total: number }>((r) => r.json());

export const getProduct = (id: string) =>
  fetch(`${BASE}/api/products/${id}`).then<ApiProduct>((r) => r.json());

export const getPosts = (params?: Record<string, string>) =>
  fetch(`${BASE}/api/posts${params ? "?" + new URLSearchParams(params) : ""}`)
    .then<{ posts: ApiPost[]; total: number }>((r) => r.json());

export const createContact = (data: {
  fullName: string;
  email: string;
  phone: string;
  projectDescription: string;
}) =>
  fetch(`${BASE}/api/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((r) => r.json());

export const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  const months = [
    "Tháng 01","Tháng 02","Tháng 03","Tháng 04","Tháng 05","Tháng 06",
    "Tháng 07","Tháng 08","Tháng 09","Tháng 10","Tháng 11","Tháng 12",
  ];
  return `${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]}, ${d.getFullYear()}`;
};
