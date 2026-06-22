import svgPaths from "./svg-x74ukon0qs";
import imgMayBinApCongNghip from "./b5b9e5652575b39ee993308fe6ca48faf36722e5.png";
import imgCapDinCaoTh from "./5722e5e4777a7e475607aeaeac0bfc269a451604.png";
import imgTDinDiuKhin from "./b9f60ef5b6fedfc8786ff0ab3d51b96ed22d5156.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[48px] tracking-[-0.48px] w-full">
        <p>
          <span className="leading-[56px]">{`Thiết bị `}</span>
          <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[56px] text-[#b71508]">điện công nghiệp</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[28px] mb-0">Giải pháp hạ tầng hiệu suất cao cho công nghiệp nặng, tiện ích công cộng và các dự án xây</p>
        <p className="leading-[28px]">dựng thương mại. Được thiết kế với độ chính xác và tin cậy tuyệt đối.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[768px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] relative size-full">
        <Heading />
        <Container1 />
      </div>
    </div>
  );
}

function SectionHeroPageHeader() {
  return (
    <div className="bg-[#f1f3ff] relative shrink-0 w-full" data-name="Section - Hero / Page Header">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[65px] pl-[32px] pr-[480px] pt-[64px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4859a7] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">DANH MỤC</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="image">
          <path d={svgPaths.pf079980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#b71508] relative rounded-[2px] shrink-0 size-[18px]" data-name="Input">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Image />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Tất cả thiết bị</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center pl-[7px] pr-[112.36px] py-[8px] relative size-full">
          <Input />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Máy biến áp</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative size-full">
          <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Input">
            <div aria-hidden="true" className="absolute border border-[#906f6a] border-solid inset-0 pointer-events-none rounded-[2px]" />
          </div>
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Cáp điện cao thế</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative size-full">
          <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Input">
            <div aria-hidden="true" className="absolute border border-[#906f6a] border-solid inset-0 pointer-events-none rounded-[2px]" />
          </div>
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Hệ thống tủ điện</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative size-full">
          <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Input">
            <div aria-hidden="true" className="absolute border border-[#906f6a] border-solid inset-0 pointer-events-none rounded-[2px]" />
          </div>
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Máy cắt chân không</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative size-full">
          <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Input">
            <div aria-hidden="true" className="absolute border border-[#906f6a] border-solid inset-0 pointer-events-none rounded-[2px]" />
          </div>
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4859a7] text-[14px] tracking-[1.4px] uppercase w-full">
          <p className="leading-[20px]">THÔNG SỐ KỸ THUẬT</p>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] w-full">
          <p className="leading-[24px]">Dải điện áp (kV)</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#f1f3ff] relative rounded-[2px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[13px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[223px] pr-[9px] py-[13px] relative rounded-[inherit] size-full">
            <Image1 />
          </div>
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-solid border-t inset-0 pointer-events-none" />
      <Heading3 />
      <Options />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffdad4] text-[24px] w-full">
        <p className="leading-[32px] mb-0">Cần giải pháp tùy</p>
        <p className="leading-[32px]">chỉnh?</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d2daf0] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Đội ngũ kỹ sư của chúng tôi</p>
        <p className="leading-[24px] mb-0">cung cấp thiết kế hạ tầng</p>
        <p className="leading-[24px]">điện theo yêu cầu riêng biệt.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center py-[8px] relative rounded-[2px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Tham khảo chuyên gia</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0a1128] relative rounded-[2px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Heading4 />
        <Container11 />
        <Button />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <HorizontalBorder />
      <Background />
    </div>
  );
}

