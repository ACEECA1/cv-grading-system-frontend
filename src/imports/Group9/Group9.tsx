import imgBrandLogo from "./2d310aec80ab046aca9b4cc7c50dae6ca7f0cfac.png";

function BrandLogo() {
  return (
    <div className="max-w-[334px] relative rounded-[8px] shrink-0 size-[48px]" data-name="Brand Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBrandLogo} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[24px] text-center tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[32px]">Djezzy Talent Portal</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
        <BrandLogo />
        <Heading />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[17px] py-[9px] relative shrink-0 w-[162px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bb0013] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Candidate</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[9.5px] pt-[8.5px] px-[16px] relative shrink-0 w-[160px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">HR / Admin</p>
      </div>
    </div>
  );
}

function RoleToggle() {
  return (
    <div className="bg-[#f2f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Role Toggle">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start justify-center p-[4px] relative size-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Email</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Enter your email</p>
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
          <Container1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Password</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bb0013] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Forgot?</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Link />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[11px] pt-[10px] px-[17px] relative size-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Input1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#bb0013] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Button:margin">
      <Button2 />
    </div>
  );
}

function FormCandidateState() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form (Candidate State)">
      <Container />
      <Container2 />
      <ButtonMargin />
    </div>
  );
}

function FormCandidateStateMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form (Candidate State):margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <FormCandidateState />
      </div>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Footer Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e3f3c] text-[14px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[20px]">{`Don't have an account? `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic text-[#bb0013]">Register as Candidate</span>
        </p>
      </div>
    </div>
  );
}

function FooterLinkMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <FooterLink />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[32px] items-start max-w-[400px] p-[33px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e6e8ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Header />
      <RoleToggle />
      <FormCandidateStateMargin />
      <FooterLinkMargin />
    </div>
  );
}

function PublicAuthenticationLogin() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 min-h-[2048px] px-[16px] py-[756px] top-0 w-[2560px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Public Authentication: Login">
      <BackgroundBorderShadow />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <PublicAuthenticationLogin />
    </div>
  );
}