import svgPaths from "./svg-rqbote2hrl";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[32px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[40px]">Job Board</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Find your next role.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[152.44px]" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_256px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-white col-1 h-[256px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Dummy Cards">
        <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white col-2 h-[256px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Background+Border+Shadow">
        <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white col-3 h-[256px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Background+Border+Shadow">
        <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function SimulatedBackgroundContentToShowModalOverlay() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] opacity-40 relative shrink-0 w-full" data-name="Simulated background content to show modal overlay">
      <Container />
      <Container3 />
    </div>
  );
}

function MainPageContentCanvas() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Main - Page Content Canvas">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <SimulatedBackgroundContentToShowModalOverlay />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] tracking-[0.6px] w-full">
          <p className="leading-[normal]">Search...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[11px] pl-[41px] pr-[17px] pt-[10px] relative size-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[23.68%] content-stretch flex flex-col items-start left-[12px] top-[23.68%]" data-name="Container">
      <div className="relative shrink-0 size-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path d={svgPaths.p2dbaedc0} fill="var(--fill-0, #5E3F3C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="relative shrink-0 w-[256px]" data-name="Search Bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Input />
        <Container5 />
      </div>
    </div>
  );
}

function Container8() {
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

function ButtonNotifications() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button - notifications">
      <Container8 />
    </div>
  );
}

function Container9() {
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

function ButtonSettings() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button - settings">
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <ButtonNotifications />
      <ButtonSettings />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#93000a] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">JD</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Container7 />
        <Background />
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute bg-[#f7f9fb] content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[24px] top-0" data-name="Header - TopNavBar">
      <div aria-hidden="true" className="absolute border-[#e6e8ea] border-b border-solid inset-0 pointer-events-none" />
      <SearchBar />
      <Container6 />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[1024px] min-w-px relative self-stretch" data-name="Main Content Area">
      <MainPageContentCanvas />
      <HeaderTopNavBar />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Djezzy Talent</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bcc7de] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Candidate Portal</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container11 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p2dfda000} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#ed1c24] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container12 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[20px]">Job Board</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p1de35f80} fill="var(--fill-0, #BCC7DE)" id="Icon" />
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
          <Container13 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bcc7de] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">My Applications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Nav">
      <Link />
      <Link1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #BCC7DE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <Container14 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bcc7de] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex h-[61px] items-start justify-center pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(188,199,222,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Link2 />
    </div>
  );
}

function AsideSideNavBar() {
  return (
    <div className="absolute bg-[#556880] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 p-[16px] top-0 w-[260px]" data-name="Aside - SideNavBar">
      <Margin />
      <Nav />
      <HorizontalBorder />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Apply for Senior Java Developer</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p15494480} fill="var(--fill-0, #5E3F3C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonClose() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button - close">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal Header">
      <div aria-hidden="true" className="absolute border-[#e6e8ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Heading2 />
          <ButtonClose />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[21.333px] relative shrink-0 w-[29.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 21.3333">
        <g id="Container">
          <path d={svgPaths.p357ea5e0} fill="var(--fill-0, #BB0013)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[80px] relative shrink-0 w-[64px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Upload your CV (PDF only)</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Drag and drop your file here, or click to browse.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[25px] py-[13px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Browse Files</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#efefef] relative shrink-0" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[8px] py-[3px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
          <p className="leading-[24px]">Choose File</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute inset-[2px] opacity-0" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center overflow-clip pb-[232px] relative rounded-[inherit] size-full">
        <Input2 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">No file chosen</p>
        </div>
      </div>
    </div>
  );
}

function UploadZone() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Upload Zone">
      <div aria-hidden="true" className="absolute border-2 border-[#e8bcb7] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[34px] relative size-full">
          <Margin1 />
          <Heading3Margin />
          <Margin2 />
          <Button />
          <Input1 />
        </div>
      </div>
    </div>
  );
}

function ModalBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal Body">
      <div className="overflow-auto size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[32px] relative size-full">
          <UploadZone />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e0e3e5] opacity-70 relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[9.5px] pt-[8.5px] px-[24px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Submit Application</p>
        </div>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Modal Footer">
      <div aria-hidden="true" className="absolute border-[#e6e8ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-end pb-[24px] pt-[25px] px-[24px] relative size-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white max-w-[672px] relative rounded-[12px] shrink-0 w-[672px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <ModalHeader />
        <ModalBody />
        <ModalFooter />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ModalOverlay() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(25,28,30,0.4)] content-stretch flex inset-0 items-center justify-center overflow-auto p-[24px]" data-name="Modal Overlay">
      <BackgroundBorderShadow />
    </div>
  );
}

function CandidateJobBoardUploadSlateSidebar() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 min-h-[1024px] pl-[260px] top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Candidate: Job Board Upload (Slate Sidebar)">
      <MainContentArea />
      <AsideSideNavBar />
      <ModalOverlay />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <CandidateJobBoardUploadSlateSidebar />
    </div>
  );
}