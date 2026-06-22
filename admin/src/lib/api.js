const rawBase = import.meta.env.VITE_API_URL || "https://tuanloc-backend.vercel.app";
const BASE = rawBase.replace(/\/+$/, ""); // Loại bỏ dấu slash (/) ở cuối nếu có

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
  fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then(json);

// Products
export const getProducts = (page = 1) =>
  fetch(`${BASE}/api/products?page=${page}&limit=10`, { headers: authHeader() }).then(json);

export const getProduct = (id) =>
  fetch(`${BASE}/api/products/${id}`, { headers: authHeader() }).then(json);

export const createProduct = (formData) =>
  fetch(`${BASE}/api/products`, {
    method: "POST",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const updateProduct = (id, formData) =>
  fetch(`${BASE}/api/products/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const deleteProduct = (id) =>
  fetch(`${BASE}/api/products/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  }).then(json);

// Posts
export const getPosts = (page = 1) =>
  fetch(`${BASE}/api/posts?page=${page}&limit=10`, { headers: authHeader() }).then(json);

export const getPost = (id) =>
  fetch(`${BASE}/api/posts/${id}`, { headers: authHeader() }).then(json);

export const createPost = (formData) =>
  fetch(`${BASE}/api/posts`, {
    method: "POST",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const updatePost = (id, formData) =>
  fetch(`${BASE}/api/posts/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const deletePost = (id) =>
  fetch(`${BASE}/api/posts/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  }).then(json);

// Contacts
export const getContacts = (page = 1) =>
  fetch(`${BASE}/api/contacts?page=${page}&limit=20`, { headers: authHeader() }).then(json);

export const deleteContact = (id) =>
  fetch(`${BASE}/api/contacts/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  }).then(json);

// Projects
export const getProjects = (page = 1) =>
  fetch(`${BASE}/api/projects?page=${page}&limit=10`, { headers: authHeader() }).then(json);

export const getProject = (id) =>
  fetch(`${BASE}/api/projects/${id}`, { headers: authHeader() }).then(json);

export const createProject = (formData) =>
  fetch(`${BASE}/api/projects`, {
    method: "POST",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const updateProject = (id, formData) =>
  fetch(`${BASE}/api/projects/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: formData,
  }).then(json);

export const deleteProject = (id) =>
  fetch(`${BASE}/api/projects/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  }).then(json);
