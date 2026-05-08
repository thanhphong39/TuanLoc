require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Service = require('../models/Service');
const Project = require('../models/Project');
const Blog = require('../models/Blog');
const { slugify } = require('./slugify');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'tuanloc_electric' });
    console.log('✅ MongoDB Connected');

    // Xóa data cũ
    await Promise.all([
      User.deleteMany({}),
      Category.deleteMany({}),
      Product.deleteMany({}),
      Service.deleteMany({}),
      Project.deleteMany({}),
      Blog.deleteMany({}),
    ]);
    console.log('🗑️  Cleared old data');

    // Tạo admin user
    const admin = await User.create({
      name: 'Admin TuanLoc Electric',
      email: 'tuanlocco@gmail.com',
      password: 'admin8686',
      role: 'admin',
    });
    console.log('👤 Admin created:', admin.email);

    // Tạo categories
    const categories = await Category.insertMany([
      { name: 'Tủ điện', slug: 'tu-dien', type: 'product', icon: 'box' },
      { name: 'Thiết bị đóng cắt', slug: 'thiet-bi-dong-cat', type: 'product', icon: 'zap' },
      { name: 'Hệ thống điều khiển', slug: 'he-thong-dieu-khien', type: 'product', icon: 'settings' },
      { name: 'Máy biến áp', slug: 'may-bien-ap', type: 'product', icon: 'cpu' },
      { name: 'Đèn công nghiệp', slug: 'den-cong-nghiep', type: 'product', icon: 'sun' },
      { name: 'Thiết bị automation', slug: 'thiet-bi-automation', type: 'product', icon: 'activity' },
      { name: 'Điện công nghiệp', slug: 'dien-cong-nghiep', type: 'project' },
      { name: 'Trạm biến áp', slug: 'tram-bien-ap', type: 'project' },
      { name: 'Smart Factory', slug: 'smart-factory', type: 'project' },
      { name: 'Kiến thức điện', slug: 'kien-thuc-dien', type: 'blog' },
      { name: 'Giải pháp tiết kiệm điện', slug: 'giai-phap-tiet-kiem-dien', type: 'blog' },
      { name: 'Xu hướng automation', slug: 'xu-huong-automation', type: 'blog' },
    ]);
    console.log('📂 Categories created:', categories.length);

    // Tạo services
    const services = await Service.insertMany([
      {
        name: 'Thi công hệ thống điện công nghiệp',
        slug: 'thi-cong-he-thong-dien-cong-nghiep',
        shortDescription: 'Thiết kế, lắp đặt và vận hành hệ thống điện công nghiệp hiện đại, an toàn và hiệu quả.',
        description: 'Chúng tôi cung cấp dịch vụ thi công hệ thống điện công nghiệp toàn diện từ khâu khảo sát, thiết kế đến lắp đặt và bàn giao. Đội ngũ kỹ sư giàu kinh nghiệm đảm bảo mọi công trình đạt tiêu chuẩn kỹ thuật cao nhất.',
        icon: 'zap',
        isActive: true,
        isFeatured: true,
        order: 1,
        process: [
          { step: 1, title: 'Khảo sát & Tư vấn', description: 'Khảo sát hiện trạng và tư vấn giải pháp phù hợp' },
          { step: 2, title: 'Thiết kế hệ thống', description: 'Thiết kế bản vẽ kỹ thuật chi tiết' },
          { step: 3, title: 'Thi công lắp đặt', description: 'Thi công chuyên nghiệp theo đúng tiến độ' },
          { step: 4, title: 'Kiểm tra & Bàn giao', description: 'Kiểm tra toàn diện và bàn giao kèm hồ sơ' },
        ],
      },
      {
        name: 'Gia công tủ điện',
        slug: 'gia-cong-tu-dien',
        shortDescription: 'Gia công tủ điện công nghiệp theo yêu cầu với tiêu chuẩn IEC, độ chính xác cao.',
        description: 'Gia công và lắp ráp các loại tủ điện: tủ MCC, tủ MDB, tủ PLC, tủ SCADA, tủ VFD theo yêu cầu đặc thù của từng dự án.',
        icon: 'box',
        isActive: true,
        isFeatured: true,
        order: 2,
      },
      {
        name: 'Thi công trạm biến áp',
        slug: 'thi-cong-tram-bien-ap',
        shortDescription: 'Thiết kế, thi công trạm biến áp trung thế và hạ thế đảm bảo an toàn điện.',
        description: 'Cung cấp trọn gói giải pháp trạm biến áp từ 22kV xuống 0.4kV cho các khu công nghiệp, nhà máy.',
        icon: 'activity',
        isActive: true,
        isFeatured: true,
        order: 3,
      },
      {
        name: 'Hệ thống M&E',
        slug: 'he-thong-me',
        shortDescription: 'Thi công hệ thống cơ điện M&E cho tòa nhà văn phòng, nhà xưởng công nghiệp.',
        description: 'Chúng tôi cung cấp giải pháp M&E toàn diện bao gồm: hệ thống điện, PCCC, HVAC, cấp thoát nước.',
        icon: 'settings',
        isActive: true,
        order: 4,
      },
      {
        name: 'Bảo trì điện nhà máy',
        slug: 'bao-tri-dien-nha-may',
        shortDescription: 'Dịch vụ bảo trì, bảo dưỡng định kỳ hệ thống điện nhà máy 24/7.',
        description: 'Đội ngũ kỹ thuật viên sẵn sàng hỗ trợ 24/7 để đảm bảo hệ thống điện hoạt động liên tục, không gián đoạn sản xuất.',
        icon: 'tool',
        isActive: true,
        order: 5,
      },
      {
        name: 'Smart Factory Solutions',
        slug: 'smart-factory-solutions',
        shortDescription: 'Giải pháp nhà máy thông minh tích hợp IoT, SCADA, MES cho ngành sản xuất 4.0.',
        description: 'Chuyển đổi số nhà máy với hệ thống SCADA, MES, IoT giúp tối ưu hóa sản xuất và tiết kiệm năng lượng.',
        icon: 'cpu',
        isActive: true,
        isFeatured: true,
        order: 6,
      },
      {
        name: 'Hệ thống Automation',
        slug: 'he-thong-automation',
        shortDescription: 'Thiết kế và lập trình hệ thống tự động hóa PLC, HMI, SCADA cho dây chuyền sản xuất.',
        description: 'Tự động hóa dây chuyền sản xuất với PLC Siemens, Mitsubishi, Allen-Bradley. Lập trình HMI, kết nối SCADA.',
        icon: 'sliders',
        isActive: true,
        isFeatured: true,
        order: 7,
      },
      {
        name: 'Tư vấn điện công nghiệp',
        slug: 'tu-van-dien-cong-nghiep',
        shortDescription: 'Tư vấn giải pháp điện toàn diện: thiết kế, lựa chọn thiết bị, tối ưu hóa năng lượng.',
        description: 'Đội ngũ chuyên gia tư vấn giúp doanh nghiệp lựa chọn giải pháp điện tối ưu, tiết kiệm chi phí đầu tư.',
        icon: 'message-circle',
        isActive: true,
        order: 8,
      },
    ]);
    console.log('⚙️  Services created:', services.length);

    // Tạo projects mẫu
    const projects = await Project.insertMany([
      {
        title: 'Hệ thống điện nhà máy Samsung Electronics Việt Nam',
        slug: 'he-thong-dien-nha-may-samsung-electronics-viet-nam',
        category: 'Điện công nghiệp',
        shortDescription: 'Thi công hệ thống điện trung thế và hạ thế cho nhà máy Samsung Electronics với công suất 50MVA.',
        description: 'Dự án thi công hệ thống điện tổng thể cho nhà máy Samsung Electronics Việt Nam tại Bắc Ninh. Hệ thống bao gồm trạm biến áp 110/22kV, tủ MDB, tủ MCC và toàn bộ hệ thống chiếu sáng, tiếp địa chống sét.',
        client: {
          name: 'Samsung Electronics Việt Nam',
          industry: 'Điện tử - Công nghệ',
          location: 'Bắc Ninh, Việt Nam',
        },
        projectInfo: {
          area: '200,000 m²',
          duration: '18 tháng',
          value: '45 tỷ VNĐ',
        },
        isFeatured: true,
        isActive: true,
      },
      {
        title: 'Trạm biến áp 110kV Khu công nghiệp VSIP',
        slug: 'tram-bien-ap-110kv-khu-cong-nghiep-vsip',
        category: 'Trạm biến áp',
        shortDescription: 'Thiết kế và thi công trạm biến áp 110kV cấp điện cho khu công nghiệp VSIP II Bình Dương.',
        description: 'Trạm biến áp 110/22kV, công suất 2x63MVA cấp điện cho toàn bộ khu công nghiệp VSIP II Bình Dương.',
        client: {
          name: 'VSIP Group',
          industry: 'Bất động sản công nghiệp',
          location: 'Bình Dương, Việt Nam',
        },
        projectInfo: {
          duration: '12 tháng',
          value: '120 tỷ VNĐ',
        },
        isFeatured: true,
        isActive: true,
      },
      {
        title: 'Smart Factory Vinfast - Hải Phòng',
        slug: 'smart-factory-vinfast-hai-phong',
        category: 'Smart Factory',
        shortDescription: 'Triển khai hệ thống SCADA, MES và automation cho dây chuyền sản xuất xe điện Vinfast.',
        description: 'Hệ thống Smart Factory tích hợp SCADA, MES, PLC Siemens S7-1500 điều khiển toàn bộ dây chuyền lắp ráp xe điện.',
        client: {
          name: 'VinFast LLC',
          industry: 'Công nghiệp ô tô',
          location: 'Hải Phòng, Việt Nam',
        },
        projectInfo: {
          duration: '24 tháng',
          value: '200 tỷ VNĐ',
        },
        isFeatured: true,
        isActive: true,
      },
    ]);
    console.log('🏗️  Projects created:', projects.length);

    // Tạo products mẫu chuyên nghiệp
    const products = await Product.insertMany([
      {
        name: 'Tủ điện công nghiệp MDB',
        slug: 'tu-dien-cong-nghiep-mdb',
        categoryName: 'Tủ điện',
        shortDescription: 'Tủ phân phối tổng MDB thiết kế theo tiêu chuẩn IEC 61439, độ bền cao, an toàn tuyệt đối.',
        description: 'Tủ điện phân phối tổng MDB (Main Distribution Board) là thành phần quan trọng nhất trong mạng lưới phân phối điện hạ thế. Được thiết kế để bảo vệ hệ thống điện khỏi các sự cố quá tải, ngắn mạch.',
        brand: 'Fixera',
        origin: 'Việt Nam',
        isFeatured: true,
        isActive: true,
        thumbnail: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800',
        galleryImages: [
          'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=800'
        ],
        specifications: [
          { key: 'Điện áp định mức', value: '380V/415V AC' },
          { key: 'Dòng điện định mức', value: 'Lên đến 6300A' },
          { key: 'Cấp bảo vệ', value: 'IP42 - IP54' },
          { key: 'Tiêu chuẩn', value: 'IEC 61439-1/2' }
        ],
      },
      {
        name: 'MCC Panel (Motor Control Center)',
        slug: 'mcc-panel-motor-control-center',
        categoryName: 'Tủ điện',
        shortDescription: 'Trung tâm điều khiển động cơ MCC tích hợp biến tần và khởi động mềm cao cấp.',
        description: 'Tủ điều khiển động cơ MCC (Motor Control Center) dùng để điều khiển và bảo vệ các động cơ công suất lớn trong các nhà máy, xí nghiệp.',
        brand: 'Fixera / Siemens',
        origin: 'Việt Nam',
        isFeatured: true,
        isActive: true,
        thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
        galleryImages: [
          'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
        ],
        specifications: [
          { key: 'Phương thức khởi động', value: 'DOL, Star-Delta, Soft Starter, VFD' },
          { key: 'Công suất điều khiển', value: '0.75kW - 500kW' },
          { key: 'Giao tiếp', value: 'Modbus, Profinet' }
        ],
      },
      {
        name: 'PLC Cabinet (Programmable Logic Controller)',
        slug: 'plc-cabinet-programmable-logic-controller',
        categoryName: 'Hệ thống điều khiển',
        shortDescription: 'Tủ điều khiển lập trình PLC tích hợp HMI, tối ưu hóa quy trình sản xuất tự động.',
        description: 'Tủ điện PLC là trung tâm của hệ thống tự động hóa, thực hiện các thuật toán điều khiển phức tạp thông qua các dòng PLC cao cấp như Siemens S7-1500, Mitsubishi iQ-R.',
        brand: 'Siemens / Mitsubishi',
        origin: 'Đức / Nhật Bản',
        isFeatured: true,
        isActive: true,
        thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        galleryImages: [
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
        ],
        specifications: [
          { key: 'Dòng PLC', value: 'S7-1200/1500, FX5U, Q-Series' },
          { key: 'Màn hình HMI', value: '7 inch - 15 inch Touch' },
          { key: 'Số lượng I/O', value: 'Tùy chỉnh theo dự án' }
        ],
      },
      {
        name: 'Trạm biến áp (Substation)',
        slug: 'tram-bien-ap-substation',
        categoryName: 'Máy biến áp',
        shortDescription: 'Giải pháp trạm biến áp trọn gói từ 22kV đến 110kV cho khu công nghiệp.',
        description: 'Cung cấp và lắp đặt trạm biến áp kiểu bệ, kiểu treo hoặc trạm Kios hợp bộ. Đảm bảo cung cấp nguồn điện ổn định và an toàn cho nhà máy.',
        brand: 'ABB / THIBIDI',
        origin: 'Thụy Sĩ / Việt Nam',
        isFeatured: true,
        isActive: true,
        thumbnail: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
        galleryImages: [
          'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800'
        ],
        specifications: [
          { key: 'Công suất', value: '250kVA - 5000kVA' },
          { key: 'Cấp điện áp', value: '22kV/0.4kV' },
          { key: 'Kiểu trạm', value: 'Kios, Giàn, Nền' }
        ],
      },
      {
        name: 'Smart Factory Integration',
        slug: 'smart-factory-integration',
        categoryName: 'Smart Factory',
        shortDescription: 'Giải pháp nhà máy thông minh tích hợp IoT và quản lý năng lượng tập trung.',
        description: 'Tối ưu hóa sản xuất với hệ thống giám sát thời gian thực, phân tích dữ liệu lớn và bảo trì dự báo.',
        brand: 'Fixera Smart',
        origin: 'Việt Nam',
        isFeatured: true,
        isActive: true,
        thumbnail: 'https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?auto=format&fit=crop&q=80&w=800',
        galleryImages: [
          'https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?auto=format&fit=crop&q=80&w=800'
        ],
        specifications: [
          { key: 'Nền tảng', value: 'Cloud-based / On-premise' },
          { key: 'Kết nối', value: 'LoRaWAN, Zigbee, WiFi, Industrial Ethernet' },
          { key: 'Tính năng', value: 'OEE Tracking, Energy Management' }
        ],
      },
      {
        name: 'SCADA System Dashboard',
        slug: 'scada-system-dashboard',
        categoryName: 'Hệ thống điều khiển',
        shortDescription: 'Hệ thống giám sát và thu thập dữ liệu SCADA chuyên nghiệp cho nhà máy.',
        description: 'Giao diện trực quan hóa quy trình sản xuất, cảnh báo sự cố tức thời và lưu trữ dữ liệu vận hành lịch sử.',
        brand: 'Fixera SCADA',
        origin: 'Việt Nam',
        isFeatured: false,
        isActive: true,
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        galleryImages: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
        ],
        specifications: [
          { key: 'Phần mềm', value: 'WinCC, Ignition, Wonderware' },
          { key: 'Số lượng Tag', value: 'Không giới hạn' },
          { key: 'Báo cáo', value: 'Tự động qua Email/SMS' }
        ],
      },
      {
        name: 'ATS Cabinet (Automatic Transfer Switch)',
        slug: 'ats-cabinet-automatic-transfer-switch',
        categoryName: 'Tủ điện',
        shortDescription: 'Tủ chuyển nguồn tự động ATS, đảm bảo nguồn điện liên tục khi có sự cố lưới điện.',
        description: 'Tủ ATS tự động chuyển đổi giữa nguồn điện lưới và nguồn máy phát điện dự phòng chỉ trong vài giây.',
        brand: 'Fixera / Socomec',
        origin: 'Việt Nam / Pháp',
        isFeatured: false,
        isActive: true,
        thumbnail: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=800',
        galleryImages: [
          'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=800'
        ],
        specifications: [
          { key: 'Thời gian chuyển mạch', value: '< 2 giây' },
          { key: 'Bộ điều khiển', value: 'Deepsea, Datakom' },
          { key: 'Công suất', value: '100A - 3200A' }
        ],
      },
      {
        name: 'Solar Electrical Cabinet',
        slug: 'solar-electrical-cabinet',
        categoryName: 'Tủ điện',
        shortDescription: 'Tủ điện tích hợp hệ thống năng lượng mặt trời áp mái cho doanh nghiệp.',
        description: 'Tủ điện AC/DC chuyên dụng cho hệ thống Solar, tích hợp bảo vệ sét lan truyền và thiết kế tối ưu hóa hiệu suất Inverter.',
        brand: 'Fixera Solar',
        origin: 'Việt Nam',
        isFeatured: true,
        isActive: true,
        thumbnail: 'https://images.unsplash.com/photo-1509391366360-fe5bb584852a?auto=format&fit=crop&q=80&w=800',
        galleryImages: [
          'https://images.unsplash.com/photo-1509391366360-fe5bb584852a?auto=format&fit=crop&q=80&w=800'
        ],
        specifications: [
          { key: 'Chống sét', value: 'SPD Type II' },
          { key: 'Khung vỏ', value: 'Thép tĩnh điện chống ăn mòn' },
          { key: 'Tiêu chuẩn', value: 'IEC 62109' }
        ],
      },
    ]);
    console.log('📦 Products created:', products.length);

    // Tạo blogs mẫu
    const blogs = await Blog.insertMany([
      {
        title: 'Xu hướng Smart Factory 4.0 trong ngành công nghiệp Việt Nam 2025',
        slug: 'xu-huong-smart-factory-4-0-trong-nganh-cong-nghiep-viet-nam-2025',
        category: 'Xu hướng automation',
        excerpt: 'Cuộc cách mạng công nghiệp 4.0 đang thay đổi hoàn toàn cách vận hành nhà máy sản xuất tại Việt Nam...',
        content: `<h2>Smart Factory - Tương lai của sản xuất công nghiệp</h2>
<p>Cuộc cách mạng công nghiệp 4.0 đang mang đến những thay đổi căn bản trong cách chúng ta vận hành các nhà máy sản xuất. Khái niệm "Smart Factory" hay "Nhà máy thông minh" không còn chỉ là lý thuyết mà đang được triển khai thực tế tại nhiều doanh nghiệp lớn ở Việt Nam.</p>
<h3>Smart Factory là gì?</h3>
<p>Smart Factory là môi trường sản xuất tích hợp các công nghệ tiên tiến như IoT (Internet of Things), AI (Trí tuệ nhân tạo), Big Data và Cloud Computing để tạo ra một hệ thống sản xuất thông minh, linh hoạt và hiệu quả cao.</p>
<h3>Lợi ích của Smart Factory</h3>
<ul>
<li>Tăng năng suất lên 25-30%</li>
<li>Giảm chi phí vận hành 20-25%</li>
<li>Giảm tỷ lệ phế phẩm xuống dưới 1%</li>
<li>Tiết kiệm năng lượng 15-20%</li>
</ul>`,
        author: 'Kỹ sư Nguyễn Tuấn Lộc',
        tags: ['smart factory', 'automation', 'industry 4.0', 'IoT'],
        isPublished: true,
        publishedAt: new Date(),
        isFeatured: true,
        viewCount: 1250,
      },
      {
        title: 'Hướng dẫn lựa chọn máy biến áp phù hợp cho nhà máy',
        slug: 'huong-dan-lua-chon-may-bien-ap-phu-hop-cho-nha-may',
        category: 'Kiến thức điện',
        excerpt: 'Lựa chọn máy biến áp đúng công suất và chủng loại là yếu tố quan trọng đảm bảo hoạt động ổn định cho hệ thống điện nhà máy...',
        content: `<h2>Hướng dẫn toàn diện về lựa chọn máy biến áp công nghiệp</h2>
<p>Việc lựa chọn máy biến áp phù hợp không chỉ đảm bảo hiệu quả hoạt động mà còn ảnh hưởng trực tiếp đến độ an toàn và chi phí vận hành lâu dài của nhà máy.</p>
<h3>Các thông số cần xem xét</h3>
<p>Khi lựa chọn máy biến áp, bạn cần đánh giá các thông số sau:</p>
<ol>
<li><strong>Công suất (kVA):</strong> Tính toán tổng tải tiêu thụ của nhà máy</li>
<li><strong>Điện áp:</strong> Điện áp đầu vào và đầu ra theo yêu cầu</li>
<li><strong>Tổ đấu dây:</strong> Dyn11, YNyn0... phù hợp với hệ thống</li>
<li><strong>Loại làm mát:</strong> Dầu (ONAN, ONAF) hay khô</li>
</ol>`,
        author: 'Kỹ sư Trần Minh Đức',
        tags: ['máy biến áp', 'điện công nghiệp', 'kỹ thuật điện'],
        isPublished: true,
        publishedAt: new Date(),
        isFeatured: true,
        viewCount: 892,
      },
      {
        title: '5 giải pháp tiết kiệm điện hiệu quả cho nhà máy sản xuất',
        slug: '5-giai-phap-tiet-kiem-dien-hieu-qua-cho-nha-may-san-xuat',
        category: 'Giải pháp tiết kiệm điện',
        excerpt: 'Chi phí điện năng chiếm từ 15-30% tổng chi phí sản xuất. Áp dụng các giải pháp tiết kiệm điện giúp doanh nghiệp tiết kiệm hàng tỷ đồng mỗi năm...',
        content: `<h2>Tiết kiệm điện - Tăng lợi thế cạnh tranh</h2>
<p>Trong bối cảnh giá điện ngày càng tăng, việc tối ưu hóa tiêu thụ điện năng đang trở thành ưu tiên hàng đầu của các doanh nghiệp sản xuất tại Việt Nam.</p>
<h3>1. Lắp đặt biến tần (VFD) cho động cơ</h3>
<p>Biến tần điều khiển tốc độ động cơ theo nhu cầu thực tế, giúp tiết kiệm 30-60% năng lượng so với phương pháp khởi động trực tiếp.</p>
<h3>2. Tụ bù cos phi</h3>
<p>Nâng hệ số công suất cos φ lên 0.95 giúp giảm công suất phản kháng, tiết kiệm 10-15% hóa đơn tiền điện.</p>`,
        author: 'Chuyên gia năng lượng Lê Văn Phong',
        tags: ['tiết kiệm điện', 'biến tần', 'tụ bù', 'năng lượng'],
        isPublished: true,
        publishedAt: new Date(),
        viewCount: 2103,
      },
    ]);
    console.log('📝 Blogs created:', blogs.length);

    console.log('\n✅ Seed data completed!');
    console.log('📧 Admin login: admin@tuanlocelectric.com');
    console.log('🔑 Admin password: admin123456');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
};

seedData();
