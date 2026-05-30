require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./src/models/Product");

const BASE_IMG = "https://khavitech.com/uploads/products/";

const products = [
  // ─── MÁY CẮT HẠ THẾ ────────────────────────────────────────────────────────
  {
    name: "Máy Cắt Không Khí ACB Mitsubishi AE-SW",
    category: "Máy cắt hạ thế",
    badge: "HÀNG SẴN KHO",
    description:
      "Máy cắt không khí ACB dòng AE-SW của Mitsubishi bảo vệ quá tải và dòng rò trong các hệ thống điện công nghiệp quy mô lớn. 4 kích cỡ frame đáp ứng đa dạng nhu cầu từ vừa đến lớn. Thương hiệu: Mitsubishi.",
    features: [
      "4 kích cỡ frame: AE630-SW đến AE6300-SW",
      "Khả năng ngắn mạch: 65kA, 85kA, 130kA",
      "Điện áp Ue: 690V AC / Ui: 1000V",
      "Loại 3 cực và 4 cực (3P/4P)",
      "Kiểu cố định hoặc rút ra được",
      "Tiêu chuẩn IEC/EN 60947-2",
    ],
    images: [BASE_IMG + "134-may-cat-khong-khi-acb.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Compact NS Drawout / With Drawout",
    category: "Máy cắt hạ thế",
    badge: "HÀNG SẴN KHO",
    description:
      "Máy cắt Compact NS dạng rút ra của Schneider Electric dành cho tủ phân phối trung thế và hạ thế. Kiểu rút ra cho phép bảo trì dễ dàng không cần ngắt toàn hệ thống. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 630A đến 3200A",
      "Điện áp làm việc: lên đến 690V AC",
      "Relay bảo vệ Micrologic tích hợp",
      "Kiểu lắp rút ra (Drawout) tiện bảo trì",
      "Khả năng ngắn mạch cao",
      "Tiêu chuẩn IEC 60947-2",
    ],
    images: [BASE_IMG + "114-compact-ns-drawout-with-drawout.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Compact NS 630–3200A",
    category: "Máy cắt hạ thế",
    badge: "HÀNG SẴN KHO",
    description:
      "Máy cắt Compact NS 630–3200A của Schneider Electric là thiết bị bảo vệ cao cấp trong hệ thống phân phối điện hạ thế. Phù hợp trạm biến áp, nhà máy và tòa nhà thương mại lớn. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 630A đến 3200A",
      "Điện áp: 690V AC / 250V DC",
      "Khả năng ngắn mạch: đến 150kA tại 415V",
      "Relay Micrologic với nhiều tính năng bảo vệ",
      "Kiểu cố định, cắm vào hoặc rút ra",
      "Giao tiếp Modbus/Ethernet (tùy chọn)",
    ],
    images: [BASE_IMG + "113-compact-ns-630-3200a.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Easypact CVS Fixed B/F/N",
    category: "Máy cắt hạ thế",
    badge: "",
    description:
      "Máy cắt Easypact CVS Fixed dòng B/F/N của Schneider Electric bảo vệ mạch điện trong hệ thống phân phối hạ thế. Thiết kế gọn nhẹ, lắp cố định. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 100A đến 250A",
      "Điện áp: 690V AC",
      "Ngắn mạch: 25kA (B), 36kA (F), 50kA (N) tại 415V",
      "Số cực: 3P và 4P",
      "Relay nhiệt điện tử chỉnh được",
      "Tiêu chuẩn IEC 60947-2",
    ],
    images: [BASE_IMG + "110-easypact-cvs-fixed-b-f-n-type.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Easypact NSX Fixed B/F",
    category: "Máy cắt hạ thế",
    badge: "",
    description:
      "Máy cắt Easypact NSX Fixed B/F của Schneider Electric là giải pháp bảo vệ mạch hiệu suất cao cho hệ thống phân phối công nghiệp. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 16A đến 630A",
      "Điện áp: 690V AC",
      "Ngắn mạch: 25kA (B), 36kA (F) tại 415V",
      "Số cực: 3P và 4P",
      "Relay bảo vệ TMD chỉnh được",
      "Tiêu chuẩn IEC 60947-2",
    ],
    images: [BASE_IMG + "111-easypact-nsx-fixed-b-f-type.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Easypact NSX Fixed N/H",
    category: "Máy cắt hạ thế",
    badge: "",
    description:
      "Máy cắt Easypact NSX Fixed N/H của Schneider Electric có khả năng ngắn mạch cao hơn, dành cho ứng dụng gần nguồn điện. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 16A đến 630A",
      "Điện áp: 690V AC",
      "Ngắn mạch: 50kA (N), 70kA (H) tại 415V",
      "Số cực: 3P và 4P",
      "Relay TMA/TMD/Micrologic",
      "Tiêu chuẩn IEC 60947-2 và UL 489",
    ],
    images: [BASE_IMG + "112-easypact-nsx-fixed-n-h-type.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Easypact EZC 400/630 N-H",
    category: "Máy cắt hạ thế",
    badge: "",
    description:
      "Máy cắt Easypact EZC400/630 N-H của Schneider Electric là thiết bị bảo vệ dòng cao cho hệ thống phân phối điện quy mô vừa đến lớn. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 400A và 630A",
      "Điện áp: 690V AC",
      "Ngắn mạch: 50kA (N), 70kA (H) tại 415V",
      "Số cực: 3P và 4P",
      "Relay nhiệt điện từ chỉnh được",
      "Tiêu chuẩn IEC 60947-2",
    ],
    images: [BASE_IMG + "109-easypact-ezc400-630n-h.png"],
    supportPhone: "0985352345",
  },
  {
    name: "Acti9 iC60H",
    category: "Máy cắt hạ thế",
    badge: "HÀNG SẴN KHO",
    description:
      "Cầu dao tự động miniature Acti9 iC60H của Schneider Electric với khả năng ngắn mạch cao, dùng cho tủ phân phối điện dân dụng và thương mại. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 1A đến 63A",
      "Khả năng ngắn mạch: 10kA tại 415V",
      "Đặc tính B, C, D",
      "Số cực: 1P, 2P, 3P, 4P",
      "Kích thước nhỏ gọn, lắp thanh DIN",
      "Tiêu chuẩn IEC 60947-2 / IEC 60898",
    ],
    images: [BASE_IMG + "102-mcb-ic60h.gif"],
    supportPhone: "0985352345",
  },
  {
    name: "Acti9 Surge Arrester (Chống Sét Lan Truyền)",
    category: "Máy cắt hạ thế",
    badge: "",
    description:
      "Thiết bị chống sét lan truyền Acti9 của Schneider Electric bảo vệ các thiết bị điện tử và điện khỏi xung điện áp quá cao do sét đánh. Thương hiệu: Schneider Electric.",
    features: [
      "Điện áp định mức: 230/400V AC",
      "Dòng xung sét: Up đến 40kA (8/20μs)",
      "Mức bảo vệ điện áp: ≤1.5kV",
      "Loại Type 2 theo IEC 61643-11",
      "Chỉ thị trạng thái hoạt động",
      "Lắp trên thanh DIN 35mm",
    ],
    images: [BASE_IMG + "106-acti9-surge-arrester.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "CB Bảo Vệ Quá Tải & Dòng Rò RCBO Mitsubishi",
    category: "Máy cắt hạ thế",
    badge: "HÀNG SẴN KHO",
    description:
      "RCBO của Mitsubishi kết hợp chức năng bảo vệ quá tải (MCB) và bảo vệ dòng rò (RCCB) trong một thiết bị, bảo vệ toàn diện cho mạch điện. Thương hiệu: Mitsubishi.",
    features: [
      "Dòng định mức: 6A đến 32A",
      "Dòng rò tác động: 30mA",
      "Điện áp: 230V AC",
      "Kết hợp MCB + RCCB trong 1 thiết bị",
      "Bảo vệ quá tải, ngắn mạch và dòng rò đất",
      "Tiêu chuẩn IEC 61009",
    ],
    images: [BASE_IMG + "127-cb.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "CB Chống Dòng Rò RCCB Mitsubishi",
    category: "Máy cắt hạ thế",
    badge: "HÀNG SẴN KHO",
    description:
      "RCCB của Mitsubishi bảo vệ an toàn điện bằng cách phát hiện và ngắt mạch khi có dòng rò đất, bảo vệ người dùng khỏi điện giật. Thương hiệu: Mitsubishi.",
    features: [
      "Dòng định mức: 25A đến 100A",
      "Dòng rò tác động: 30mA và 100mA",
      "Điện áp: 230/400V AC",
      "Loại AC và A (phát hiện DC)",
      "Số cực: 2P và 4P",
      "Tiêu chuẩn IEC 61008",
    ],
    images: [BASE_IMG + "126-cb-ch.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "MCCB Bảo Vệ Quá Tải & Dòng Rò Mitsubishi",
    category: "Máy cắt hạ thế",
    badge: "HÀNG SẴN KHO",
    description:
      "MCCB kết hợp bảo vệ dòng rò của Mitsubishi dành cho phân phối điện công nghiệp và thương mại, tích hợp earth leakage relay. Thương hiệu: Mitsubishi.",
    features: [
      "Dòng định mức: 30A đến 400A",
      "Dòng rò tác động: 30mA đến 3A",
      "Điện áp: 415V AC 3 pha",
      "Kết hợp MCCB và earth leakage trong 1 thiết bị",
      "Số cực: 3P và 4P",
      "Tiêu chuẩn IEC 60947-2",
    ],
    images: [BASE_IMG + "129-mccb-bao-ve-qua-tai-dong-ro.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "MCCB Dạng Khối Mitsubishi",
    category: "Máy cắt hạ thế",
    badge: "HÀNG SẴN KHO",
    description:
      "MCCB dạng khối của Mitsubishi là loại máy cắt đúc khuôn tiêu chuẩn dùng rộng rãi trong tủ phân phối công nghiệp và tòa nhà. Thương hiệu: Mitsubishi.",
    features: [
      "Dòng định mức: 15A đến 800A",
      "Điện áp: 415V AC 3 pha",
      "Khả năng ngắn mạch: 25kA đến 85kA",
      "Số cực: 2P, 3P, 4P",
      "Tích hợp relay nhiệt điện tử chỉnh được",
      "Tiêu chuẩn IEC 60947-2",
    ],
    images: [BASE_IMG + "133-mccb-dang-khoi.jpg"],
    supportPhone: "0985352345",
  },

  // ─── BIẾN TẦN ────────────────────────────────────────────────────────────────
  {
    name: "Biến Tần Altivar ATV32",
    category: "Biến tần",
    badge: "HÀNG SẴN KHO",
    description:
      "Biến tần Altivar ATV32 của Schneider Electric điều khiển tốc độ động cơ không đồng bộ và đồng bộ 0.18kW–15kW. Phù hợp băng tải, quạt, bơm, máy đóng gói. Thương hiệu: Schneider Electric.",
    features: [
      "Công suất: 0.18kW đến 15kW",
      "Điện áp vào: 200–500V AC, 50/60Hz",
      "Tần số ra: 0.1Hz đến 599Hz",
      "Điều khiển cả động cơ không đồng bộ và đồng bộ",
      "Modbus RTU tích hợp",
      "Bảo vệ quá tải, ngắn mạch, quá nhiệt",
    ],
    images: [BASE_IMG + "119-altivar-32.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Biến Tần Altivar ATV61",
    category: "Biến tần",
    badge: "HÀNG SẴN KHO",
    description:
      "Biến tần Altivar ATV61 của Schneider Electric điều khiển động cơ công suất lớn 0.75kW–630kW. Tích năng tiết kiệm năng lượng vượt trội. Thương hiệu: Schneider Electric.",
    features: [
      "Công suất: 0.75kW đến 630kW",
      "Cấp bảo vệ: IP20 và IP54",
      "Bộ lọc EMC tích hợp hoặc ngoài",
      "Tiết kiệm năng lượng tự động",
      "Giao tiếp Modbus, CANopen, Profibus, Ethernet",
      "Ứng dụng: bơm, quạt công nghiệp lớn",
    ],
    images: [BASE_IMG + "120-altivar-61.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Biến Tần Altivar ATV312",
    category: "Biến tần",
    badge: "",
    description:
      "Biến tần Altivar ATV312 của Schneider Electric là bộ biến tần nhỏ gọn kinh tế dành cho máy đơn giản và tải thay đổi. Thương hiệu: Schneider Electric.",
    features: [
      "Công suất: 0.18kW đến 15kW",
      "Điện áp: 200–240V và 380–500V AC",
      "Điều khiển V/Hz và vector dòng",
      "Bàn phím hiển thị LED tích hợp",
      "Modbus RTU tùy chọn",
      "Lắp đặt nhanh, cài đặt đơn giản",
    ],
    images: [BASE_IMG + "118-altivar-312.gif"],
    supportPhone: "0985352345",
  },

  // ─── KHỞI ĐỘNG MỀM ──────────────────────────────────────────────────────────
  {
    name: "Bộ Khởi Động Mềm Altistart ATS22",
    category: "Khởi động mềm",
    badge: "",
    description:
      "Altistart ATS22 của Schneider Electric khởi động và dừng động cơ êm ái, giảm xung dòng và ứng suất cơ học. Phù hợp bơm, quạt, băng tải. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 17A đến 105A",
      "Điện áp: 208–600V AC, 50/60Hz",
      "Kiểm soát momen khởi động êm ái",
      "Bảo vệ nhiệt động cơ điện tử",
      "Chức năng dừng mềm (soft stop)",
      "Giao tiếp Modbus RTU (tùy chọn)",
    ],
    images: [BASE_IMG + "123-altistart-22.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Bộ Khởi Động Mềm Altistart ATS48",
    category: "Khởi động mềm",
    badge: "HÀNG SẴN KHO",
    description:
      "Altistart ATS48 của Schneider Electric là khởi động mềm công suất lớn 17A–1200A, tích hợp nhiều giao thức truyền thông. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 17A đến 1200A",
      "Điện áp: 220V AC và 415V AC",
      "Nhiều giao thức truyền thông",
      "Bảo vệ quá tải, mất pha, mất đối xứng",
      "Bypass tự động sau khởi động",
      "Ứng dụng: bơm, máy nén, băng tải lớn",
    ],
    images: [BASE_IMG + "124-altistart-48.jpg"],
    supportPhone: "0985352345",
  },

  // ─── CONTACTOR & RELAY ───────────────────────────────────────────────────────
  {
    name: "Contactor LC1D (Khởi Động Từ)",
    category: "Contactor & Relay",
    badge: "HÀNG SẴN KHO",
    description:
      "Contactor LC1D của Schneider Electric điều khiển động cơ lên đến 75kW AC-3. Độ bền cơ học đến 20 triệu lần đóng/cắt. Thương hiệu: Schneider Electric.",
    features: [
      "Công suất: lên đến 75kW (AC-3)",
      "Tiếp điểm phụ: 1NO + 1NC",
      "Độ bền: đến 20 triệu lần (9A–38A)",
      "Cuộn dây AC, DC và DC tiêu thụ thấp",
      "Mặt che chống bụi, chống tiếp xúc",
      "Điện áp cuộn dây: 24V–660V AC/DC",
    ],
    images: [BASE_IMG + "115-contactor-lc1d.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Contactor LC1F (Khởi Động Từ Công Suất Lớn)",
    category: "Contactor & Relay",
    badge: "HÀNG SẴN KHO",
    description:
      "Contactor LC1F của Schneider Electric điều khiển động cơ 90kW–500kW, lý tưởng cho công nghiệp nặng, lò nung, bơm lớn. Thương hiệu: Schneider Electric.",
    features: [
      "Dòng định mức: 115A đến 800A",
      "Công suất: 90kW đến 500kW (AC-3, 400V)",
      "Cấp bảo vệ: IP20 / IP40",
      "Tiếp điểm phụ: 2NO + 2NC",
      "Điện áp cuộn dây: 24V–600V AC/DC",
      "Tiêu chuẩn IEC/EN 60947-4-1",
    ],
    images: [BASE_IMG + "116-contactor-lc1f.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "TeSys Magnetic Motor CB",
    category: "Contactor & Relay",
    badge: "",
    description:
      "TeSys Magnetic Motor CB của Schneider Electric là cầu dao tự động từ tính bảo vệ động cơ khỏi ngắn mạch, dùng kết hợp với khởi động từ. Thương hiệu: Schneider Electric.",
    features: [
      "Bảo vệ ngắn mạch cho động cơ",
      "Dòng ngắt từ: 5–15 × In (chỉnh được)",
      "Dòng định mức: 0.1A đến 32A",
      "Phối hợp với khởi động từ TeSys",
      "Số cực: 3P",
      "Tiêu chuẩn IEC 60947-4-1",
    ],
    images: [BASE_IMG + "122-tesys-magnetic-motor-cb.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Contactor SN Mitsubishi",
    category: "Contactor & Relay",
    badge: "HÀNG SẴN KHO",
    description:
      "Contactor SN của Mitsubishi là khởi động từ công suất lớn dùng cho điều khiển động cơ trong môi trường công nghiệp khắc nghiệt. Thương hiệu: Mitsubishi.",
    features: [
      "Dòng định mức: 80A đến 800A",
      "Điện áp tải: lên đến 690V AC",
      "Cuộn dây AC/DC đa dạng điện áp",
      "Tiếp điểm phụ tích hợp",
      "Thiết kế chắc chắn, độ bền cao",
      "Tiêu chuẩn IEC 60947-4-1",
    ],
    images: [BASE_IMG + "131-contactor-sn.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Relay Nhiệt TH Mitsubishi",
    category: "Contactor & Relay",
    badge: "HÀNG SẴN KHO",
    description:
      "Relay nhiệt TH của Mitsubishi bảo vệ động cơ khỏi quá tải nhiệt, dùng phối hợp với contactor. Chỉnh dòng tác động theo đặc tính động cơ. Thương hiệu: Mitsubishi.",
    features: [
      "Dải chỉnh dòng: 0.1A đến 800A",
      "Thời gian tác động theo IEC 60947-4-1",
      "Tiếp điểm phụ: 1NO + 1NC",
      "Nút reset thủ công và tự động",
      "Bảo vệ mất pha (3P)",
      "Phối hợp với contactor Mitsubishi",
    ],
    images: [BASE_IMG + "132-relay-nhiet-th.jpg"],
    supportPhone: "0985352345",
  },

  // ─── PLC & TỰ ĐỘNG HÓA ──────────────────────────────────────────────────────
  {
    name: "PLC MELSEC Q Series Mitsubishi",
    category: "PLC & Tự động hóa",
    badge: "HÀNG SẴN KHO",
    description:
      "PLC MELSEC Q của Mitsubishi tích hợp 4 loại điều khiển: tuần tự, quá trình, chuyển động và thông tin trong một hệ thống. Thương hiệu: Mitsubishi.",
    features: [
      "Tích hợp 4 loại điều khiển trong 1 hệ thống",
      "CPU tốc độ cao, chu kỳ quét nhanh",
      "Hỗ trợ CC-Link, Ethernet, MELSECNET/H",
      "Bộ nhớ chương trình đến 252K bước",
      "Tối đa 4096 điểm I/O",
      "Tiêu chuẩn IEC 61131-3",
    ],
    images: [BASE_IMG + "135-plc-q-series.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Siemens S7-1200 CPU 1214C DC/DC/Relay",
    category: "PLC & Tự động hóa",
    badge: "HÀNG SẴN KHO",
    description:
      "PLC Siemens SIMATIC S7-1200 CPU 1214C (6ES7214-1HE30-0XB0) là bộ điều khiển compact với 14 DI và 10 DO relay. Thương hiệu: Siemens.",
    features: [
      "14 đầu vào số (DI) 24V DC",
      "10 đầu ra relay (DO) 2A",
      "2 đầu vào tương tự (AI) 0–10V DC",
      "Nguồn cấp: 20.4–28.8V DC",
      "Bộ nhớ: 100KB chương trình, 4MB dữ liệu",
      "Cổng PROFINET/Ethernet tích hợp",
    ],
    images: [BASE_IMG + "144-6es7214-1he30-0xb0.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Siemens S7-1500 Module DI 16×24V DC",
    category: "PLC & Tự động hóa",
    badge: "",
    description:
      "Module đầu vào số S7-1500 (6ES7521-1BH00-0AB0) của Siemens với 16 kênh DI 24V DC cho hệ thống điều khiển tự động hóa công nghiệp. Thương hiệu: Siemens.",
    features: [
      "16 đầu vào số (DI) 24V DC",
      "Thời gian phản hồi: 0.05ms đến 20ms",
      "Chẩn đoán kênh tích hợp",
      "Hỗ trợ đếm xung tốc độ cao",
      "Kết nối PROFIBUS/PROFINET",
      "Tiêu chuẩn IEC 61131-2",
    ],
    images: [BASE_IMG + "149-6es7521-1bh00-0ab0.jpg"],
    supportPhone: "0985352345",
  },

  // ─── ENCODER & CẢM BIẾN ─────────────────────────────────────────────────────
  {
    name: "Encoder E50S8-1024-3-T-24 Autonics",
    category: "Encoder & Cảm biến",
    badge: "",
    description:
      "Encoder quang học E50S8-1024-3-T-24 của Autonics đo tốc độ và vị trí với độ phân giải 1024 xung/vòng, dùng cho servo và CNC. Thương hiệu: Autonics.",
    features: [
      "Độ phân giải: 1024 PPR",
      "Đường kính trục: 8mm",
      "Đầu ra: 3 kênh A, B, Z (NPN/PNP)",
      "Điện áp: 5–24V DC",
      "Tốc độ phản hồi: 100kHz",
      "Cấp bảo vệ: IP50",
    ],
    images: [BASE_IMG + "212-encoder-e50s8-1024-3-t-24.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Encoder S68A-15 LS Mecapion",
    category: "Encoder & Cảm biến",
    badge: "",
    description:
      "Encoder trục đặc S68A-15 của LS Mecapion là thiết bị mã hóa vòng quay độ chính xác cao cho các ứng dụng tự động hóa và đo lường. Thương hiệu: LS Mecapion.",
    features: [
      "Trục đặc (solid shaft) đường kính tiêu chuẩn",
      "Đầu ra: 15 chân (D-Sub 15P)",
      "Đầu ra tín hiệu: line driver",
      "Độ phân giải: đến 2048 PPR",
      "Điện áp: 5V DC",
      "Tiêu chuẩn IEC 60529 IP52",
    ],
    images: [BASE_IMG + "162-encoder-s68a-15.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Encoder H42-8 LS Mecapion (Trục Âm)",
    category: "Encoder & Cảm biến",
    badge: "",
    description:
      "Encoder trục âm H42-8 (hollow shaft) của LS Mecapion gắn trực tiếp lên trục động cơ mà không cần khớp nối, giảm lỗi lắp đặt. Thương hiệu: LS Mecapion.",
    features: [
      "Trục âm (hollow shaft) đường kính 8mm",
      "Kích thước nhỏ gọn Ø42mm",
      "Đầu ra: line driver hoặc open collector",
      "Độ phân giải: 100 đến 2048 PPR",
      "Điện áp: 5–12V DC",
      "Cấp bảo vệ: IP52",
    ],
    images: [BASE_IMG + "156-encoder-h88a-18.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Encoder H60-12.7 LS Mecapion (Trục Âm)",
    category: "Encoder & Cảm biến",
    badge: "",
    description:
      "Encoder trục âm H60-12.7 của LS Mecapion có đường kính trục 12.7mm, phù hợp cho servo motor và hệ thống CNC công nghiệp. Thương hiệu: LS Mecapion.",
    features: [
      "Trục âm (hollow shaft) đường kính 12.7mm",
      "Kích thước Ø60mm",
      "Đầu ra: line driver (RS-422)",
      "Độ phân giải: lên đến 4096 PPR",
      "Điện áp: 5V DC",
      "Cấp bảo vệ: IP52",
    ],
    images: [BASE_IMG + "158-encoder-h60-12-7.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Cảm Biến Quang BPS3M-TDT Autonics",
    category: "Encoder & Cảm biến",
    badge: "",
    description:
      "Cảm biến quang miniature BPS3M-TDT của Autonics là loại thu-phát song song nhỏ gọn, dùng phát hiện vật thể nhỏ trong không gian hẹp. Thương hiệu: Autonics.",
    features: [
      "Khoảng cách phát hiện: 0–700mm",
      "Loại khuếch đại: thu-phát song song",
      "Đầu ra: NPN/PNP tùy chọn",
      "Điện áp: 12–24V DC",
      "Kết nối: cáp trực tiếp",
      "Cấp bảo vệ: IP67",
    ],
    images: [BASE_IMG + "198-cam-bien-quang-bps3m-tdt.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Cảm Biến Quang BJ10M-TDT Autonics",
    category: "Encoder & Cảm biến",
    badge: "",
    description:
      "Cảm biến quang BJ10M-TDT của Autonics có khoảng cách phát hiện đến 10m, dạng cột hình trụ M18 phổ biến trong tự động hóa sản xuất. Thương hiệu: Autonics.",
    features: [
      "Khoảng cách phát hiện: lên đến 10m",
      "Hình dạng: trụ M18",
      "Đầu ra: NPN/PNP tùy chọn",
      "Điện áp: 12–24V DC",
      "Chống nhiễu ánh sáng môi trường",
      "Cấp bảo vệ: IP67",
    ],
    images: [BASE_IMG + "202-cam-bien-quang-bj10m-tdt1-2.jpg"],
    supportPhone: "0985352345",
  },

  // ─── NGUỒN XUNG ─────────────────────────────────────────────────────────────
  {
    name: "Nguồn Xung 1 Pha Connectwell",
    category: "Nguồn xung",
    badge: "",
    description:
      "Bộ nguồn xung 1 pha của Connectwell chuyển đổi AC sang 24V DC ổn định cho thiết bị điều khiển công nghiệp. Thương hiệu: Connectwell.",
    features: [
      "Điện áp vào: 85–264V AC (1 pha)",
      "Điện áp ra: 24V DC",
      "Dòng ra: 2.5A đến 10A (tùy model)",
      "Hiệu suất: ≥85%",
      "Bảo vệ quá dòng, quá áp, ngắn mạch",
      "Lắp thanh DIN 35mm, cấp bảo vệ IP20",
    ],
    images: [BASE_IMG + "191-nguon-xung-1-pha.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Nguồn Xung 2 Pha & 3 Pha Connectwell",
    category: "Nguồn xung",
    badge: "",
    description:
      "Bộ nguồn xung 2 pha và 3 pha của Connectwell cung cấp 24V DC cho hệ thống công nghiệp quy mô lớn với khả năng chịu tải cao. Thương hiệu: Connectwell.",
    features: [
      "Điện áp vào: 2 pha 200–480V / 3 pha 380–480V AC",
      "Điện áp ra: 24V DC",
      "Dòng ra: 10A đến 40A",
      "Hiệu suất: ≥88%",
      "Kết nối song song để tăng dòng",
      "Chứng nhận CE, UL, cLUL",
    ],
    images: [BASE_IMG + "192-nguon-xung-2-pha-3-pha.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Nguồn Step 1 Pha Connectwell",
    category: "Nguồn xung",
    badge: "",
    description:
      "Nguồn Step 1 pha của Connectwell là bộ nguồn kinh tế lắp thanh DIN cung cấp nguồn DC ổn định cho PLC và thiết bị tự động hóa. Thương hiệu: Connectwell.",
    features: [
      "Điện áp vào: 100–240V AC",
      "Điện áp ra: 24V DC / 12V DC",
      "Dòng ra: 1A đến 5A",
      "Hiệu suất cao, tỏa nhiệt thấp",
      "Bảo vệ quá dòng và ngắn mạch",
      "Lắp thanh DIN 35mm tiêu chuẩn",
    ],
    images: [BASE_IMG + "193-nguon-step-1-pha.jpg"],
    supportPhone: "0985352345",
  },

  // ─── CẦU ĐẤU DÂY ────────────────────────────────────────────────────────────
  {
    name: "Cầu Đấu Dây Mạch Dòng Connectwell",
    category: "Cầu đấu dây",
    badge: "",
    description:
      "Cầu đấu dây mạch dòng của Connectwell chuyên dùng trong mạch đo lường dòng điện, thiết kế an toàn không ngắt mạch khi tháo dây. Thương hiệu: Connectwell.",
    features: [
      "Dòng định mức mạch dòng: 10A–30A",
      "Điện áp thử nghiệm: 6kV",
      "Thiết kế cầu nối an toàn không ngắt mạch",
      "Vật liệu PA66 chịu nhiệt",
      "Lắp thanh DIN 35mm",
      "Tiêu chuẩn IEC 60947-7-1",
    ],
    images: [BASE_IMG + "169-cau-dau-day-mach-dong.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Cầu Đấu Dây Có Cầu Chì Connectwell",
    category: "Cầu đấu dây",
    badge: "",
    description:
      "Cầu đấu dây tích hợp cầu chì bảo vệ của Connectwell kết hợp khả năng kết nối và bảo vệ mạch trong một khối duy nhất. Thương hiệu: Connectwell.",
    features: [
      "Tích hợp giữ cầu chì 5×20mm hoặc 5×25mm",
      "Dòng định mức: 10A đến 25A",
      "Điện áp: 500V AC",
      "Vỏ nhựa polyamide chịu lửa UL94 V0",
      "Lắp thanh DIN 35mm",
      "Tiêu chuẩn IEC 60947-7-1",
    ],
    images: [BASE_IMG + "171-cau-dau-day-co-cau-chi.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Cầu Đấu Dây Xiên Góc Cầu Chì Connectwell",
    category: "Cầu đấu dây",
    badge: "",
    description:
      "Cầu đấu dây xiên góc kết hợp cầu chì của Connectwell cho phép đấu nối đa hướng, tiết kiệm không gian trong tủ điện. Thương hiệu: Connectwell.",
    features: [
      "Thiết kế xiên góc 45°",
      "Tích hợp giữ cầu chì bảo vệ mạch",
      "Dòng định mức: 10A đến 16A",
      "Điện áp: 500V AC",
      "Tiết kiệm không gian tủ điện",
      "Tiêu chuẩn IEC 60947-7-1",
    ],
    images: [BASE_IMG + "187-cau-dau-day-xien-goc-cau-chi.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Cầu Đấu Dây Xiên Góc Đa Kết Nối Có Tiếp Đất",
    category: "Cầu đấu dây",
    badge: "",
    description:
      "Cầu đấu dây xiên góc đa kết nối với tiếp đất của Connectwell cho phép kết nối nhiều dây và nối đất an toàn trong tủ điện. Thương hiệu: Connectwell.",
    features: [
      "Thiết kế xiên góc đa kết nối",
      "Tích hợp tiếp đất (grounding)",
      "Dòng định mức: 10A đến 25A",
      "Điện áp: 500V AC",
      "Vỏ polyamide PA66 chịu lửa",
      "Tiêu chuẩn IEC 60947-7-1",
    ],
    images: [BASE_IMG + "189-cau-dau-day-xien-goc-da-ket-noi-co-tiep-dat.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Nối Đất Dạng Kẹp Connectwell",
    category: "Cầu đấu dây",
    badge: "",
    description:
      "Đầu nối đất dạng kẹp (clamp) của Connectwell kết nối dây tiếp đất bảo vệ thiết bị điện trong tủ điều khiển. Thương hiệu: Connectwell.",
    features: [
      "Kiểu kẹp (clamp) nhanh không cần vít",
      "Màu vàng-xanh tiêu chuẩn tiếp đất",
      "Tiết diện dây: 1.5mm² đến 16mm²",
      "Điện trở tiếp xúc thấp",
      "Lắp thanh DIN 35mm",
      "Tiêu chuẩn IEC 60947-7-2",
    ],
    images: [BASE_IMG + "176-noi-dat-dang-kep.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Nối Đất Dạng Bắt Vít Connectwell",
    category: "Cầu đấu dây",
    badge: "",
    description:
      "Đầu nối đất dạng bắt vít của Connectwell dùng kết nối dây tiếp đất bảo vệ bằng vít, đảm bảo kết nối chắc chắn, đáng tin cậy. Thương hiệu: Connectwell.",
    features: [
      "Kiểu bắt vít (screw) vững chắc",
      "Màu vàng-xanh tiêu chuẩn tiếp đất",
      "Tiết diện dây: 1.5mm² đến 35mm²",
      "Momen xiết vít an toàn",
      "Lắp thanh DIN 35mm",
      "Tiêu chuẩn IEC 60947-7-2",
    ],
    images: [BASE_IMG + "172-noi-dat-dang-bat-vit.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Tiếp Đất Dạng Angular Connectwell",
    category: "Cầu đấu dây",
    badge: "",
    description:
      "Đầu tiếp đất dạng angular của Connectwell có thiết kế góc nghiêng đặc biệt, phù hợp cho các ứng dụng tiếp đất trong không gian hẹp. Thương hiệu: Connectwell.",
    features: [
      "Thiết kế góc nghiêng (angular)",
      "Màu vàng-xanh tiêu chuẩn tiếp đất",
      "Tiết diện dây: 2.5mm² đến 16mm²",
      "Kết nối nhanh, an toàn",
      "Lắp thanh DIN 35mm",
      "Tiêu chuẩn IEC 60947-7-2",
    ],
    images: [BASE_IMG + "190-tiep-dat-dang-angular.jpg"],
    supportPhone: "0985352345",
  },
  {
    name: "Melamine Stud Type Terminal Blocks Connectwell",
    category: "Cầu đấu dây",
    badge: "",
    description:
      "Cầu đấu dây chất liệu melamine chịu nhiệt của Connectwell dành cho môi trường nhiệt độ cao, lò nung và ứng dụng công nghiệp đặc biệt. Thương hiệu: Connectwell.",
    features: [
      "Vật liệu Melamine chịu nhiệt đến 150°C",
      "Kiểu bắt vít chốt (stud)",
      "Điện áp: 500V AC",
      "Dòng định mức: 10A đến 30A",
      "Chống cháy theo UL94 V0",
      "Dùng trong lò nung, môi trường nhiệt cao",
    ],
    images: [BASE_IMG + "180-melamine-stud-type-terminal-blocks.jpg"],
    supportPhone: "0985352345",
  },

  // ─── GIÁM SÁT ĐIỆN ──────────────────────────────────────────────────────────
  {
    name: "Power Monitoring & Metering Schneider",
    category: "Giám sát điện",
    badge: "",
    description:
      "Hệ thống giám sát và đo lường điện năng của Schneider Electric theo dõi, phân tích và tối ưu hóa việc sử dụng điện trong nhà máy. Thương hiệu: Schneider Electric.",
    features: [
      "Đo V, A, W, VAR, VA, PF, Hz đa thông số",
      "Ghi lịch sử tiêu thụ theo thời gian thực",
      "Phát hiện và phân tích sóng hài (THD)",
      "Giao tiếp Modbus, BACnet, Ethernet/IP",
      "Phần mềm EcoStruxure Power Monitoring Expert",
      "Chứng nhận MID đo lường thương mại",
    ],
    images: [BASE_IMG + "121-power-monitoring-metering.jpg"],
    supportPhone: "0985352345",
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const deleted = await Product.deleteMany({});
    console.log(`Đã xóa ${deleted.deletedCount} sản phẩm cũ`);

    const inserted = await Product.insertMany(products);
    console.log(`\nĐã thêm thành công ${inserted.length} sản phẩm:\n`);

    const byCategory = {};
    inserted.forEach((p) => {
      if (!byCategory[p.category]) byCategory[p.category] = [];
      byCategory[p.category].push(p.name);
    });
    Object.entries(byCategory).forEach(([cat, names]) => {
      console.log(`[${cat}] — ${names.length} sản phẩm`);
      names.forEach((n) => console.log(`  • ${n}`));
    });

    await mongoose.disconnect();
    console.log("\nHoàn thành! Dữ liệu đã lưu vào database.");
  } catch (err) {
    console.error("Lỗi:", err.message);
    process.exit(1);
  }
}

seed();
