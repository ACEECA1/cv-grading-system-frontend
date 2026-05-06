import svgPaths from "./svg-r2s30hi2kb";
import imgAiAssistantIllustration from "./2d310aec80ab046aca9b4cc7c50dae6ca7f0cfac.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[32px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[40px]">Create AI-Powered Job Offer</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Cancel</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Heading />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Use our AI assistant to quickly draft a professional job</p>
        <p className="leading-[24px]">description from unstructured notes.</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Job Title</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">e.g. Senior Software Engineer</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[11px] pt-[10px] px-[17px] relative size-full">
          <Container3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function JobTitleInput() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Job Title Input">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Raw Job Description</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[20px]">{`Paste the hiring manager's unstructured text block here...`}</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Textarea">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[9px] relative size-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8bcb7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function RawDescriptionTextarea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px relative w-full" data-name="Raw Description Textarea">
      <Label1 />
      <Textarea />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
        <g id="Container">
          <path d={svgPaths.p3260dd80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#bb0013] content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container5 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Generate with AI</p>
      </div>
    </div>
  );
}

function ActionArea() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Action Area">
      <Button1 />
    </div>
  );
}

function ActionAreaMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Action Area:margin">
      <ActionArea />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative self-stretch shrink-0 w-[489.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container2 />
        <JobTitleInput />
        <RawDescriptionTextarea />
        <ActionAreaMargin />
      </div>
    </div>
  );
}

function AiAssistantIllustration() {
  return (
    <div className="aspect-[200/200] max-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="AI Assistant Illustration">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAiAssistantIllustration} />
      </div>
    </div>
  );
}

function ImgAiAssistantIllustrationMargin() {
  return (
    <div className="max-w-[200px] relative shrink-0 w-[200px]" data-name="Img - AI Assistant Illustration:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[24px] relative size-full">
        <AiAssistantIllustration />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">AI Assistance</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px] mb-0">Paste raw notes or bullet</p>
        <p className="leading-[20px] mb-0">points. Our AI will structure it</p>
        <p className="leading-[20px] mb-0">into a polished, brand-aligned</p>
        <p className="leading-[20px]">job posting instantly.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[197.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Container7 />
      </div>
    </div>
  );
}

function IllustrationSidePanel() {
  return (
    <div className="bg-[#f2f4f6] relative rounded-[8px] self-stretch shrink-0 w-[260.66px]" data-name="Illustration Side Panel">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[25px] relative size-full">
          <ImgAiAssistantIllustrationMargin />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function MainFormCard() {
  return (
    <div className="bg-white h-[452px] relative rounded-[8px] shrink-0 w-full" data-name="Main Form Card">
      <div aria-hidden="true" className="absolute border border-[#e0e3e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[32px] items-start p-[33px] relative size-full">
        <Container1 />
        <IllustrationSidePanel />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] px-[24px] py-[32px] relative size-full">
        <Header />
        <MainFormCard />
      </div>
    </div>
  );
}

function HrCreateJobOffer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[1024px] pb-[348px] px-[192px] top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="HR: Create Job Offer">
      <Container />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <HrCreateJobOffer />
    </div>
  );
}