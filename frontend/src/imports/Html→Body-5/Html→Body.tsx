import svgPaths from "./svg-2kg2b0jviz";
import imgCongTrinhHTngCongNghipHinDi from "./bc9a9c50bd5bf7b25c06cf72eaa80a136456d644.png";

function CongTrinhHTngCongNghipHinDi() {
  return (
    <div className="absolute inset-0 opacity-30" data-name="Công trình hạ tầng công nghiệp hiện đại">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[241.51%] left-0 max-w-none top-[-70.75%] w-full" src={imgCongTrinhHTngCongNghipHinDi} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">
        <p className="leading-[24px]">CHUYÊN MÔN CỦA CHÚNG TÔI</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001356] text-[72px] tracking-[-1.44px] w-full">
        <p className="leading-[90px] mb-0">Kỹ thuật xuất sắc</p>
        <p className="leading-[90px]">trong hạ tầng</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f408e] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[28px] mb-0">Tuấn Lộc cung cấp các giải pháp xây lắp điện và tư vấn tích hợp cho</p>
        <p className="leading-[28px]">những dự án hạ tầng và công nghiệp tham vọng nhất khu vực.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Background />
      <Heading />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-[#dde1ff] content-stretch flex h-[530px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Hero Section">
      <CongTrinhHTngCongNghipHinDi />
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[48px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Năng lực cốt lõi</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[28px] mb-0">Các dịch vụ kỹ thuật chính xác được thiết kế để đáp ứng các yêu cầu khắt khe của</p>
        <p className="leading-[28px]">công nghiệp nặng và phát triển đô thị hiện đại.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[672px] relative shrink-0 w-[671.67px]" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[72px] tracking-[-1.44px] whitespace-nowrap">
          <p className="leading-[72px]">25+</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-[20px] mb-0">NĂM KINH NGHIỆM</p>
          <p className="leading-[20px]">DẪN ĐẦU NGÀNH</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pl-[28px] relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#b71508] border-l-4 border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <VerticalBorder />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[32px] w-full">
        <p className="leading-[40px]">{`Thi công & Lắp đặt điện`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Giải pháp chìa khóa trao tay toàn diện cho trạm biến áp cao thế,</p>
        <p className="leading-[24px] mb-0">đường dây truyền tải và hệ thống phân phối điện công nghiệp. Chúng</p>
        <p className="leading-[24px] mb-0">tôi quản lý toàn bộ vòng đời từ bản vẽ thiết kế đến khi vận hành chính</p>
        <p className="leading-[24px]">thức.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] h-[48.5px] items-center justify-self-stretch relative row-1 shrink-0" data-name="Item">
      <Container11 />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Xây dựng trạm biến áp CAO/TRUNG</p>
        <p className="leading-[24px]">THẾ</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] h-[48px] items-center justify-self-stretch pb-[12.5px] pt-[11.5px] relative row-1 shrink-0" data-name="Item">
      <Container12 />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Tích hợp lưới điện công nghiệp</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] h-[24.5px] items-center justify-self-stretch relative row-2 shrink-0" data-name="Item">
      <Container13 />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Hạ tầng nhà máy điện</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] h-[24.5px] items-center justify-self-stretch relative row-2 shrink-0" data-name="Item">
      <Container14 />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Hệ thống mạng lưới cáp quy mô lớn</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__48px_24px] pt-[16px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="mb-[-0.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[32px] relative size-full">
        <div className="relative shrink-0 size-[44px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <path d={svgPaths.p33d3100} fill="var(--fill-0, #B71508)" id="Icon" />
          </svg>
        </div>
        <Heading2 />
        <Container10 />
        <List />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">KHÁM PHÁ DỊCH VỤ LẮP ĐẶT</p>
        </div>
        <Container15 />
      </div>
    </div>
  );
}

