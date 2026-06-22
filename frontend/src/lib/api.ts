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

export interface ApiProject {
  _id: string;
  title: string;
  label: string;
  subtitle: string;
  description: string;
  location: string;
  status: string;
  category: string;
  client: string;
  duration: string;
  image: string;
  galleryImages: string[];
  outcomes: string[];
  keyMetrics: { value: string; label: string; icon: string }[];
  scope: { title: string; items: string[] }[];
  challenges: { title: string; description: string }[];
  large: boolean;
}

// Helper: check r.ok và throw lỗi rõ ràng
const checkOk = async <T>(r: Response): Promise<T> => {
  if (!r.ok) {
    const body = await r.json().catch(() => ({})) as { message?: string };
    throw new Error(body.message ?? `Lỗi ${r.status}`);
  }
  return r.json() as Promise<T>;
};

export const getProducts = (params?: Record<string, string>) =>
  fetch(`${BASE}/api/products${params ? "?" + new URLSearchParams(params) : ""}`)
    .then<{ products: ApiProduct[]; total: number }>(checkOk);

export const getProduct = (id: string) =>
  fetch(`${BASE}/api/products/${id}`).then<ApiProduct>(checkOk);

export const getPosts = (params?: Record<string, string>) =>
  fetch(`${BASE}/api/posts${params ? "?" + new URLSearchParams(params) : ""}`)
    .then<{ posts: ApiPost[]; total: number }>(checkOk);

export const getProjects = (params?: Record<string, string>) =>
  fetch(`${BASE}/api/projects${params ? "?" + new URLSearchParams(params) : ""}`)
    .then<{ projects: ApiProject[]; total: number }>(checkOk);

export const getProject = (id: string) =>
  fetch(`${BASE}/api/projects/${id}`).then<ApiProject>(checkOk);

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
  }).then(checkOk);

export const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  const months = [
    "Tháng 01","Tháng 02","Tháng 03","Tháng 04","Tháng 05","Tháng 06",
    "Tháng 07","Tháng 08","Tháng 09","Tháng 10","Tháng 11","Tháng 12",
  ];
  return `${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]}, ${d.getFullYear()}`;
};
