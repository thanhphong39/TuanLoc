import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex bg-[#fcfcfc] min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