function LargeFeaturedCard() {
  return (
    <div className="bg-[#f1f3ff] col-[1/span_8] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Large Featured Card">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[65px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_20px_40px_-20px_rgba(12,34,113,0.08)]" data-name="Large Featured Card:shadow" />
        <Container9 />
        <Link />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[32px]">{`Bảo trì & Cải tạo`}</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dbe2f9] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Đảm bảo tính liên tục trong vận hành thông</p>
        <p className="leading-[24px] mb-0">qua bảo trì phòng ngừa định kỳ và sửa chữa</p>
        <p className="leading-[24px] mb-0">khẩn cấp phản ứng nhanh cho các cơ sở hạ</p>
        <p className="leading-[24px]">tầng quan trọng.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[36.05px] relative shrink-0 w-[37.05px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.05 36.05">
          <path d={svgPaths.p2ab92c80} fill="var(--fill-0, #FFDF99)" id="Icon" />
        </svg>
      </div>
      <Heading3 />
      <Container17 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#ffdf99] bottom-0 left-0 right-1/4 rounded-[12px] top-0" data-name="Background" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dbe2f9] text-[16px] uppercase w-full">
        <p className="leading-[24px] mb-0">CAM KẾT 99.9% THỜI GIAN HOẠT ĐỘNG</p>
        <p className="leading-[24px]">HẠ TẦNG</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container19 />
    </div>
  );
}

function SecondaryCard() {
  return (
    <div className="bg-[#4859a7] col-[9/span_4] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Secondary Card">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.05px_0] rounded-[8px] shadow-[0px_20px_40px_-20px_rgba(12,34,113,0.08)]" data-name="Secondary Card:shadow" />
        <Container16 />
        <Container18 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
          <p className="leading-[32px]">Tư vấn kỹ thuật</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px] mb-0">Nghiên cứu tiền khả thi và phân tích phụ tải</p>
          <p className="leading-[24px]">nâng cao cho các cụm công nghiệp lớn.</p>
        </div>
      </div>
    </div>
  );
}

function SmallInfoCards() {
  return (
    <div className="bg-[#dbe2f9] col-[1/span_4] justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Small Info Cards">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[89px] pt-[33px] px-[33px] relative size-full">
        <div className="h-[21px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
            <path d={svgPaths.p15e38e00} fill="var(--fill-0, #B71508)" id="Icon" />
          </svg>
        </div>
        <Heading4 />
        <Container20 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
          <p className="leading-[32px]">{`An toàn & Tuân thủ`}</p>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px] mb-0">Kiểm định an toàn chứng nhận ISO đầy đủ</p>
          <p className="leading-[24px] mb-0">và giám sát tuân thủ quy định cho các dự</p>
          <p className="leading-[24px]">án.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#dbe2f9] col-[5/span_4] justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[65px] pt-[33px] px-[33px] relative size-full">
        <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p2b677030} fill="var(--fill-0, #B71508)" id="Icon" />
          </svg>
        </div>
        <Heading5 />
        <Container21 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
          <p className="leading-[32px] mb-0">Giải pháp lưới điện thông</p>
          <p className="leading-[32px]">minh</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px] mb-0">Triển khai cảm biến IoT và hệ thống điều</p>
          <p className="leading-[24px] mb-0">khiển tự động cho quản lý năng lượng hiện</p>
          <p className="leading-[24px]">đại.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#dbe2f9] col-[9/span_4] justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[33px] relative size-full">
        <div className="h-[23px] relative shrink-0 w-[24px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
            <path d={svgPaths.p80d2080} fill="var(--fill-0, #B71508)" id="Icon" />
          </svg>
        </div>
        <Heading6 />
        <Container22 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__530px_250px] relative shrink-0 w-full" data-name="Container">
      <LargeFeaturedCard />
      <SecondaryCard />
      <SmallInfoCards />
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function SectionServiceCoreCapabilitiesBentoGrid() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Section - Service Core Capabilities - Bento Grid">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[32px] py-[128px] relative size-full">
        <Container3 />
        <Container8 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[48px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Quy trình nghiêm ngặt của chúng tôi</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dbe2f9] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Cách chúng tôi mang lại kết quả chính xác theo bản vẽ cho mọi đối tác doanh nghiệp.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container25 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">01</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Khám phá</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dbe2f9] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px] mb-0">Phân tích chuyên sâu các yêu cầu kỹ thuật</p>
        <p className="leading-[20px] mb-0">và điều kiện hiện trường để xác định các</p>
        <p className="leading-[20px]">hạn chế tiềm ẩn.</p>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Step 1">
      <Background1 />
      <Heading8 />
      <Container27 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">02</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Thiết kế chính xác</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dbe2f9] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px] mb-0">Phát triển bản vẽ kỹ thuật điện chi tiết và</p>
        <p className="leading-[20px] mb-0">mô hình CAD với sự tuân thủ quy định</p>
        <p className="leading-[20px]">100%.</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Step 2">
      <Background2 />
      <Heading9 />
      <Container28 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">03</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Thi công</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dbe2f9] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px] mb-0">Thi công theo từng giai đoạn được quản lý</p>
        <p className="leading-[20px] mb-0">bởi các kỹ sư trưởng và kỹ thuật viên cao</p>
        <p className="leading-[20px]">cấp đã được chứng nhận.</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Step 3">
      <Background3 />
      <Heading10 />
      <Container29 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">04</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Chứng nhận</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dbe2f9] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px] mb-0">Thử nghiệm ứng suất nghiêm ngặt và</p>
        <p className="leading-[20px] mb-0">nghiệm thu lần cuối trước khi bàn giao mặt</p>
        <p className="leading-[20px]">bằng chính thức.</p>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Step 4">
      <Background4 />
      <Heading11 />
      <Container30 />
    </div>
  );
}

