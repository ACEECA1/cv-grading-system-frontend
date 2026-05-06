import svgPaths from "./svg-upyjgdgql6";

function Background() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bb0013] text-[18px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[24px]">JD</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start pb-[8px] relative shrink-0 w-[48px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111c2d] text-[20px] tracking-[0.6px] w-full">
        <p className="leading-[28px]">John Doe</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">HR Administrator</p>
      </div>
    </div>
  );
}

function UserProfileMinimal() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User Profile Minimal">
      <Margin />
      <Container />
      <Container1 />
    </div>
  );
}

function UserProfileMinimalMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="User Profile Minimal:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <UserProfileMinimal />
      </div>
    </div>
  );
}

function ButtonCta() {
  return (
    <div className="bg-[#bb0013] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[8px] w-[227px]" data-name="Button - CTA">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Post New Job</p>
      </div>
    </div>
  );
}

function ButtonCtaCssTransform() {
  return (
    <div className="relative shrink-0 w-[228px]" data-name="Button - CTA:css-transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[5.68px] pr-[6.67px] pt-[0.8px] relative size-full">
        <div className="flex h-[30.4px] items-center justify-center relative shrink-0 w-[215.65px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none scale-x-95 scale-y-95">
            <ButtonCta />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
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

function LinkInactive() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[227px]" data-name="Link - Inactive">
      <Container2 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Dashboard</p>
      </div>
    </div>
  );
}

function LinkInactiveCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.68px] pr-[5.67px] relative shrink-0 w-[227px]" data-name="Link - Inactive:css-transform">
      <div className="flex h-[32.3px] items-center justify-center relative shrink-0 w-[215.65px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkInactive />
        </div>
      </div>
    </div>
  );
}

function Container3() {
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

function LinkInactive1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[227px]" data-name="Link - Inactive">
      <Container3 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Job Offers</p>
      </div>
    </div>
  );
}

function LinkInactiveCssTransform1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.68px] pr-[5.67px] relative shrink-0 w-[227px]" data-name="Link - Inactive:css-transform">
      <div className="flex h-[33.25px] items-center justify-center relative shrink-0 w-[215.65px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkInactive1 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
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

function LinkActive() {
  return (
    <div className="bg-[#bb0013] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[227px]" data-name="Link - Active">
      <Container4 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Candidate Pipeline</p>
      </div>
    </div>
  );
}

function LinkActiveCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.68px] pr-[5.67px] relative shrink-0 w-[227px]" data-name="Link - Active:css-transform">
      <div className="flex h-[30.4px] items-center justify-center relative shrink-0 w-[215.65px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkActive />
        </div>
      </div>
    </div>
  );
}

function Container5() {
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

function LinkInactive2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[227px]" data-name="Link - Inactive">
      <Container5 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Settings</p>
      </div>
    </div>
  );
}

function LinkInactiveCssTransform2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5.68px] pr-[5.67px] relative shrink-0 w-[227px]" data-name="Link - Inactive:css-transform">
      <div className="flex h-[34.2px] items-center justify-center relative shrink-0 w-[215.65px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <LinkInactive2 />
        </div>
      </div>
    </div>
  );
}

function NavigationLinks() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Navigation Links">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pb-[536px] pt-[25.8px] relative size-full">
        <LinkInactiveCssTransform />
        <LinkInactiveCssTransform1 />
        <LinkActiveCssTransform />
        <LinkInactiveCssTransform2 />
      </div>
    </div>
  );
}

function Container6() {
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

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[227px]" data-name="Link">
      <Container6 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#586377] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Logout</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[5.68px] pr-[5.67px] py-px relative size-full">
        <div className="flex h-[32.3px] items-center justify-center relative shrink-0 w-[215.65px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
          <div className="flex-none scale-x-95 scale-y-95">
            <Link />
          </div>
        </div>
      </div>
    </div>
  );
}

