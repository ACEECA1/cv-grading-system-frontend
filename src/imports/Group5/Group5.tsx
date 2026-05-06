import svgPaths from "./svg-2kk2yl0rjw";

function Container() {
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

function Container3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Search...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[11px] pl-[33px] pr-[17px] pt-[10px] relative rounded-[inherit] size-full">
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-[18.42%] content-stretch flex flex-col items-start left-[8px] top-[18.42%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #5E3F3C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <Container4 />
    </div>
  );
}

function Container5() {
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
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #5E3F3C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container2 />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="bg-[#f7f9fb] h-[64px] relative shrink-0 w-full z-[2]" data-name="Header - TopNavBar">
      <div aria-hidden="true" className="absolute border-[#e8bcb7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[32px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[40px]">Welcome back, John Doe</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Here is an overview of your recruitment activities today.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[420.86px]" data-name="Container">
      <Heading />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#bb0013] content-stretch flex gap-[7.99px] items-center px-[24px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container9 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Create New Job Offer</p>
      </div>
    </div>
  );
}

function WelcomeHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Welcome Header">
      <Container7 />
      <Button2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CVS PROCESSED</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #4D5D73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[32px] tracking-[-0.64px] w-full">
          <p className="leading-[40px]">1,204</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[8px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 8">
        <g id="Container">
          <path d={svgPaths.p19734dc0} fill="var(--fill-0, #059669)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">+12% from last week</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Metric() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Metric 1">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <Container10 />
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">AVERAGE MATCH SCORE</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #4D5D73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[32px] tracking-[-0.64px] w-full">
          <p className="leading-[40px]">76%</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#eceef0] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#059669] h-[8px] left-0 right-[24%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Metric1() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Metric 2">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[29px] pt-[25px] px-[25px] relative size-full">
        <Container17 />
        <Container20 />
        <Margin />
      </div>
    </div>
  );
}

