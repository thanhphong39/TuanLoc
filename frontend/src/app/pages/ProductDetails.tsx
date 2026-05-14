import { useState, useEffect } from "react";
import { Download, FileText, CheckCircle, Shield, PhoneCall, Mail, Settings, Zap, Layers, ArrowLeft } from "lucide-react";
import { useParams, Link, Navigate } from "react-router";
import { getProduct, type ApiProduct } from "../../lib/api";

const iconMap = {
  settings: Settings,
  zap: Zap,
  shield: Shield,
  layers: Layers,
};

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getProduct(id)
      .then((data) => setProduct(data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return null;
  if (!product || (product as { message?: string }).message) {
    return <Navigate to="/products" replace />;
  }

  const badgeColor = product.badge === "HÀNG SẴN KHO" ? "bg-[#b71508]" : "bg-[#3b4b8a]";
  const heroImage = product.images[0] ?? "";
  const thumbImages = product.images.slice(0, 4);
  const Icon = iconMap["settings"];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Breadcrumb */}
      <div className="py-4 px-8 border-b border-gray-100 text-xs font-medium uppercase tracking-widest text-gray-500">
        <div className="max-w-7xl mx-auto flex gap-2 items-center">
          <Link to="/products" className="hover:text-[#b71508] flex items-center gap-1">
            <ArrowLeft size={12} /> SẢN PHẨM
          </Link>
          <span>/</span>
          <span className="text-[#3b4b8a]">{product.category.toUpperCase()}</span>
          <span>/</span>
          <span className="text-[#111827] truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Gallery */}
        <div>
          <div className="bg-[#f0f4f8] rounded-lg mb-4 aspect-[4/3] flex items-center justify-center overflow-hidden relative">
            <img
              src={heroImage}
              alt={product.name}
              className="w-full h-full object-cover rounded shadow-lg"
            />
            {product.badge && (
              <div className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm text-white ${badgeColor}`}>
                {product.badge}
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {thumbImages.map((src, i) => (
              <div
                key={i}
                className={`bg-[#f0f4f8] rounded aspect-square overflow-hidden ${i === 0 ? "border-2 border-[#b71508]" : "border border-gray-200"}`}
              >
                {i === 3 && thumbImages.length === 4 ? (
                  <div className="relative w-full h-full">
                    <img src={src} alt="More" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="text-white font-bold text-xs">+3 Xem thêm</span>
                    </div>
                  </div>
                ) : (
                  <img src={src} alt={`Detail ${i + 1}`} className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Info */}
        <div>
          <div className="bg-[#e0e7ff] text-[#3b4b8a] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm inline-block mb-6">
            {product.category.toUpperCase()}
          </div>
          <h1 className="text-4xl font-bold text-[#111827] mb-6 leading-tight">{product.name}</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

          <ul className="space-y-4 mb-10">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#b71508] shrink-0 mt-0.5" />
                <span className="text-[#111827] font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mb-8">
            <button className="bg-[#b71508] text-white font-bold py-4 px-6 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors flex items-center justify-center gap-2 w-full">
              <Mail size={18} /> Yêu cầu báo giá doanh nghiệp
            </button>
            <button className="bg-white border border-[#b71508] text-[#b71508] font-bold py-4 px-6 rounded text-sm uppercase tracking-wider hover:bg-red-50 transition-colors flex items-center justify-center gap-2 w-full">
              <Download size={18} /> Tải Catalogue PDF đầy đủ
            </button>
          </div>

          <div className="bg-[#f8fafc] p-6 rounded-lg border border-gray-100 flex items-start gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm text-[#b71508]">
              <PhoneCall size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Hỗ trợ kỹ thuật</div>
              <div className="text-lg font-bold text-[#b71508] mb-1">{product.supportPhone || "1900.555.888"}</div>
              <div className="text-sm text-gray-600">Sẵn sàng 24/7 cho các hạ tầng quan trọng.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Table */}
      <div className="bg-[#f8fafc] py-20 w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#111827] mb-2">Thông số kỹ thuật</h2>
              <p className="text-gray-600">Dữ liệu độ chính xác cấp bản vẽ để tích hợp hệ thống.</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#e0e7ff] text-[#3b4b8a] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded">Hệ mét</button>
              <button className="bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded">Hệ Anh</button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#3b4b8a] text-white text-xs uppercase tracking-widest">
                  <th className="py-4 px-6 font-bold w-1/3">THÔNG SỐ</th>
                  <th className="py-4 px-6 font-bold w-1/3 border-l border-white/20">CẤU HÌNH TIÊU CHUẨN</th>
                  <th className="py-4 px-6 font-bold w-1/3 border-l border-white/20">PHIÊN BẢN CAO CẤP ENTERPRISE</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
                {/* specs not yet in product model — rows populated when model is extended */}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <button className="text-[#b71508] text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:underline">
              <FileText size={16} /> Xem sơ đồ kích thước chi tiết &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Features Info */}
      <div className="max-w-7xl mx-auto px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-10 flex flex-col justify-between">
          <div>
            <div className="text-[#b71508] mb-6">
              <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-4">{product.name}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#f8fafc] border border-gray-100 rounded-lg p-6">
              <div className="text-2xl font-bold text-[#3b4b8a] mb-1">{product.features.length}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">TÍNH NĂNG NỔI BẬT</div>
            </div>
            <div className="bg-[#f8fafc] border border-gray-100 rounded-lg p-6">
              <div className="text-2xl font-bold text-[#3b4b8a] mb-1">{product.images.length}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">HÌNH ẢNH SẢN PHẨM</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-lg p-8 bg-[#3b4b8a] text-white">
            <div className="mb-4 text-yellow-400"><Settings size={24} /></div>
            <h4 className="font-bold text-lg mb-3">Thông số chi tiết</h4>
            <p className="text-sm leading-relaxed text-blue-100">Liên hệ với đội ngũ kỹ thuật để nhận bảng thông số đầy đủ và tư vấn lựa chọn phù hợp với dự án của bạn.</p>
          </div>
          <div className="rounded-lg p-8 bg-[#b71508] text-white">
            <div className="mb-4 text-red-200"><Shield size={24} /></div>
            <h4 className="font-bold text-lg mb-3">Bảo hành chính hãng</h4>
            <p className="text-sm leading-relaxed text-red-100">Tất cả sản phẩm đều có chứng nhận chất lượng và được bảo hành theo tiêu chuẩn nhà sản xuất.</p>
          </div>
        </div>
      </div>

      {/* Consult CTA */}
      <div className="bg-[#1f2937] text-white w-full py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-6">Tư vấn Kỹ thuật</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Trao đổi trực tiếp với các kỹ sư điện cao cấp của chúng tôi về việc tích hợp {product.name} vào dự án hạ tầng tiếp theo của bạn.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-500/20 text-[#ef4444] p-3 rounded"><PhoneCall size={24} /></div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">HOTLINE TOÀN CẦU</div>
                  <div className="text-xl font-bold">{product.supportPhone || "0900.555.888"}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 text-blue-400 p-3 rounded"><Mail size={24} /></div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">YÊU CẦU DOANH NGHIỆP</div>
                  <div className="text-xl font-bold">contact@tuanloc.com.vn</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">HỌ VÀ TÊN</label>
                  <input type="text" placeholder="Tên kỹ sư / Kiến trúc sư" className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#111827] outline-none focus:border-[#b71508]" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">EMAIL DOANH NGHIỆP</label>
                  <input type="email" placeholder="ten@congty.com" className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#111827] outline-none focus:border-[#b71508]" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">CHI NHÁNH DỰ ÁN</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#111827] outline-none focus:border-[#b71508]">
                  <option>Tư vấn ban đầu</option>
                  <option>Báo giá chi tiết</option>
                  <option>Hỗ trợ kỹ thuật</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">MÔ TẢ NGẮN GỌN DỰ ÁN</label>
                <textarea rows={4} placeholder="Nêu rõ yêu cầu hạ tầng của bạn..." className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#111827] outline-none focus:border-[#b71508] resize-none"></textarea>
              </div>
              <button type="submit" className="bg-[#b71508] text-white font-bold py-4 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors mt-2">
                GỬI YÊU CẦU KỸ THUẬT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