function SideNavBar() {
  return (
    <div className="absolute bg-[#bcc7de] content-stretch flex flex-col gap-[8px] h-[1063px] items-start left-0 pb-[24px] pl-[16px] pr-[17px] pt-[88px] top-0 w-[260px]" data-name="SideNavBar">
      <div aria-hidden="true" className="absolute border-[#e8bcb7] border-r border-solid inset-0 pointer-events-none" />
      <UserProfileMinimalMargin />
      <ButtonCtaCssTransform />
      <NavigationLinks />
      <Footer />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContextualBackLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Contextual Back Link">
      <Container7 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#545f73] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Back to Pipeline</p>
      </div>
    </div>
  );
}

function TextBasedIdentity() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[9999px] shrink-0 size-[64px]" data-name="Text-based Identity">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#bb0013] text-[32px] text-center tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[40px]">DK</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[32px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[40px]">David Kim</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Senior Java Backend Engineer</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[230.31px]" data-name="Container">
      <Heading />
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <TextBasedIdentity />
        <Container9 />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-full overflow-clip relative w-[64px]" data-name="SVG">
      <div className="absolute inset-[5.79%]" data-name="Vector">
        <div className="absolute inset-[-4.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9218 61.9218">
            <path d={svgPaths.p384e2ac0} id="Vector" stroke="var(--stroke-0, #E0E3E5)" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[5.79%]" data-name="Vector">
        <div className="absolute inset-[-4.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9218 61.9218">
            <path d={svgPaths.p384e2ac0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeDasharray="156.44 177.78" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[64px]" data-name="Container">
      <div className="flex flex-[1_0_0] h-[64px] items-center justify-center min-w-px relative" style={{ containerType: "size", "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none h-[100cqw]">
          <Svg />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[17.19px] not-italic text-[#191c1e] text-[12px] top-[32px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">88%</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[80px] pr-[33.62px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Overall</p>
        <p className="leading-[20px]">Match</p>
      </div>
    </div>
  );
}

function MatchScoreRing() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Match Score Ring">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p38806900} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryAction() {
  return (
    <div className="bg-[#bb0013] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button - Primary Action">
      <Container14 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Download CV</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <MatchScoreRing />
        <ButtonPrimaryAction />
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] relative rounded-[8px] shrink-0 w-full" data-name="Header Section">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[41px] pt-[33px] px-[33px] relative size-full">
          <Container8 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#191c1e] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[10px] pt-[8px] px-[24px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] text-center whitespace-nowrap">
          <p className="leading-[28px]">Evaluation Overview</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[10px] pt-[8px] px-[24px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[20px] text-center whitespace-nowrap">
          <p className="leading-[28px]">Interview Guides</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[10px] pt-[8px] px-[24px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[20px] text-center whitespace-nowrap">
          <p className="leading-[28px]">Parsed Profile</p>
        </div>
      </div>
    </div>
  );
}

function TabsNavigation() {
  return (
    <div className="content-stretch flex items-start pb-px relative shrink-0 w-full" data-name="Tabs Navigation">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-b border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 14.25">
        <g id="Container">
          <path d={svgPaths.p1068c880} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#8b5cf6] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">{`AI Recommendation & Reasoning`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background1 />
        <Heading1 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17.5px] pt-[15.75px] px-[17px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
          <p className="leading-[22.75px] mb-0">David is a strong conceptual fit for the Backend Engineering role. His deep expertise in Java and Spring Boot perfectly aligns with</p>
          <p className="leading-[22.75px] mb-0">core requirements. However, his lack of containerization (Docker, Kubernetes) experience may require ramp-up time for</p>
          <p className="leading-[22.75px]">deployment tasks. Proceed with technical screening focusing on his adaptability to DevOps practices.</p>
        </div>
      </div>
    </div>
  );
}

function SectionAiRecommendationCard() {
  return (
    <div className="bg-[rgba(188,199,222,0.2)] relative rounded-[8px] shrink-0 w-full" data-name="Section - AI Recommendation Card">
      <div aria-hidden="true" className="absolute border border-[#bcc7de] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Container15 />
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p24c05900} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container17 />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Skills Analysis</p>
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">MATCHED SKILLS</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #065F46)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[5.5px] pt-[4.5px] px-[17px] relative size-full">
          <Container20 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Java</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #065F46)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.99px] items-center pb-[5.5px] pt-[4.5px] px-[17px] relative size-full">
          <Container21 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Spring Boot</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #065F46)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[5.5px] pt-[4.5px] px-[17px] relative size-full">
          <Container22 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #065F46)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[5.5px] pt-[4.5px] px-[17px] relative size-full">
          <Container23 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Microservices</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, #065F46)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.99px] items-center pb-[5.5px] pt-[4.5px] px-[17px] relative size-full">
          <Container24 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">REST API</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading3 />
        <Container19 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">MISSING SKILLS</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p308a4a00} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[5.5px] pt-[4.5px] px-[17px] relative size-full">
          <Container27 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Docker</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p308a4a00} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.99px] items-center pb-[5.5px] pt-[4.5px] px-[17px] relative size-full">
          <Container28 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">CI/CD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p308a4a00} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.99px] items-center pb-[5.5px] pt-[4.5px] px-[17px] relative size-full">
          <Container29 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Kubernetes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder6 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative size-full">
        <Heading4 />
        <Container26 />
      </div>
    </div>
  );
}

function SectionSkillsAnalysisCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Section - Skills Analysis Card">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Heading2 />
        <Container18 />
        <Container25 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.p9c26380} fill="var(--fill-0, #545F73)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container30 />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Role Alignment</p>
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Experience</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[15px]">EXCEEDS</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading6 />
        <Background2 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Required</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">4 years</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex h-[25px] items-start justify-between pb-[5px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-b border-solid inset-0 pointer-events-none" />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Candidate</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5 years</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <HorizontalBorder />
        <Container36 />
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#f7f9fb] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Education</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[15px]">MATCH</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading7 />
        <Background3 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Required</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">{`Master's Degree`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e0e3e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[5px] relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Candidate</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[7.015px] relative shrink-0 w-[9.508px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50833 7.01458">
        <g id="Container">
          <path d={svgPaths.p25f8ca80} fill="var(--fill-0, #065F46)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-px relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">{`Master's in CS`}</p>
          </div>
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pt-[4px] relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <HorizontalBorder1 />
        <Container43 />
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#f7f9fb] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_114px] relative size-full">
        <BackgroundBorder9 />
        <BackgroundBorder10 />
      </div>
    </div>
  );
}

function SectionAlignmentCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Section - Alignment Card">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Heading5 />
        <Container31 />
      </div>
    </div>
  );
}

function Tab1EvaluationOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Tab 1: Evaluation Overview">
      <SectionAiRecommendationCard />
      <SectionSkillsAnalysisCard />
      <SectionAlignmentCard />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-w-px relative self-stretch" data-name="Main Content Canvas">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] pb-[32px] pt-[64px] px-[32px] relative size-full">
        <ContextualBackLink />
        <HeaderSection />
        <TabsNavigation />
        <Tab1EvaluationOverview />
      </div>
    </div>
  );
}

function Container47() {
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

function Container50() {
  return (
    <div className="h-[36px] mr-[-0.01px] relative shrink-0 w-[32px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 36">
        <g id="Container">
          <path d={svgPaths.p121cc980} fill="var(--fill-0, #BB0013)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="mr-[-0.01px] relative shrink-0 size-[36px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Container">
          <path d={svgPaths.p1988dd00} fill="var(--fill-0, #BB0013)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute bg-[#f7f9fb] content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[24px] top-0 w-[1280px]" data-name="Header - TopNavBar">
      <div aria-hidden="true" className="absolute border-[#e8bcb7] border-b border-solid inset-0 pointer-events-none" />
      <Container47 />
      <Container48 />
    </div>
  );
}

function HrDetailedEvaluationTabbedView() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 min-h-[1063px] pl-[260px] top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="HR: Detailed Evaluation - Tabbed View">
      <SideNavBar />
      <MainContentCanvas />
      <HeaderTopNavBar />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <HrDetailedEvaluationTabbedView />
    </div>
  );
}