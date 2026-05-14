const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
});

const json = (r) => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
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