function Container26() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_168px] relative shrink-0 w-full" data-name="Container">
      <Step />
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[32px] relative size-full">
        <Container24 />
        <Container26 />
      </div>
    </div>
  );
}

function SectionTechnicalProcessHorizontalStepper() {
  return (
    <div className="bg-[#293041] content-stretch flex flex-col items-start py-[128px] relative shrink-0 w-full" data-name="Section - Technical Process / Horizontal Stepper">
      <Container23 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[48px] tracking-[-0.48px] w-full">
        <p className="leading-[56px]">Thông số dịch vụ</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Các thông số kỹ thuật và tiêu chuẩn cho các phân cấp dịch vụ chính của chúng tôi.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Container32 />
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-[256.97px]" data-name="Cell">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[1.6px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">CẤP DỊCH VỤ</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-[171.55px]" data-name="Cell">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[1.6px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">DẢI ĐIỆN ÁP</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-[433.3px]" data-name="Cell">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[1.6px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">THỜI GIAN THỰC HIỆN THÔNG THƯỜNG</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-[352.19px]" data-name="Cell">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[1.6px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ỨNG DỤNG CÔNG NGHIỆP</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#4859a7] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Row />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-[256.97px]" data-name="Data">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Hạ tầng Cấp 1</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-[171.55px]" data-name="Data">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">110kV - 500kV</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-[433.3px]" data-name="Data">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">12 - 24 Tháng</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-[352.19px]" data-name="Data">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Lưới điện quốc gia, Sản xuất điện</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[256.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[24.5px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Hệ thống điện công nghiệp</p>
        </div>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[171.55px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[24.5px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">22kV - 110kV</p>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[433.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[24.5px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">6 - 12 Tháng</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[352.19px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[24.5px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Sản xuất, Trung tâm dữ liệu</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[rgba(72,89,167,0.05)] content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-solid border-t inset-0 pointer-events-none" />
      <Data4 />
      <Data5 />
      <Data6 />
      <Data7 />
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[256.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[24.5px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Phân phối thương mại</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[171.55px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[24.5px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">0.4kV - 22kV</p>
        </div>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[433.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[24.5px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">3 - 6 Tháng</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[352.19px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[24.5px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Khu phức hợp đô thị, Khu công nghệ</p>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-solid border-t inset-0 pointer-events-none" />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[256.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Hợp đồng bảo trì</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[171.55px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Mọi cấp độ</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[433.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Liên tục (24/7)</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[352.19px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Quản lý cơ sở hạ tầng, Vận hành tiện ích</p>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-[rgba(72,89,167,0.05)] content-stretch flex items-start justify-center pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-solid border-t inset-0 pointer-events-none" />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Header />
        <Body />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-auto p-px relative size-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_20px_40px_-20px_rgba(12,34,113,0.08)]" />
    </div>
  );
}

function TechnicalDataTablesSection() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Technical Data Tables Section">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] pb-[256px] pt-[128px] px-[32px] relative size-full">
        <Container31 />
        <OverlayBorderShadow />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[48px] text-center tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[56px]">Sẵn sàng tư vấn kỹ thuật?</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px] mb-0">Hợp tác với Tuấn Lộc cho dự án hạ tầng điện quan trọng tiếp theo của bạn. Các kỹ sư</p>
          <p className="leading-[24px]">của chúng tôi luôn sẵn sàng thảo luận về các yêu cầu cụ thể của bạn.</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-center justify-center pb-[18.5px] pt-[17.5px] px-[32px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[1.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">YÊU CẦU ĐỀ XUẤT</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[34px] py-[18px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#4859a7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4859a7] text-[16px] text-center tracking-[1.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">LIÊN HỆ CHUYÊN GIA</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.01px] items-start justify-center pt-[8px] relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-[#e0e8ff] content-stretch flex flex-col gap-[24px] items-start max-w-[768px] p-[66px] relative rounded-[16px] shrink-0 w-[768px]" data-name="CTA Section">
      <div aria-hidden="true" className="absolute border-2 border-[#b71508] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_40px_-20px_rgba(12,34,113,0.08)]" data-name="Overlay+Shadow" />
      <Heading13 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[128px] pt-[120px] relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionServiceCoreCapabilitiesBentoGrid />
      <SectionTechnicalProcessHorizontalStepper />
      <TechnicalDataTablesSection />
      <CtaSection />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[27.375px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.375 22.5">
        <g id="Container">
          <path d={svgPaths.p2dbffc00} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffb4a8] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Tuấn Lộc</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px] mb-0">Dẫn đầu trong lĩnh vực hạ tầng điện và xây</p>
        <p className="leading-[20px]">dựng công nghiệp nặng trên toàn khu vực.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[92px] relative row-1 self-start shrink-0" data-name="Container">
      <Container37 />
      <Container40 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] uppercase w-full">
        <p className="leading-[24px]">DỊCH VỤ</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Thi công</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Bảo trì</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Tư vấn</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Lưới điện thông minh</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Container41() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading14 />
      <List1 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] uppercase w-full">
        <p className="leading-[24px]">CÔNG TY</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Về chúng tôi</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Dự án</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Chứng nhận ISO</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Nghề nghiệp</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Container42() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading15 />
      <List2 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] uppercase w-full">
        <p className="leading-[24px]">LIÊN HỆ</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #5C403B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">123 Khu công nghiệp, Bình Dương, VN</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, #5C403B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">0900-TUAN-LOC</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p1c659f80} fill="var(--fill-0, #5C403B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">contact@tuanloc.com</p>
      </div>
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Address">
      <Container44 />
      <Container46 />
      <Container48 />
    </div>
  );
}

function Container43() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[52px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading16 />
      <Address />
    </div>
  );
}

function Container35() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_192px] max-w-[inherit] px-[32px] relative size-full">
        <Container36 />
        <Container41 />
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">{`© 2024 Cơ sở hạ tầng & Xây lắp điện Tuấn Lộc. Bảo lưu mọi quyền.`}</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Chính sách bảo mật</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Điều khoản dịch vụ</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(229,190,183,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pt-[33px] px-[32px] relative size-full">
          <Container50 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#dde1ff] content-stretch flex flex-col gap-[64px] items-start pb-[128px] pt-[129px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-solid border-t inset-0 pointer-events-none" />
      <Container35 />
      <HorizontalBorder />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
        <g id="Container">
          <path d={svgPaths.p1a900f00} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[19.5px]">Khu công nghiệp, Bình Dương, VN</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Container">
          <path d={svgPaths.p37f50280} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[19.5px]">contact@tuanloc.com</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container54 />
      <Container57 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[18px]">facebook</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[15px]" data-name="Link">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.5">
        <g id="Link">
          <path d={svgPaths.p211d8500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16.5px]" data-name="Link">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 12">
        <g id="Link">
          <path d={svgPaths.p33a5df00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[9px]" data-name="Link">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15">
        <g id="Link">
          <path d={svgPaths.p33e11280} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Link3 />
      <Link4 />
      <div className="flex flex-col font-['FreeSerif:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">𝕏</p>
      </div>
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between max-w-[1280px] min-w-px relative" data-name="Container">
      <Container53 />
      <Container60 />
    </div>
  );
}

function Tier1Topbar() {
  return (
    <div className="bg-[#001356] h-[40px] relative shrink-0 w-full" data-name="Tier 1: Topbar">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] relative size-full">
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="h-[34.5px] relative shrink-0 w-[39.375px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.375 34.5">
        <g id="Background">
          <rect fill="var(--fill-0, #B71508)" height="34.5" rx="4" width="39.375" />
          <path d={svgPaths.p34c75d40} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">TUẤN LỘC</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[10px] tracking-[2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[10px]">HẠ TẦNG</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[122.09px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
      <Background5 />
      <Container62 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">TRANG CHỦ</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">SẢN PHẨM</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">DỰ ÁN</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">DỊCH VỤ</p>
      </div>
      <div className="absolute bg-[#b71508] bottom-[-4px] h-[2px] left-0 right-0" data-name="Horizontal Divider" />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">TIN TỨC</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">LIÊN HỆ</p>
      </div>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav - Menu">
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
      <Link12 />
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16.5px]">HOTLINE 24/7</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">0900-TUAN-LOC</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[199.55px]" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function HotlineCta() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Hotline CTA">
      <Background6 />
      <Container66 />
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full">
        <Logo />
        <NavMenu />
        <HotlineCta />
      </div>
    </div>
  );
}

function Tier2MainNavbar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] h-[80px] relative shrink-0 w-full" data-name="Tier 2: Main Navbar">
      <div aria-hidden="true" className="absolute border-[rgba(229,190,183,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-px px-[32px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] h-[80px] left-0 right-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0" data-name="Tier 2: Main Navbar:shadow" />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1280px]" data-name="Header">
      <Tier1Topbar />
      <Tier2MainNavbar />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col gap-[128px] items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 249, 255) 0%, rgb(249, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <Footer />
      <Header1 />
    </div>
  );
}
