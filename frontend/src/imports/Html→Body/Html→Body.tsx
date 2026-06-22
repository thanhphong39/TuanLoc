import svgPaths from "./svg-qi49hk41hd";
import imgHTngCongNghip from "./42e9a3c33cd0711ec6333ad58443c671d6090b9b.png";
import imgKThutCongNghip from "./2c7f9da478fee0d1b1204e0599feda88164f52bc.png";
import imgPhatTrinTrangTriDinMtTri from "./fed5816243bb3478819b223519fe992cb93a0a21.png";
import imgTHpHoaDu from "./eab485d0911ffcf2f3955d1ad6b9cc3ec55141a1.png";
import imgToaNhaThngMiCaoTng from "./a970cb90533b637f12209295ef1e67c5a3852bd6.png";

function HTngCongNghip() {
  return (
    <div className="absolute inset-0 opacity-40" data-name="Hạ tầng công nghiệp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[161.01%] left-0 max-w-none top-[-30.5%] w-full" src={imgHTngCongNghip} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-start px-[16px] py-[4px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">DẪN ĐẦU THỊ TRƯỜNG</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f9f9ff] text-[72px] tracking-[-1.44px] w-full">
        <p className="leading-[79.2px] mb-0">Kiến tạo hạ tầng điện</p>
        <p className="leading-[79.2px] text-[#ffdad4]">toàn cầu.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] opacity-90 pt-[16.9px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#dbe2f9] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[28px] mb-0">Cung cấp các giải pháp điện chính xác cho các khu công nghiệp nặng,</p>
        <p className="leading-[28px] mb-0">mạng lưới năng lượng tái tạo và các dự án phát triển đô thị quy mô lớn</p>
        <p className="leading-[28px]">trên toàn thế giới.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-center justify-center px-[32px] py-[17px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[4px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">XEM CÁC DỰ ÁN TRỌNG ĐIỂM</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[33px] py-[17px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dbe2f9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f9f9ff] text-[14px] text-center tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">THAM VẤN KỸ SƯ CỦA CHÚNG TÔI</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[48.9px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[15.1px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Background />
      <Heading />
      <Container2 />
      <Container3 />
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
    <div className="bg-[#141b2c] content-stretch flex items-center justify-center min-h-[795px] overflow-clip py-[179.31px] relative shrink-0 w-full" data-name="Hero Section">
      <HTngCongNghip />
      <div className="absolute bg-gradient-to-r from-[#141b2c] inset-0 to-[rgba(20,27,44,0)] via-1/2 via-[rgba(20,27,44,0.8)]" data-name="Gradient" />
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[48px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Dịch vụ kỹ thuật chính xác</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[28px] mb-0">Năng lực kỹ thuật của chúng tôi bao quát toàn bộ vòng đời hạ tầng điện, từ thiết</p>
        <p className="leading-[28px]">kế bản vẽ đến triển khai cao áp.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[672px] relative shrink-0 w-[651.42px]" data-name="Container">
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">KHÁM PHÁ TẤT CẢ DỊCH VỤ</p>
      </div>
    </div>
  );
}

function Container9() {
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

function Container7() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[32px]">Hạ tầng lưới điện</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Phát triển hệ thống phân phối điện</p>
        <p className="leading-[24px] mb-0">và trạm biến áp quy mô quốc gia</p>
        <p className="leading-[24px]">cho các đối tác chính phủ.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
          <path d={svgPaths.p2f722780} fill="var(--fill-0, #F7BE0F)" id="Icon" />
        </svg>
      </div>
      <Heading2 />
      <Container12 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f9f9ff] content-stretch flex flex-col items-center justify-center py-[16px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4859a7] text-[16px] text-center tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">XEM NĂNG LỰC</p>
      </div>
    </div>
  );
}

function Service1() {
  return (
    <div className="bg-[#4859a7] col-[9/span_4] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Service 2">
      <div className="content-stretch flex flex-col items-start justify-between p-[64px] relative size-full">
        <Container11 />
        <Button2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
          <p className="leading-[32px]">Vận hành hiện trường</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px] mb-0">Bảo trì và hỗ trợ vận hành cho các</p>
          <p className="leading-[24px]">tài sản hạ tầng trọng yếu.</p>
        </div>
      </div>
    </div>
  );
}

function Service2() {
  return (
    <div className="bg-[#dbe2f9] col-[1/span_4] justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Service 3">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[65px] relative size-full">
        <div className="h-[36.05px] relative shrink-0 w-[37.05px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.05 36.05">
            <path d={svgPaths.p2ab92c80} fill="var(--fill-0, #B71508)" id="Icon" />
          </svg>
        </div>
        <Heading3 />
        <Container13 />
      </div>
    </div>
  );
}

function KThutCongNghip() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Kỹ thuật công nghiệp">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-7.64%] max-w-none top-0 w-[115.29%]" src={imgKThutCongNghip} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-px left-1/2 opacity-10 right-[0.13%] top-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <KThutCongNghip />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[32px] w-full">
        <p className="leading-[40px]">Xây lắp Công nghiệp Nặng</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Lắp đặt hệ thống điện chuyên dụng cho nhà máy sản xuất,</p>
        <p className="leading-[24px] mb-0">nhà máy lọc dầu và các trung tâm logistics yêu cầu độ tin</p>
        <p className="leading-[24px]">cậy vận hành 24/7.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #F7BE0F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container17 />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Hệ thống điện Cao thế / Trung thế</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #F7BE0F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container18 />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Hệ thống điều khiển quy trình</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[16px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <div className="h-[36px] relative shrink-0 w-[43.8px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.8 36">
            <path d={svgPaths.p8009910} fill="var(--fill-0, #B71508)" id="Icon" />
          </svg>
        </div>
        <Heading4 />
        <Container16 />
        <List />
      </div>
    </div>
  );
}

function Service() {
  return (
    <div className="bg-[#f1f3ff] col-[1/span_8] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Service 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[97px] pt-[65px] px-[65px] relative size-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffdf99] text-[32px] w-full">
        <p className="leading-[40px] mb-0">Giải pháp Đô thị Thông</p>
        <p className="leading-[40px]">minh</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fffbff] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Tích hợp IoT và giám sát thông minh vào lưới điện đô thị</p>
        <p className="leading-[24px]">để tăng cường hiệu quả và tính bền vững.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[416px]" data-name="Container">
      <Heading5 />
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[47.75px] relative shrink-0 w-[50px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 47.75">
        <g id="Container">
          <path d={svgPaths.p36b03b90} fill="var(--fill-0, #FFDF99)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="aspect-video bg-[rgba(185,195,255,0.2)] content-stretch flex items-center justify-center py-[33px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <Container22 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Overlay />
    </div>
  );
}

function Service3() {
  return (
    <div className="bg-[#001356] col-[5/span_8] justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Service 4">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[90px] pt-[64px] px-[64px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__462px_298px] relative shrink-0 w-full" data-name="Container">
      <Service1 />
      <Service2 />
      <Service />
      <Service3 />
    </div>
  );
}

function SectionServicesIntroBentoStyle() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Section - Services Intro: Bento Style">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[32px] py-[128px] relative size-full">
        <Container4 />
        <Container10 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffdad4] text-[72px] text-center tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[80px]">25+</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f9f9ff] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">NĂM KINH NGHIỆM</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffdad4] text-[72px] text-center tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[80px]">500+</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f9f9ff] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">DỰ ÁN LỚN</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffdad4] text-[72px] text-center tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[80px]">12</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f9f9ff] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">QUỐC GIA</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffdad4] text-[72px] text-center tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[80px]">ISO</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f9f9ff] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">CHỨNG NHẬN CHẤT LƯỢNG</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container23() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_108px] max-w-[inherit] px-[32px] relative size-full">
        <Container24 />
        <Container27 />
        <Container30 />
        <Container33 />
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="bg-[#141b2c] content-stretch flex flex-col items-start py-[128px] relative shrink-0 w-full" data-name="Stats Section">
      <Container23 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[48px] tracking-[-0.48px] w-full">
        <p className="leading-[56px]">Dự án tiêu biểu</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Xương sống của sự tiến bộ, được kiến tạo bởi Tuấn Lộc.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] px-[32px] relative size-full">
        <Heading6 />
        <Container37 />
      </div>
    </div>
  );
}