function AsideSidebarFilters() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[256px]" data-name="Aside - Sidebar Filters">
      <Container2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Hiển thị 24 sản phẩm công nghiệp</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Sắp xếp:</p>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ImageClip() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center overflow-clip pl-[171px] pr-[8px] py-[8px]" data-name="image clip">
      <Image2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pr-[85.11px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Mới nhất</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[40px] py-[8px] relative shrink-0" data-name="Options">
      <ImageClip />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container15 />
      <Options1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function MayBinApCongNghip() {
  return (
    <div className="h-[286px] relative shrink-0 w-full" data-name="Máy biến áp công nghiệp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMayBinApCongNghip} />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#b71508] content-stretch flex flex-col items-start left-[16px] px-[12px] py-[4px] top-[16px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">HÀNG SẴN KHO</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e9edff] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <MayBinApCongNghip />
        <Background2 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4859a7] text-[14px] tracking-[0.7px] w-full">
        <p className="leading-[20px]">Máy biến áp</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
        <p className="leading-[32px] mb-0">TX-500 Máy biến áp</p>
        <p className="leading-[32px]">dầu</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Điện áp định mức</p>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">35 kV</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex h-[29px] items-start justify-between pb-[5px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Công suất</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">2500 kVA</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex h-[29px] items-start justify-between pb-[5px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Tiêu chuẩn</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">IEC 60076</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <Container24 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[2px] py-[14px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#b71508] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Xem tài liệu kỹ thuật</p>
      </div>
      <Container27 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative size-full">
        <Container18 />
        <Heading5 />
        <Container19 />
        <Button1 />
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col isolate items-start justify-self-stretch p-px relative row-1 self-start shrink-0" data-name="Product Card 1">
      <div aria-hidden="true" className="absolute border border-[rgba(88,92,123,0.2)] border-solid inset-0 pointer-events-none" />
      <Background1 />
      <Container17 />
    </div>
  );
}

function CapDinCaoTh() {
  return (
    <div className="h-[286px] relative shrink-0 w-full" data-name="Cáp điện cao thế">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCapDinCaoTh} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e9edff] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <CapDinCaoTh />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4859a7] text-[14px] tracking-[0.7px] w-full">
        <p className="leading-[20px]">Dây và Cáp điện</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
        <p className="leading-[32px] mb-0">Cáp ArmorShield</p>
        <p className="leading-[32px]">Cao Thế</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Dây dẫn</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">99.9% Cu</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex h-[29px] items-start justify-between pb-[5px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Cách điện</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">XLPE</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="h-[29px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[5px] relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Số lõi</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">3 Lõi</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder3 />
      <HorizontalBorder4 />
      <Container35 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #B71508)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[2px] py-[14px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#b71508] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Yêu cầu thông số</p>
      </div>
      <Container38 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative size-full">
        <Container29 />
        <Heading6 />
        <Container30 />
        <Button2 />
      </div>
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col isolate items-start justify-self-stretch p-px relative row-1 self-start shrink-0" data-name="Product Card 2">
      <div aria-hidden="true" className="absolute border border-[rgba(88,92,123,0.2)] border-solid inset-0 pointer-events-none" />
      <Background3 />
      <Container28 />
    </div>
  );
}

