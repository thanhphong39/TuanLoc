import svgPaths from "./svg-qpf3hysgox";
import imgEngineeringBackground from "./ad78facf0e91a6d3b4d3b416b5c858c9e2bb5869.png";
import imgCentralGridStation from "./fabbe33465b63f2cfcaa99538482b5df4d8ab136.png";
import imgSolarFarm from "./34e98a025ca0d220bf438bff4a2f73b451ec0731.png";
import imgIndustrialControls from "./11e4ebd2865309583f29127333d99626f47710af.png";
import imgConstruction from "./cd6cd97bd9a6878f1072af8de3ec1d08cc9c0627.png";
import imgWindPower from "./f6c859d5957785c7d90138b9d325e4c5da3be620.png";
import imgMapBackground from "./0dbcdb6ba28bd6a36c712dae0dc15ead6c350f3d.png";

function EngineeringBackground() {
  return (
    <div className="absolute inset-0 opacity-20" data-name="Engineering Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[212.62%] left-0 max-w-none top-[-56.31%] w-full" src={imgEngineeringBackground} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffdad4] text-[16px] tracking-[1.6px] uppercase w-full">
        <p className="leading-[24px]">KỸ THUẬT XUẤT SẮC</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fffbff] text-[72px] tracking-[-1.44px] w-full">
        <p className="leading-[80px] mb-0">Xây dựng tương lai</p>
        <p className="leading-[80px]">hạ tầng.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dbe2f9] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Từ mạng lưới điện quốc gia đến các khu phức hợp công nghiệp phức tạp, Tuấn Lộc cung cấp</p>
        <p className="leading-[24px]">các giải pháp kỹ thuật chính xác và xây dựng hạng nặng thúc đẩy sự tiến bộ.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-center justify-center pb-[17.5px] pt-[16.5px] px-[32px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Khám phá công việc</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[33px] py-[17px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dbe2f9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fffbff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Tải Hồ sơ năng lực</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Heading />
      <Container2 />
      <Container3 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute bg-[#293041] content-stretch flex flex-col items-start left-0 overflow-clip pl-[32px] pr-[576px] py-[128px] right-0 top-[116px]" data-name="Hero Section">
      <EngineeringBackground />
      <Container />
    </div>
  );
}

function CentralGridStation() {
  return (
    <div className="h-[448.88px] relative shrink-0 w-full" data-name="Central Grid Station">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgCentralGridStation} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <CentralGridStation />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(183,21,8,0.1)] content-stretch flex items-start left-0 px-[12px] py-[1.5px] rounded-[2px] top-[-2px]" data-name="Overlay">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">TIỆN ÍCH QUY MÔ LỚN</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[32px]" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Mở rộng lưới điện quốc gia</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[56px] relative shrink-0 w-[215.53px]" data-name="Container">
      <Overlay />
      <Heading2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p22fc1b80} fill="var(--fill-0, #906F6A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] pb-[24px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Tích hợp các đường dây truyền tải điện siêu cao áp 500kV trải dài 120km,</p>
        <p className="leading-[24px]">cung cấp điện ổn định cho hơn 4 triệu dân cư khu vực phía Nam.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#906f6a] text-[16px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">VỊ TRÍ</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Cụm khu vực phía Nam</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative self-stretch shrink-0 w-[181.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#906f6a] text-[16px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">TRẠNG THÁI</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#4859a7] relative rounded-[12px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4859a7] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Đang hoạt động</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative self-stretch shrink-0 w-[135.44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[32px] h-[81px] items-start pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-solid border-t inset-0 pointer-events-none" />
      <Container9 />
      <Container12 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[32px] relative size-full">
        <Container6 />
        <Container8 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function MainFeaturedProject() {
  return (
    <div className="bg-[#e9edff] col-[1/span_8] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Main Featured Project">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container4 />
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SolarFarm() {
  return (
    <div className="h-[477.5px] relative shrink-0 w-full" data-name="Solar Farm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-12.5%] max-w-none top-0 w-[125%]" src={imgSolarFarm} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <SolarFarm />
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(116,88,0,0.1)] content-stretch flex items-start px-[12px] py-[1.5px] relative rounded-[2px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#745800] text-[16px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">NĂNG LƯỢNG TÁI TẠO</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] w-full">
        <p className="leading-[24px]">Cánh đồng năng lượng mặt trời Azure</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Triển khai hệ thống giá đỡ quang điện tiên</p>
        <p className="leading-[24px]">tiến và các trạm biến áp công suất lớn.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Tỉnh Bình Thuận</p>
      </div>
    </div>
  );
}

function Container20() {
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

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[25px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start pb-[32px] pt-[30px] px-[32px] relative size-full">
        <Overlay1 />
        <Heading3 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function SecondaryProject() {
  return (
    <div className="bg-[#e9edff] col-[9/span_4] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Secondary Project">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[29.38px] pt-px px-px relative rounded-[inherit] size-full">
        <Container15 />
        <Container16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function IndustrialControls() {
  return (
    <div className="h-[286.5px] relative shrink-0 w-full" data-name="Industrial Controls">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgIndustrialControls} />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <IndustrialControls />
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(183,21,8,0.1)] content-stretch flex items-start px-[12px] py-[1.5px] relative rounded-[2px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">TỰ ĐỘNG HÓA</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] w-full">
        <p className="leading-[24px]">Hệ thống SCADA nhà máy thông minh</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full">
        <p className="leading-[24px]">Khu công nghiệp Đà Nẵng</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start pb-[32px] pt-[30px] px-[32px] relative size-full">
        <Overlay2 />
        <Heading4 />
        <Container23 />
      </div>
    </div>
  );
}

function GridItem() {
  return (
    <div className="bg-[#e9edff] col-[1/span_4] justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Grid Item 3">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container21 />
        <Container22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Construction() {
  return (
    <div className="h-[286.5px] relative shrink-0 w-full" data-name="Construction">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgConstruction} />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Construction />
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(72,89,167,0.1)] content-stretch flex items-start px-[12px] py-[1.5px] relative rounded-[2px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4859a7] text-[16px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">CÔNG TRÌNH DÂN DỤNG</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] w-full">
        <p className="leading-[24px]">Móng cầu vượt sông</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full">
        <p className="leading-[24px]">Thành phố Cần Thơ</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start pb-[32px] pt-[30px] px-[32px] relative size-full">
        <Overlay3 />
        <Heading5 />
        <Container26 />
      </div>
    </div>
  );
}

function GridItem1() {
  return (
    <div className="bg-[#e9edff] col-[5/span_4] justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Grid Item 4">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container24 />
        <Container25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function WindPower() {
  return (
    <div className="h-[286.5px] relative shrink-0 w-full" data-name="Wind Power">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgWindPower} />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <WindPower />
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(116,88,0,0.1)] content-stretch flex items-start px-[12px] py-[1.5px] relative rounded-[2px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#745800] text-[16px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">SỰ BỀN VỮNG</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] w-full">
        <p className="leading-[24px]">Trang trại điện gió ven biển Giai đoạn II</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full">
        <p className="leading-[24px]">Tỉnh Quảng Bình</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start pb-[32px] pt-[30px] px-[32px] relative size-full">
        <Overlay4 />
        <Heading6 />
        <Container29 />
      </div>
    </div>
  );
}

function GridItem2() {
  return (
    <div className="bg-[#e9edff] col-[9/span_4] justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Grid Item 5">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container27 />
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SectionPortfolioBentoGrid() {
  return (
    <div className="absolute gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__739.88px_448.50px] left-[32px] right-[32px] top-[959px]" data-name="Section - Portfolio Bento Grid">
      <MainFeaturedProject />
      <SecondaryProject />
      <GridItem />
      <GridItem1 />
      <GridItem2 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start opacity-10 right-0 top-[-48px]" data-name="Container">
      <div className="h-[225px] relative shrink-0 w-[273.75px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 273.75 225">
          <path d={svgPaths.p2cd8ab40} fill="var(--fill-0, #141B2C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[48px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Sẵn sàng xây dựng cột mốc tiếp theo?</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] opacity-90 relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Tham khảo ý kiến của đội ngũ kỹ sư ưu tú của chúng tôi để đánh giá dự án ưu tiên tính bền</p>
        <p className="leading-[24px]">bỉ, hiệu quả và sự xuất sắc trong công nghiệp.</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center pb-[17.5px] pt-[16.5px] px-[40px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[2px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Liên hệ bộ phận kinh doanh</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[41px] py-[17px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Yêu cầu dự án</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container31() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[inherit] px-[32px] relative size-full">
          <Heading1 />
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="absolute bg-[#b71508] content-stretch flex flex-col items-start left-0 overflow-clip py-[64px] right-0 top-[2435.38px]" data-name="CTA Section">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Sự công nhận toàn cầu</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Cam kết của chúng tôi đối với an toàn và độ chính xác kỹ thuật đã giúp Tuấn</p>
        <p className="leading-[24px] mb-0">Lộc đạt được các chứng chỉ quốc tế và sự hoan nghênh của ngành trên khắp</p>
        <p className="leading-[24px]">khu vực Châu Á - Thái Bình Dương.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[576px] relative shrink-0 w-[555.75px]" data-name="Container">
      <Heading7 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[32px]">ISO 9001</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[32px]">OHSAS 18001</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[32px]">LEED GOLD</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex gap-[32px] items-center opacity-50 relative shrink-0" data-name="Background">
      <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Background />
    </div>
  );
}

function MapBackground() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-50 relative w-full" data-name="Map Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[305.03%] left-0 max-w-none top-[-102.51%] w-full" src={imgMapBackground} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex flex-col inset-px items-start justify-center" data-name="Background">
      <MapBackground />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#f9f9ff] content-stretch flex flex-col gap-[8px] items-start left-[33px] max-w-[320px] pl-[17px] pr-[21.14px] py-[17px] rounded-[2px] top-[33px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[2px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Dấu chân của chúng tôi</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[12px] tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px] mb-0">Các địa điểm dự án đang hoạt động tại 22 tỉnh</p>
        <p className="leading-[16px] mb-0">thành và 3 khu vực quốc tế. Mang lại hạ tầng chất</p>
        <p className="leading-[16px]">lượng ở mọi nơi chúng tôi xây dựng.</p>
      </div>
    </div>
  );
}

function MapComponentPlaceholder() {
  return (
    <div className="bg-[#e9edff] h-[400px] relative rounded-[8px] shrink-0 w-full" data-name="Map Component Placeholder">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Background1 />
        <BackgroundBorder />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function RecognitionSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-0 max-w-[1280px] pb-[128px] px-[32px] right-0 top-[2901.38px]" data-name="Recognition Section">
      <Container34 />
      <MapComponentPlaceholder />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-center justify-center pb-[9.5px] pt-[8.5px] px-[24px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Tất cả dự án</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f9f9ff] content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Lưới điện</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f9f9ff] content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Hạ tầng dân dụng</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f9f9ff] content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Năng lượng tái tạo</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f9f9ff] content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Bảo trì</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-auto relative shrink-0" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">250+</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">DỰ ÁN HOÀN THÀNH</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[161.59px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">15 GW</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">KẾT NỐI LƯỚI ĐIỆN</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.84px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[64.01px] items-center relative shrink-0" data-name="Container">
      <Container43 />
      <Container46 />
    </div>
  );
}

function Container40() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function SectionProjectFilteringStats() {
  return (
    <div className="absolute bg-[#f1f3ff] content-stretch flex flex-col items-start left-0 pb-[33px] pt-[32px] right-0 top-[718px]" data-name="Section - Project Filtering & Stats">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <Container40 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[3597.38px] relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionPortfolioBentoGrid />
      <CtaSection />
      <RecognitionSection />
      <SectionProjectFilteringStats />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffb4a8] text-[24px] w-full">
        <p className="leading-[32px]">TUẤN LỘC</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Dẫn đầu sự phát triển của bối cảnh</p>
        <p className="leading-[24px] mb-0">điện và công nghiệp Việt Nam từ năm</p>
        <p className="leading-[24px]">1998.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[32px] relative row-1 self-start shrink-0" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] uppercase w-full">
        <p className="leading-[24px]">CHUYÊN MÔN</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Truyền tải lưới điện</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Xây dựng dân dụng</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Kỹ thuật cơ khí</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Quản lý cơ sở hạ tầng</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading8 />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] uppercase w-full">
        <p className="leading-[24px]">CÔNG TY</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Cơ hội nghề nghiệp</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Chứng chỉ ISO</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Chính sách bảo mật</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Điều khoản dịch vụ</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading9 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] uppercase w-full">
        <p className="leading-[24px]">TRỤ SỞ CHÍNH</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">88 Industrial Plaza, Quận 1</p>
        <p className="leading-[24px]">Thành phố Hồ Chí Minh, Việt Nam</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2182f500} fill="var(--fill-0, #001356)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <path d={svgPaths.p130f1800} fill="var(--fill-0, #001356)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #001356)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container57 />
    </div>
  );
}

function Container55() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading10 />
      <Container56 />
      <Margin />
    </div>
  );
}

function Container49() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_152px] max-w-[inherit] px-[32px] relative size-full">
        <Container50 />
        <Container53 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001356] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">{`© 2024 Hạ tầng Điện & Xây dựng Tuấn Lộc. Bảo lưu mọi quyền.`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,19,86,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[33px] px-[32px] relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#dde1ff] content-stretch flex flex-col gap-[64px] items-start pb-[128px] pt-[129px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-solid border-t inset-0 pointer-events-none" />
      <Container49 />
      <HorizontalBorder1 />
    </div>
  );
}