function PhatTrinTrangTriDinMtTri() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Phát triển trang trại điện mặt trời">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-25%] w-full" src={imgPhatTrinTrangTriDinMtTri} />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.24px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">NĂNG LƯỢNG</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(20,27,44,0.8)] inset-0 items-end p-[32px] to-[rgba(20,27,44,0)]" data-name="Background">
      <Background2 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[400px] items-start justify-center overflow-clip relative rounded-[4px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Overlay+Shadow">
      <PhatTrinTrangTriDinMtTri />
      <Background1 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
        <p className="leading-[32px]">Mở rộng lưới điện mặt trời phía Bắc</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Tích hợp điện mặt trời 400MW và xây dựng trạm biến áp cao thế.</p>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[8px] items-start left-[32px] top-0 w-[600px]" data-name="Project 1">
      <OverlayShadow />
      <Heading7 />
      <Container39 />
    </div>
  );
}

function THpHoaDu() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Tổ hợp hóa dầu">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-25%] w-full" src={imgTHpHoaDu} />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.24px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CÔNG NGHIỆP</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(20,27,44,0.8)] inset-0 items-end p-[32px] to-[rgba(20,27,44,0)]" data-name="Background">
      <Background4 />
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[400px] items-start justify-center overflow-clip relative rounded-[4px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Overlay+Shadow">
      <THpHoaDu />
      <Background3 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
        <p className="leading-[32px]">Tổ hợp Hóa dầu Miền Trung</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Hệ thống phân phối điện toàn diện và hệ thống điện dự phòng khẩn cấp.</p>
      </div>
    </div>
  );
}

