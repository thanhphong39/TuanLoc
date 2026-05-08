import { motion } from 'framer-motion';
import { Plus, Search, Filter, Edit, Trash2, ExternalLink } from 'lucide-react';

const ProductsPage = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Sản Phẩm</h1>
          <p className="text-gray-400 font-medium">Quản lý danh mục thiết bị điện công nghiệp.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Thêm sản phẩm mới
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm..." 
              className="w-full px-5 py-3 pl-12 rounded-2xl bg-gray-50 border-none outline-none text-sm font-medium"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
              <Filter size={18} />
              Lọc
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Sản phẩm</th>
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Danh mục</th>
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Thương hiệu</th>
                <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-all group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden">
                        <img src={`https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=100&h=100&fit=crop`} alt="product" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 group-hover:text-[#c1121f] transition-colors">Thiết bị đóng cắt v{i+1}</div>
                        <div className="text-xs text-gray-400 font-medium">SKU: TL-00{i+1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">Thiết bị điện</span>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-gray-500">Siemens</td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-white hover:shadow-md rounded-lg text-gray-400 hover:text-blue-500 transition-all">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 hover:bg-white hover:shadow-md rounded-lg text-gray-400 hover:text-red-500 transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-gray-100 flex justify-between items-center">
          <div className="text-xs font-bold text-gray-400">Trang 1 / 10</div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-xl bg-gray-100 text-xs font-bold text-gray-400 cursor-not-allowed">Trước</button>
            <button className="px-4 py-2 rounded-xl bg-[#111] text-white text-xs font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">Sau</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