function TDinDiuKhin() {
  return (
    <div className="h-[286px] relative shrink-0 w-full" data-name="Tủ điện điều khiển">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTDinDiuKhin} />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#4859a7] content-stretch flex flex-col items-start left-[16px] px-[12px] py-[4px] top-[16px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">DÀNH CHO DOANH NGHIỆP</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e9edff] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <TDinDiuKhin />
        <Background5 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4859a7] text-[14px] tracking-[0.7px] w-full">
        <p className="leading-[20px]">Tủ điện</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[24px] w-full">
        <p className="leading-[32px] mb-0">Trung tâm điều</p>
        <p className="leading-[32px]">khiển SG-Prime</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Cấp điện áp</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">12-24 kV</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="h-[29px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[5px] relative size-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Chống hồ quang</p>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">Cấp 4</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="h-[29px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[5px] relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Cấp bảo vệ</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">IP54</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder5 />
      <HorizontalBorder6 />
      <Container46 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[10.515px] relative shrink-0 w-[10.806px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8062 10.5146">
        <g id="Container">
          <path d={svgPaths.p2785b700} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#b71508] content-stretch flex gap-[8px] items-center justify-center py-[12px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Cấu hình hệ thống</p>
      </div>
      <Container49 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative size-full">
        <Container40 />
        <Heading7 />
        <Container41 />
        <Button3 />
      </div>
    </div>
  );
}

function ProductCard2() {
  return (
    <div className="bg-white col-3 content-stretch flex flex-col isolate items-start justify-self-stretch pb-[5px] pt-px px-px relative row-1 self-start shrink-0" data-name="Product Card 3">
      <div aria-hidden="true" className="absolute border border-[rgba(88,92,123,0.2)] border-solid inset-0 pointer-events-none" />
      <Background4 />
      <Container39 />
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_610px] relative shrink-0 w-full" data-name="Product Grid">
      <ProductCard />
      <ProductCard1 />
      <ProductCard2 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #141B2C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-30 p-px relative rounded-[2px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container50 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[2px] shrink-0 size-[40px]" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative rounded-[2px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative rounded-[2px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #141B2C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[2px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container51 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center pt-[32px] relative shrink-0 w-full" data-name="Pagination">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function ResultsArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative self-stretch" data-name="Results Area">
      <Container12 />
      <ProductGrid />
      <Pagination />
    </div>
  );
}

function ProductFilterGridSection() {
  return (
    <div className="content-stretch flex gap-[32px] h-[786px] items-start relative shrink-0 w-[1216px]" data-name="Product Filter & Grid Section">
      <AsideSidebarFilters />
      <ResultsArea />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffb4a8] text-[48px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px] mb-0">Thông số kỹ thuật dự án</p>
        <p className="leading-[56px]">phức tạp?</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fffbff] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[28px] mb-0">Đội ngũ kỹ sư của chúng tôi hỗ trợ lựa chọn các thông số kỹ thuật chính xác cho</p>
        <p className="leading-[28px] mb-0">các dự án hạ tầng điện quy mô lớn. Chúng tôi đảm bảo tuân thủ mọi tiêu chuẩn</p>
        <p className="leading-[28px]">khu vực và quốc tế.</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#b71508] content-stretch flex flex-col items-center justify-center pb-[17.5px] pt-[16.5px] px-[32px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Tải Catalogue tổng</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[33px] py-[17px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5beb7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Liên hệ kỹ thuật</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[672px] relative shrink-0 w-[653.53px]" data-name="Container">
      <Heading1 />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[384px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 384">
        <g id="Container" opacity="0.2">
          <path d={svgPaths.p277fd940} fill="var(--fill-0, #FFB4A8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <Container53 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function SectionTechnicalConsultationBanner() {
  return (
    <div className="bg-[#293041] content-stretch flex flex-col items-start overflow-clip py-[64px] relative shrink-0 w-full" data-name="Section - Technical Consultation Banner">
      <Container52 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center pt-[120px] relative shrink-0 w-full" data-name="Main">
      <SectionHeroPageHeader />
      <ProductFilterGridSection />
      <SectionTechnicalConsultationBanner />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffb4a8] text-[24px] w-full">
        <p className="leading-[32px]">Tuấn Lộc</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px] mb-0">Dẫn đầu trong lĩnh vực hạ tầng điện và</p>
        <p className="leading-[24px] mb-0">dịch vụ xây dựng hạng nặng. Độ tin</p>
        <p className="leading-[24px]">cậy thông qua sự xuất sắc về kỹ thuật.</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e9edff] relative rounded-[2px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p2b729200} fill="var(--fill-0, #141B2C)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#e9edff] relative rounded-[2px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p237be000} fill="var(--fill-0, #141B2C)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Background6 />
      <Background7 />
    </div>
  );
}