function Metric3Paints() {
  return (
    <div className="absolute bg-white inset-[0_0.01px_0_0] rounded-[8px]" data-name="Metric 3 paints">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PENDING APPROVALS</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[21px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21">
        <g id="Container">
          <path d={svgPaths.p1574ee00} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[32px] tracking-[-0.64px] w-full">
          <p className="leading-[40px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[12px] relative shrink-0 w-[2.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 12">
        <g id="Container">
          <path d={svgPaths.p1fb03780} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Requires immediate action</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Metric2() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Metric 3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <div className="absolute bg-[rgba(255,218,214,0.2)] right-[1.02px] rounded-bl-[9999px] size-[128px] top-px" data-name="Overlay" />
          <Metric3Paints />
          <Container21 />
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function MetricsGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_146px] relative shrink-0 w-full" data-name="Metrics Grid">
      <Metric />
      <Metric1 />
      <Metric2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Recent Jobs</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bb0013] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">View All</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Heading2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[326.33px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Job Title</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[208.23px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Date Created</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[155.08px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[8px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Applicants</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[149.81px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pb-px pr-[82.55px] relative size-full">
          <Cell />
          <Cell1 />
          <Cell2 />
          <Cell3 />
        </div>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-[326.33px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
          <p className="leading-[normal]">Senior Java Developer</p>
        </div>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[208.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[16px] whitespace-nowrap">
          <p className="leading-[normal]">Oct 24, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[155.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[16.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[normal]">142</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Published</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[149.81px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="var(--fill-0, #4D5D73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0" data-name="Button">
      <Container29 />
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[82.55px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[16.5px] relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(224,227,229,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[326.33px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
          <p className="leading-[normal]">UI Designer</p>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[208.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[16px] whitespace-nowrap">
          <p className="leading-[normal]">Oct 22, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[155.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[16.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[normal]">89</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e0e3e5] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Draft</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[149.81px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="var(--fill-0, #4D5D73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0" data-name="Button">
      <Container30 />
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[82.55px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[16.5px] relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(224,227,229,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[326.33px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
          <p className="leading-[normal]">DevOps Engineer</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[208.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[16px] whitespace-nowrap">
          <p className="leading-[normal]">Oct 20, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[155.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[16.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[normal]">0</p>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#93000a] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Failed</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[149.81px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="var(--fill-0, #4D5D73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0" data-name="Button">
      <Container31 />
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[82.55px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[16.5px] relative size-full">
        <Button6 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(224,227,229,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
    </div>
  );
}

function Data15() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-[326.33px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Product Manager</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-[208.23px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Oct 18, 2023</p>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative shrink-0 w-[155.08px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[normal]">215</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Published</p>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-[149.81px]" data-name="Data">
      <Background4 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="var(--fill-0, #4D5D73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0" data-name="Button">
      <Container32 />
    </div>
  );
}

function Data19() {
  return (
    <div className="content-stretch flex flex-col items-end p-[16px] relative shrink-0 w-[82.55px]" data-name="Data">
      <Button7 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data15 />
      <Data16 />
      <Data17 />
      <Data18 />
      <Data19 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] pb-px relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="overflow-auto size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Table />
        </div>
      </div>
    </div>
  );
}

function BentoLayoutContentRecentJobsTableTakesUp2Columns() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative rounded-[8px] shrink-0 w-full" data-name="Bento Layout Content → Recent Jobs Table (Takes up 2 columns)">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <HorizontalBorder />
      <Container28 />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <WelcomeHeader />
        <MetricsGrid />
        <BentoLayoutContentRecentJobsTableTakesUp2Columns />
      </div>
    </div>
  );
}

function MainContentWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-[1024px] min-w-px relative self-stretch" data-name="Main Content Wrapper">
      <HeaderTopNavBar />
      <MainCanvas />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ed1c24] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[24px]">JD</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">John Doe</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[0.6px] w-full">
        <p className="leading-[16px]">HR Administrator</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container35 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Background5 />
      <Container34 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container33 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#bb0013] content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[228px]" data-name="Link">
      <Container37 />
      <Container38 />
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start px-[5.7px] relative shrink-0 w-[228px]" data-name="Link:css-transform">
      <div className="flex h-[32.3px] items-center justify-center relative shrink-0 w-[216.6px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container39() {
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

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Job Offers</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[228px]" data-name="Link">
      <Container39 />
      <Container40 />
    </div>
  );
}

function LinkCssTransform1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[5.7px] relative shrink-0 w-[228px]" data-name="Link:css-transform">
      <div className="flex h-[33.25px] items-center justify-center relative shrink-0 w-[216.6px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link1 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="var(--fill-0, #586377)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Candidate Pipeline</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[228px]" data-name="Link">
      <Container41 />
      <Container42 />
    </div>
  );
}

function LinkCssTransform2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[5.7px] relative shrink-0 w-[228px]" data-name="Link:css-transform">
      <div className="flex h-[30.4px] items-center justify-center relative shrink-0 w-[216.6px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
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

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Settings</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[228px]" data-name="Link">
      <Container43 />
      <Container44 />
    </div>
  );
}

function LinkCssTransform3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[5.7px] relative shrink-0 w-[228px]" data-name="Link:css-transform">
      <div className="flex h-[34.2px] items-center justify-center relative shrink-0 w-[216.6px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link3 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[732px] items-start pb-[549px] pt-px relative shrink-0 w-full" data-name="Container">
      <LinkCssTransform />
      <LinkCssTransform1 />
      <LinkCssTransform2 />
      <LinkCssTransform3 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#bb0013] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.99px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container45 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
            <p className="leading-[16px]">Post New Job</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container46() {
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

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Logout</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[228px]" data-name="Link">
      <Container46 />
      <Container47 />
    </div>
  );
}

function LinkCssTransform4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] px-[5.7px] relative shrink-0 w-[228px]" data-name="Link:css-transform">
      <div className="flex h-[32.3px] items-center justify-center relative shrink-0 w-[216.6px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link4 />
        </div>
      </div>
    </div>
  );
}

function SideNavBar() {
  return (
    <div className="absolute bg-[#bcc7de] content-stretch flex flex-col gap-[8px] h-[1024px] items-start left-0 px-[16px] py-[24px] top-0 w-[260px]" data-name="SideNavBar">
      <Margin1 />
      <Container36 />
      <Button8 />
      <LinkCssTransform4 />
    </div>
  );
}

function HrDashboardFullWidthTable() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 min-h-[1024px] pl-[260px] top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="HR Dashboard - Full Width Table">
      <MainContentWrapper />
      <SideNavBar />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <HrDashboardFullWidthTable />
    </div>
  );
}