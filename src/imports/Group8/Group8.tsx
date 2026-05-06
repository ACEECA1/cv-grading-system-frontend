import svgPaths from "./svg-kslot0602c";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[32px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[40px]">Candidate Pipeline</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#bb0013] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Post New Job</p>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Page Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[164.45px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px] mb-0">CANDIDATE</p>
          <p className="leading-[16px]">NAME</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[221.3px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pt-[23.5px] px-[24px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">JOB TITLE</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[141.56px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px] mb-0">MATCH</p>
          <p className="leading-[16px]">SCORE</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[171.44px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px] mb-0">APPLICATION</p>
          <p className="leading-[16px]">DATE</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[143.2px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pt-[23.5px] px-[24px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">STATUS</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="relative shrink-0 w-[112.05px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[25px] pt-[23.5px] px-[24px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">ACTIONS</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#f7f9fb] content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Data() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[27px] pt-[26px] px-[24px] right-[789.55px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[164.45px] pb-[17px] pt-[16px] px-[24px] right-[568.25px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Senior Frontend</p>
        <p className="leading-[20px]">Developer</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#22c55e] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">92%</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="absolute content-stretch flex items-center left-[409.75px] right-[450.69px] top-[20.5px]" data-name="Data">
      <BackgroundBorder />
    </div>
  );
}

function Data3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[527.31px] pb-[27px] pt-[26px] px-[24px] right-[255.25px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Oct 24, 2023</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[8px] py-[3.5px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#166534] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Interviewing</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[698.75px] pb-[25.5px] pt-[24.5px] px-[24px] right-[112.05px] top-0" data-name="Data">
      <Background />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container2 />
    </div>
  );
}

function Data5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start justify-end left-[841.95px] px-[24px] py-[16px] right-0 top-[0.5px]" data-name="Data">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Row() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Row 1">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-b border-solid inset-0 pointer-events-none" />
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
    </div>
  );
}

function Data6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[23px] pt-[22px] px-[24px] right-[789.55px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Michael Chen</p>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[164.45px] pb-[23px] pt-[22px] px-[24px] right-[568.25px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">UX Designer</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#fefce8] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#eab308] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a16207] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">68%</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="absolute content-stretch flex items-center left-[409.75px] right-[450.69px] top-[16.5px]" data-name="Data">
      <BackgroundBorder1 />
    </div>
  );
}

function Data9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[527.31px] pb-[23px] pt-[22px] px-[24px] right-[255.25px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Oct 22, 2023</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#fef9c3] content-stretch flex items-start px-[8px] py-[3.5px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#854d0e] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Screening</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[698.75px] pb-[21.5px] pt-[20.5px] px-[24px] right-[112.05px] top-0" data-name="Data">
      <Background1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container4 />
    </div>
  );
}

function Data11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start justify-end left-[841.95px] px-[24px] py-[16px] right-0 top-[0.5px]" data-name="Data">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Row1() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Row 2">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-b border-solid inset-0 pointer-events-none" />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Data12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[23px] pt-[22px] px-[24px] right-[789.55px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Elena Rodriguez</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[164.45px] pb-[23px] pt-[22px] px-[24px] right-[568.25px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Marketing Manager</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">45%</p>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="absolute content-stretch flex items-center left-[409.75px] right-[450.69px] top-[16.5px]" data-name="Data">
      <BackgroundBorder2 />
    </div>
  );
}

function Data15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[527.31px] pb-[23px] pt-[22px] px-[24px] right-[255.25px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Oct 20, 2023</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e0e3e5] content-stretch flex items-start px-[8px] py-[3.5px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Rejected</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[698.75px] pb-[21.5px] pt-[20.5px] px-[24px] right-[112.05px] top-0" data-name="Data">
      <Background2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container6 />
    </div>
  );
}

function Data17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start justify-end left-[841.95px] px-[24px] py-[16px] right-0 top-[0.5px]" data-name="Data">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Row2() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Row 3">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-b border-solid inset-0 pointer-events-none" />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
      <Data16 />
      <Data17 />
    </div>
  );
}