function Project1() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[8px] items-start left-[664px] top-0 w-[600px]" data-name="Project 2">
      <OverlayShadow1 />
      <Heading8 />
      <Container40 />
    </div>
  );
}

function ToaNhaThngMiCaoTng() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Tòa nhà thương mại cao tầng">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-25%] w-full" src={imgToaNhaThngMiCaoTng} />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.24px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">THƯƠNG MẠI</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(20,27,44,0.8)] inset-0 items-end p-[32px] to-[rgba(20,27,44,0)]" data-name="Background">
      <Background6 />
    </div>
  );
}

function OverlayShadow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[400px] items-start justify-center overflow-clip relative rounded-[4px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Overlay+Shadow">
      <ToaNhaThngMiCaoTng />
      <Background5 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
        <p className="leading-[32px]">Tháp Tài chính Sky-Point</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Tích hợp hệ thống quản lý tòa nhà và lưới điện thông minh.</p>
      </div>
    </div>
  );
}

function Project2() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[8px] items-start left-[1296px] top-0 w-[600px]" data-name="Project 3">
      <OverlayShadow2 />
      <Heading9 />
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[520px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <Project />
      <Project1 />
      <Project2 />
    </div>
  );
}

function SectionProjectsPreview() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start overflow-clip pb-[256px] pt-[128px] relative shrink-0 w-full" data-name="Section - Projects Preview">
      <Container36 />
      <Container38 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#410100] text-[48px] tracking-[-0.48px] w-full">
        <p className="leading-[60px] mb-0">Sẵn sàng cho dự án hạ tầng</p>
        <p className="leading-[60px]">tiếp theo của bạn?</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#920400] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Hợp tác với đơn vị hạ tầng điện tin cậy nhất Đông Nam Á cho các nhu cầu xây dựng quy</p>
        <p className="leading-[24px]">mô lớn của bạn.</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-center justify-center px-[40px] py-[20px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">YÊU CẦU BÁO GIÁ</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f9f9ff] content-stretch flex flex-col items-center justify-center px-[40px] py-[20px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] text-center tracking-[0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">LIÊN HỆ VĂN PHÒNG CHÍNH</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[640px]" data-name="Container">
      <Heading10 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
          <p className="leading-[32px]">Hotline Kỹ thuật</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p364fe200} fill="var(--fill-0, #FFFBFF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#dc3221] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">ĐƯỜNG DÂY TRỰC TIẾP</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[32px]">0900-TUAN-LOC</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[205.34px]" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8px] relative size-full">
        <Background7 />
        <Container48 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px] mb-0">Phục vụ 24/7 cho các yêu cầu hỗ trợ</p>
          <p className="leading-[24px] mb-0">công nghiệp khẩn cấp và tư vấn hiện</p>
          <p className="leading-[24px]">trường.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f9f9ff] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Heading11 />
        <Container46 />
        <Container51 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[352px]" data-name="Container">
      <BackgroundBorder />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-[#ffdad4] content-stretch flex gap-[64px] items-center max-w-[1280px] p-[80px] relative rounded-[16px] shrink-0 w-[1216px]" data-name="CTA Section">
      <Container42 />
      <Container45 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[128px] pt-[120px] relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionServicesIntroBentoStyle />
      <StatsSection />
      <SectionProjectsPreview />
      <CtaSection />
    </div>
  );
}