function Container58() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container59 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">LĨNH VỰC</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Truyền tải điện</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Kỹ thuật trạm biến áp</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Hệ thống điện công nghiệp</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Giải pháp lưới điện thông minh</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container62() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[16px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading8 />
      <List />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">TÀI NGUYÊN</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Chứng nhận ISO</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Quy trình an toàn</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Thư viện dự án</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Tuyển dụng</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Container63() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[16px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading9 />
      <List1 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141b2c] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">HỖ TRỢ</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Chính sách bảo mật</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Điều khoản dịch vụ</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Hỗ trợ kỹ thuật</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Liên hệ với chúng tôi</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Container64() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[16px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading10 />
      <List2 />
    </div>
  );
}

function Container57() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_192px] max-w-[inherit] px-[32px] relative size-full">
        <Container58 />
        <Container62 />
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[16px]">{`© 2024 Hạ tầng điện & Xây dựng Tuấn Lộc. Bảo lưu mọi quyền.`}</p>
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">ISO 9001:2015</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">ISO 45001:2018</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.99px] items-start relative size-full">
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[32px] pr-[31.99px] pt-[33px] relative size-full">
          <Container65 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#dbe2f9] content-stretch flex flex-col gap-[128px] items-start pb-[128px] pt-[129px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-solid border-t inset-0 pointer-events-none" />
      <Container57 />
      <HorizontalBorder7 />
    </div>
  );
}

function Container72() {
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

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">123 Industrial Ave, TP. Hồ Chí Minh</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container75() {
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

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">contact@tuanloc.vn</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container71 />
      <Container74 />
    </div>
  );
}

function LinkSvg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Link → SVG">
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

function LinkSvg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Link → SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_969)" id="Link â SVG">
          <path d={svgPaths.p10504800} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_969">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkSvg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Link → SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Link â SVG">
          <path d={svgPaths.p16521280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkSvg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Link → SVG">
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

function LinkSvg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Link → SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1000)" id="Link â SVG">
          <path d={svgPaths.p3d2e5200} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1000">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <LinkSvg />
      <LinkSvg1 />
      <LinkSvg2 />
      <LinkSvg3 />
      <LinkSvg4 />
    </div>
  );
}

function Container69() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <Container70 />
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Tier1Topbar() {
  return (
    <div className="bg-[#0a1128] content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Tier 1: Topbar">
      <Container69 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p17359280} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#b71508] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a1128] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">TUẤN LỘC</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[10px] tracking-[2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[12.5px]">{`HẠ TẦNG ĐIỆN & XÂY DỰNG`}</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181.55px]" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function LinkLogo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Link - Logo">
      <Background8 />
      <Container80 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Trang chủ</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b71508] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Sản phẩm</p>
      </div>
      <div className="absolute bg-[#b71508] bottom-[-4px] h-[2px] left-0 right-0" data-name="Horizontal Divider" />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Dự án</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Dịch vụ</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Tin tức</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Liên hệ</p>
      </div>
    </div>
  );
}

function NavigationMenu() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Navigation Menu">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container83() {
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

function Background9() {
  return (
    <div className="bg-[#b71508] relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(183,21,8,0.3),0px_4px_6px_-4px_rgba(183,21,8,0.3)] size-[40px] top-1/2" data-name="Overlay+Shadow" />
        <Container83 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5c403b] text-[10px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[10px]">HOTLINE 24/7</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container85 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a1128] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">0900-TUAN-LOC</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0 w-[154.02px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Margin />
        <Container86 />
      </div>
    </div>
  );
}

function HotlineCtaLink() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[22px] py-[12px] relative rounded-[12px] shrink-0" data-name="Hotline CTA → Link">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(183,21,8,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Background9 />
      <Container84 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[80px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <LinkLogo />
          <NavigationMenu />
          <HotlineCtaLink />
        </div>
      </div>
    </div>
  );
}

function Tier2MainNavbar() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Tier 2: Main Navbar">
      <div aria-hidden="true" className="absolute border-[#e5beb7] border-b border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Tier 2: Main Navbar:shadow" />
      <Container78 />
    </div>
  );
}

function Component2TierEnterpriseHeader() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1280px]" data-name="2-Tier Enterprise Header">
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
      <Component2TierEnterpriseHeader />
    </div>
  );
}