function Data18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[22.5px] pt-[22px] px-[24px] right-[789.55px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">David Kim</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[164.45px] pb-[22.5px] pt-[22px] px-[24px] right-[568.25px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">DevOps Engineer</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#22c55e] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">88%</p>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="absolute content-stretch flex items-center left-[409.75px] right-[450.69px] top-[16.5px]" data-name="Data">
      <BackgroundBorder3 />
    </div>
  );
}

function Data21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[527.31px] pb-[22.5px] pt-[22px] px-[24px] right-[255.25px] top-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Oct 18, 2023</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-start px-[8px] py-[3.5px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e40af] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Offer Sent</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[698.75px] pb-[21px] pt-[20.5px] px-[24px] right-[112.05px] top-0" data-name="Data">
      <Background3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container8 />
    </div>
  );
}

function Data23() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start justify-end left-[841.95px] px-[24px] py-[16px] right-0 top-[0.5px]" data-name="Data">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Row3() {
  return (
    <div className="h-[64.5px] relative shrink-0 w-full" data-name="Row 4">
      <Data18 />
      <Data19 />
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto pb-px relative size-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Showing 1 to 4 of 45 candidates</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
        <g id="Container">
          <path d={svgPaths.p30c9c200} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
        <g id="Container">
          <path d={svgPaths.p2ba68100} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function PaginationFooter() {
  return (
    <div className="bg-[#f7f9fb] relative shrink-0 w-full" data-name="Pagination Footer">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function DataTableCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Data Table Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Table />
        <PaginationFooter />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] pb-[523px] pt-[32px] px-[32px] relative size-full">
        <PageHeader />
        <DataTableCard />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[20px] w-full">
        <p className="leading-[28px]">John Doe</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">HR Administrator</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#bb0013] content-stretch flex flex-col items-center justify-center pl-[70.05px] pr-[70.06px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Post New Job</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Button11 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #586377)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container16 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
            <p className="leading-[16px]">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p1230f680} fill="var(--fill-0, #586377)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container17 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
            <p className="leading-[16px]">Job Offers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#bb0013] content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[227px]" data-name="Link">
      <Container18 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Candidate Pipeline</p>
      </div>
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.68px] pr-[5.67px] py-px relative shrink-0 w-[227px]" data-name="Link:css-transform">
      <div className="flex h-[30.4px] items-center justify-center relative shrink-0 w-[215.65px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #586377)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container19 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
            <p className="leading-[16px]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Link />
        <Link1 />
        <LinkCssTransform />
        <Link3 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #586377)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container21 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
            <p className="leading-[16px]">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link4 />
      </div>
    </div>
  );
}

function AsideSideNavBar() {
  return (
    <div className="absolute bg-[#bcc7de] content-stretch flex flex-col gap-[8px] h-[1088px] items-start left-0 pl-[16px] pr-[17px] py-[24px] top-[64px] w-[260px]" data-name="Aside - SideNavBar">
      <div aria-hidden="true" className="absolute border-[#e8bcb7] border-r border-solid inset-0 pointer-events-none" />
      <Margin />
      <ButtonMargin />
      <Nav />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#bb0013] text-[24px] tracking-[-0.24px] whitespace-nowrap">
          <p className="leading-[32px]">Djezzy Talent Portal</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[36px] relative shrink-0 w-[32px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 36">
        <g id="Container">
          <path d={svgPaths.p121cc980} fill="var(--fill-0, #BB0013)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Container">
          <path d={svgPaths.p1988dd00} fill="var(--fill-0, #BB0013)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute bg-[#f7f9fb] content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[24px] top-0 w-[1280px]" data-name="TopNavBar">
      <div aria-hidden="true" className="absolute border-[#e8bcb7] border-b border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container23 />
    </div>
  );
}

function HrCandidatePipeline() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1152px] items-start left-0 min-h-[1088px] pl-[260px] pt-[64px] top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="HR: Candidate Pipeline">
      <MainContent />
      <AsideSideNavBar />
      <TopNavBar />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <HrCandidatePipeline />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}