function Container65() {
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

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">88 Industrial Plaza, Quận 1, TP.HCM</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
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

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">info@tuanloc.vn</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Container64 />
      <Container67 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_963)" id="Link â SVG">
          <path d={svgPaths.pbbad300} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_963">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1664)" id="SVG">
          <path d={svgPaths.p27cb6a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1664">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Link â SVG">
          <path d={svgPaths.p16521280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1003)" id="Link â SVG">
          <path d={svgPaths.pc18d500} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1003">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg3 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Container62() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <Container63 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Tier1Topbar() {
  return (
    <div className="bg-[#293041] content-stretch flex flex-col items-start pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="Tier 1: Topbar">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container62 />
    </div>
  );
}

function Background2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[33.9px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.9 30">
        <g id="Background">
          <rect fill="var(--fill-0, #B71508)" height="30" rx="4" width="33.9" />
          <path d={svgPaths.paa31200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex font-['Work_Sans:Bold',sans-serif] font-bold gap-[3.99px] items-start leading-[0] relative shrink-0 text-[24px] tracking-[-0.6px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0 text-[#141b2c]">
        <p className="leading-[32px]">TUAN</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#b71508]">
        <p className="leading-[32px]">LOC</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Background2 />
      <Paragraph />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Trang chủ</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Sản phẩm</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Dự án</p>
      </div>
      <div className="absolute bg-[#b71508] bottom-[-4px] h-[2px] left-0 right-0" data-name="Horizontal Divider" />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Dịch vụ</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Tin tức</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Liên hệ</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[32px] h-full items-center relative shrink-0" data-name="Container">
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
      <Link17 />
      <Link18 />
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p3ca41900} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[10px]">HOTLINE 24/7</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[18px] whitespace-nowrap">
        <p className="leading-[22.5px]">0900-TUAN-LOC</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148.95px]" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Container">
      <Background3 />
      <Container75 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[80px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[32px] pr-[32.02px] relative size-full">
          <Link12 />
          <Container72 />
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Tier2MainNavbar() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Tier 2: Main Navbar">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <Container71 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1280px]" data-name="Header - TopAppBar">
      <Tier1Topbar />
      <Tier2MainNavbar />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 249, 255) 0%, rgb(249, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <Footer />
      <HeaderTopAppBar />
    </div>
  );
}