function Background8() {
  return (
    <div className="h-[32.667px] relative shrink-0 w-[29.333px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 32.6667">
        <g id="Background">
          <rect fill="var(--fill-0, #B71508)" height="32.6667" rx="2" width="29.3333" />
          <path d={svgPaths.p1af0b200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase whitespace-nowrap">
        <p className="leading-[32px]">TUAN LOC</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Background8 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[384px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.8)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px] mb-0">Dẫn đầu tương lai hạ tầng điện nặng thông qua kỹ</p>
        <p className="leading-[26px] mb-0">thuật chính xác, cam kết về an toàn và xuất sắc</p>
        <p className="leading-[26px]">trong mọi dự án.</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1f805900} fill="var(--fill-0, #EDF0FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[17.25px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.25">
        <g id="Container">
          <path d={svgPaths.p171d4e00} fill="var(--fill-0, #EDF0FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.pf8747d7} fill="var(--fill-0, #EDF0FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container59 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function BrandColumn() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch pb-[50px] relative row-1 self-start shrink-0" data-name="Brand Column">
      <Container53 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">LĨNH VỰC</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.7)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Xây lắp</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.7)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Kỹ thuật</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.7)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Quản lý dự án</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.7)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Kinh doanh</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function LinkColumns() {
  return (
    <div className="col-[5/span_2] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch pb-[80px] relative row-1 self-start shrink-0" data-name="Link Columns">
      <Heading12 />
      <List1 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">DOANH NGHIỆP</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.7)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Về chúng tôi</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.7)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Chứng nhận ISO</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.7)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Tuyển dụng</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.7)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Bền vững</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Container60() {
  return (
    <div className="col-[7/span_2] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch pb-[80px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading13 />
      <List2 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[20px]">BẢN TIN CÔNG NGHIỆP</p>
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(219,226,249,0.7)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px] mb-0">Nhận phân tích kỹ thuật và cập nhật dự</p>
          <p className="leading-[24px]">án mới nhất hàng tháng.</p>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Email doanh nghiệp</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#293041] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[14px] relative size-full">
          <Container63 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-center justify-center px-[97.53px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(183,21,8,0.2),0px_4px_6px_-4px_rgba(183,21,8,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">ĐĂNG KÝ NGAY</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[8px] relative size-full">
        <Input />
        <Button5 />
      </div>
    </div>
  );
}

function NewsletterColumn() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-[9/span_4] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Newsletter Column">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
        <Heading14 />
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function TopFooterBrandLinksAndNewsletter() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_276px] relative shrink-0 w-full" data-name="Top Footer: Brand, Links, and Newsletter">
      <BrandColumn />
      <LinkColumns />
      <Container60 />
      <NewsletterColumn />
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(219,226,249,0.5)] tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[16px]">{`© 2024 Hạ tầng Điện & Xây dựng Tuấn Lộc. Bảo lưu mọi quyền.`}</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(219,226,249,0.5)] tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Chính sách bảo mật</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(219,226,249,0.5)] tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Điều khoản dịch vụ</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(219,226,249,0.5)] tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Pháp lý</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="Bottom Bar">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container52() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[32px] relative size-full">
        <TopFooterBrandLinksAndNewsletter />
        <BottomBar />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#293041] content-stretch flex flex-col items-start py-[64px] relative shrink-0 w-full" data-name="Footer">
      <Container52 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">TP. Hồ Chí Minh, Việt Nam</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p1c659f80} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="opacity-90 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[16px]">contact@tuanloc.com.vn</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center pl-[25px] relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container68 />
      <VerticalBorder />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">facebook</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">instagram</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Link">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Link">
          <path d={svgPaths.p304ef380} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[6.667px] relative shrink-0 w-[13.333px]" data-name="Link">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
        <g id="Link">
          <path d={svgPaths.p1a03500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[15.333px] relative shrink-0 w-[16px]" data-name="Link">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.3333">
        <g id="Link">
          <path d={svgPaths.pf2d0700} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Container66() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <Container67 />
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Tier1Topbar() {
  return (
    <div className="bg-[#293041] content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-full" data-name="Tier 1: Topbar">
      <Container66 />
    </div>
  );
}

function Background9() {
  return (
    <div className="h-[28.667px] relative shrink-0 w-[25.333px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3333 28.6667">
        <g id="Background">
          <rect fill="var(--fill-0, #B71508)" height="28.6667" rx="2" width="25.3333" />
          <path d={svgPaths.p3031b400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] tracking-[-0.6px] uppercase whitespace-nowrap">
        <p className="leading-[32px]">TUAN LOC</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background9 />
      <Container76 />
    </div>
  );
}

function Link11() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#b71508] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[29.5px] pt-[26.5px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">Trang chủ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[29.5px] pt-[26.5px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">Sản phẩm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[29.5px] pt-[26.5px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">Dự án</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[29.5px] pt-[26.5px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">Dịch vụ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[29.5px] pt-[26.5px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">Tin tức</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[29.5px] pt-[26.5px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">Liên hệ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] h-full items-center relative shrink-0" data-name="Nav">
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.pb3c9680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(183,21,8,0.2),0px_4px_6px_-4px_rgba(183,21,8,0.2)] size-[40px] top-1/2" data-name="Overlay+Shadow" />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[10px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[10px]">HOTLINE 24/7</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[14px] tracking-[0.7px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[17.5px]">0900-TUAN-LOC</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128.89px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background10 />
      <Container79 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[80px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[32px] pr-[32.02px] relative size-full">
          <Container75 />
          <Nav />
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Tier2MainNavbar() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Tier 2: Main Navbar">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <Container74 />
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
    <div className="content-stretch flex flex-col gap-[128px] items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 249, 255) 0%, rgb(249, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <Footer />
      <HeaderTopAppBar />
    </div>
  );
}
