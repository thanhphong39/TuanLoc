import { useState, useEffect } from "react";
import { getContacts, deleteContact } from "../lib/api";

export default function Contacts() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState(null);

  const totalPages = Math.ceil(total / 20) || 1;

  const load = () =>
    getContacts(page).then((r) => { setItems(r.contacts); setTotal(r.total); });

  useEffect(() => { load(); }, [page]);

  const showAlert = (msg, type = "success") => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const handleDelete = async (id) => {
    if (!confirm("Xóa liên hệ này?")) return;
    await deleteContact(id);
    load();
    showAlert("Đã xóa liên hệ");
  };

  const fmtDate = (d) => new Date(d).toLocaleString("vi-VN");

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 className="page-heading" style={{ marginBottom: 0 }}>Liên hệ <span style={{ fontSize: 15, color: "#64748b", fontWeight: 400 }}>({total} yêu cầu)</span></h2>
      </div>

      {alert && <div className={`alert alert-${alert.type}`}>{alert.msg}</div>}

      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Họ và tên</th><th>Email</th><th>Điện thoại</th><th>Mô tả dự án</th><th>Thời gian</th><th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr><td colSpan={6} className="empty">Chưa có liên hệ nào</td></tr>
              )}
              {items.map((c) => (
                <tr key={c._id}>
                  <td><strong>{c.fullName}</strong></td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td style={{ maxWidth: 260, whiteSpace: "pre-line" }}>
                    {c.projectDescription.length > 100
                      ? c.projectDescription.slice(0, 100) + "..."
                      : c.projectDescription}
                  </td>
                  <td style={{ whiteSpace: "nowrap", fontSize: 12, color: "#64748b" }}>{fmtDate(c.createdAt)}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c._id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button className="page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>‹</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} className={`page-btn ${page === i + 1 ? "active" : ""}`} onClick={() => setPage(i + 1)}>{i + 1}</button>
            ))}
            <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>›</button>
          </div>
        )}
      </div>
    </div>
  );
}
