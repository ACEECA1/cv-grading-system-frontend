import svgPaths from "./svg-oyf82f5uwe";

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search jobs, applications...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f2f4f6] flex-[1_0_0] min-w-px relative rounded-[9999px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Input />
      <div className="absolute left-[15px] size-[18px] top-[9px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #5E3F3C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] max-w-[576px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #5E3F3C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container4 />
      <div className="absolute bg-[#ed1c24] right-[7.99px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #5E3F3C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full z-[2]" data-name="Header - TopNavBar">
      <div aria-hidden="true" className="absolute border-[#e6e8ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Container />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[24px] w-full">
        <p className="leading-[32px]">My Applications</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[16px] w-full">
        <p className="leading-[24px]">Track your progress and AI alignment for submitted roles.</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Heading />
      <Container7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Senior Java Developer</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Applied: Oct 12, 2023 • Ref: REQ-089</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[248.89px]" data-name="Container">
      <Heading2 />
      <Container10 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#fef3c7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PROCESSING</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container9 />
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">AI ANALYSIS STATUS</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <path d={svgPaths.p127da640} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#22c55e] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background+Shadow">
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Extracting text</p>
      </div>
    </div>
  );
}

function Step1Completed() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Step 1: Completed">
      <BackgroundShadow />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15.843px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8431 16.6667">
        <g id="Container">
          <path d={svgPaths.p6e15b80} fill="var(--fill-0, #ED1C24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-[#ed1c24] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Evaluating skills</p>
      </div>
    </div>
  );
}

function Step2InProgress() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Step 2: In-Progress">
      <BackgroundBorderShadow />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p19986780} fill="var(--fill-0, #5E3F3C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Scoring match</p>
      </div>
    </div>
  );
}

function Step3Pending() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Step 3: Pending">
      <BackgroundBorderShadow1 />
      <Container17 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <div className="absolute bg-[#e6e8ea] h-[2px] left-[48px] right-[48px] top-[18px]" data-name="Progress Line Background" />
          <div className="absolute bg-[#22c55e] h-[2px] left-[6.02%] right-[43.98%] top-[18px]" data-name="Active Progress Line" />
          <Step1Completed />
          <Step2InProgress />
          <Step3Pending />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f2f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Heading3 />
        <Container11 />
      </div>
    </div>
  );
}

function SectionActiveProcessingCard() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Section - Active Processing Card">
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Container8 />
        <Background />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Data Scientist</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Applied: Sep 28, 2023 • Ref: REQ-042</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[254.22px]" data-name="Container">
      <Heading4 />
      <Container21 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">EVALUATED</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <BackgroundBorder1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-full overflow-clip relative w-[112px]" data-name="SVG">
      <div className="absolute inset-[8%]" data-name="Vector">
        <div className="absolute inset-[-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103.04 103.04">
            <path d={svgPaths.p8e23a40} id="Vector" stroke="var(--stroke-0, #F2F4F6)" strokeWidth="8.96" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8%]" data-name="Vector">
        <div className="absolute inset-[-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103.04 103.04">
            <path d={svgPaths.p8e23a40} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeWidth="8.96" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">88%</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">MATCH</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <div className="flex h-[112px] items-center justify-center relative shrink-0 w-full" style={{ containerType: "size", "--transform-inner-width": "1200", "--transform-inner-height": "42" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none h-[100cqw]">
            <Svg />
          </div>
        </div>
        <Container24 />
      </div>
    </div>
  );
}

function MatchScoreRing() {
  return (
    <div className="col-[1/span_3] justify-self-stretch relative row-1 self-start shrink-0" data-name="Match Score Ring">
      <div aria-hidden="true" className="absolute border-[#f2f4f6] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pr-[33px] py-[16px] relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">EXPERIENCE ALIGNMENT</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Required: 4 years</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e8ea] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">|</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.25">
        <g id="Container">
          <path d={svgPaths.p26f9d500} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container32 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Your Profile: 5 years</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container28 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">MATCHED SKILLS</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-[#f0fdf4] bottom-[34px] content-stretch flex flex-col items-start left-0 px-[9px] py-[5px] rounded-[8px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Python</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-[#f0fdf4] bottom-[34px] content-stretch flex flex-col items-start left-[67.27px] px-[9px] py-[5px] rounded-[8px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Machine Learning</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="absolute bg-[#f0fdf4] bottom-[34px] content-stretch flex flex-col items-start left-[197.28px] px-[9px] py-[5px] rounded-[8px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">SQL</p>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="absolute bg-[#f0fdf4] bottom-0 content-stretch flex flex-col items-start left-0 px-[9px] py-[5px] rounded-[8px] top-[34px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Data Visualization</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading6 />
      <Container35 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">SKILLS TO DEVELOP</p>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white relative rounded-[8px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">AWS SageMaker</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-white relative rounded-[8px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Docker</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder6 />
      <BackgroundBorder7 />
    </div>
  );
}

function Container36() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[34px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading7 />
      <Container37 />
    </div>
  );
}

function Container33() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_84px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container36 />
    </div>
  );
}

function Details() {
  return (
    <div className="col-[4/span_9] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Details">
      <Container27 />
      <Container33 />
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_144px] relative shrink-0 w-full" data-name="Container">
      <MatchScoreRing />
      <Details />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Container19 />
        <Container22 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p38806900} fill="var(--fill-0, #191C1E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative size-full">
        <Container38 />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Download Submitted CV</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Withdraw Application</p>
        </div>
      </div>
    </div>
  );
}

function CardActions() {
  return (
    <div className="bg-[#f2f4f6] relative shrink-0 w-full" data-name="Card Actions">
      <div aria-hidden="true" className="absolute border-[#e6e8ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function SectionCompletedApplicationCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Section - Completed Application Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container18 />
        <CardActions />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <Header />
      <SectionActiveProcessingCard />
      <SectionCompletedApplicationCard />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main - Canvas">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start px-[62px] py-[32px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start min-w-px relative" data-name="Main Content Area">
      <HeaderTopNavBar />
      <MainCanvas />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ed1c24] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">D</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[22.5px]">Djezzy Talent</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[22.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CANDIDATE</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[118.52px]" data-name="Container">
      <Heading1 />
      <Container41 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
          <Background1 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container39 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[17.417px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 17.4167">
        <g id="Container">
          <path d={svgPaths.p30fc2f80} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container43 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[16px] whitespace-nowrap">
            <p className="leading-[24px]">Job Board</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[18.333px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 18.3333">
        <g id="Container">
          <path d={svgPaths.p90420c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#ed1c24] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container44 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
            <p className="leading-[24px]">My Applications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px relative w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.p33af4a10} fill="var(--fill-0, #E2E8F0)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Container46 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Log Out</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[16px] relative size-full">
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function SidebarBottomFooter() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sidebar Bottom Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[17px] px-[8px] relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function SideNavBarDarkSlateBlueSidebarTheme() {
  return (
    <div className="absolute bg-[#556880] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 p-[16px] top-0 w-[260px]" data-name="SideNavBar (Dark Slate/Blue Sidebar Theme)">
      <Margin1 />
      <Container42 />
      <SidebarBottomFooter />
    </div>
  );
}

function CandidateMyApplicationsSlateSidebar() {
  return (
    <div className="absolute content-stretch flex h-[1024px] items-start justify-center left-0 pl-[260px] top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Candidate: My Applications (Slate Sidebar)">
      <MainContentArea />
      <SideNavBarDarkSlateBlueSidebarTheme />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <CandidateMyApplicationsSlateSidebar />
    </div>
  );
}