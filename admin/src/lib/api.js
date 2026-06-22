const rawBase = import.meta.env.VITE_API_URL || "https://tuanloc-backend.vercel.app";
const BASE = rawBase.replace(/\/+$/, "") + "/api"; // Loại bỏ dấu slash (/) ở cuối nếu có và thêm /api

const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
});

// Tự động logout khi token hết hạn hoặc không hợp lệ
export const logout = () => {
  localStorage.removeItem("token");
  window.location.replace("/login");
};

const json = async (r) => {
  if (r.status === 401) {
    logout(); // token hết hạn → tự động đăng xuất
    throw new Error("Phiên đăng nhập hết hạn");
  }
  if (!r.ok) {
    const body = await r.json().catch(() => ({}));
    throw new Error(body.message ?? `HTTP ${r.status}`);
  }
  return r.json();
};

// Auth
export const login = (username, password) =>
  fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then(json);

// Products
export const getProducts = (page = 1) =>
  fetch(`${BASE}/products?page=${page}&limit=10`, { headers: authHeader() }).then(json);

export const getProduct = (id) =>
  fetch(`${BASE}/products/${id}`, { headers: authHeader() }).then(json);

export const createProduct = (formData) =>
  fetch(`${BASE}/products`, {
    method: "POST",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const updateProduct = (id, formData) =>
  fetch(`${BASE}/products/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const deleteProduct = (id) =>
  fetch(`${BASE}/products/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  }).then(json);

// Posts
export const getPosts = (page = 1) =>
  fetch(`${BASE}/posts?page=${page}&limit=10`, { headers: authHeader() }).then(json);

export const getPost = (id) =>
  fetch(`${BASE}/posts/${id}`, { headers: authHeader() }).then(json);

export const createPost = (formData) =>
  fetch(`${BASE}/posts`, {
    method: "POST",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const updatePost = (id, formData) =>
  fetch(`${BASE}/posts/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const deletePost = (id) =>
  fetch(`${BASE}/posts/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  }).then(json);

// Contacts
export const getContacts = (page = 1) =>
  fetch(`${BASE}/contacts?page=${page}&limit=20`, { headers: authHeader() }).then(json);

export const deleteContact = (id) =>
  fetch(`${BASE}/contacts/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  }).then(json);

// Projects
export const getProjects = (page = 1) =>
  fetch(`${BASE}/projects?page=${page}&limit=10`, { headers: authHeader() }).then(json);

export const getProject = (id) =>
  fetch(`${BASE}/projects/${id}`, { headers: authHeader() }).then(json);

export const createProject = (formData) =>
  fetch(`${BASE}/projects`, {
    method: "POST",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const updateProject = (id, formData) =>
  fetch(`${BASE}/projects/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const deleteProject = (id) =>
  fetch(`${BASE}/projects/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  }).then(json);
