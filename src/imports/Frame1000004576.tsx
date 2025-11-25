import svgPaths from "./svg-8vuxhtobbs";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start not-italic relative shrink-0">
      <p className="font-['Prompt:Light',sans-serif] leading-[82px] relative shrink-0 text-[0px] text-[72px] text-white w-[720px]">
        <span>{`Learn to master `}</span>
        <span className="bg-clip-text bg-gradient-to-r font-['Prompt:Bold',sans-serif] from-[#db14fb] not-italic to-[#ffc700] to-[41.597%]" style={{ WebkitTextFillColor: "transparent" }}>
          financial
        </span>
        <span className="font-['Prompt:Bold',sans-serif] not-italic"> </span>education in 1:1<span className="font-['Prompt:Bold',sans-serif] not-italic"> </span>online<span className="font-['Prompt:Bold',sans-serif] not-italic"> </span>
        <span className="bg-clip-text bg-gradient-to-r font-['Prompt:Bold',sans-serif] from-[#db14fb] from-[55.347%] not-italic to-[#ffc700]" style={{ WebkitTextFillColor: "transparent" }}>
          lessons
        </span>
        <span className="bg-clip-text bg-gradient-to-r from-[#db14fb] from-[55.347%] to-[#ffc700]" style={{ WebkitTextFillColor: "transparent" }}>
          {" "}
        </span>
        with our tutors
      </p>
      <p className="font-['Prompt:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#e7e8eb] text-[18px] w-[720px]">Consectetur at nisl sed nisi sit cursus magna nibh tincidunt. Cras nisl in volutpat urna lectus. Sit adipiscing vitae tincidunt facilisis augue.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <p className="font-['Prompt:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Free Trial</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-r box-border content-stretch flex flex-col from-[#db14fb] gap-[10px] items-center ml-[560px] mt-[10px] px-[36px] py-[12px] relative rounded-[100px] to-[#ffc700]" data-name="buttons">
      <Frame />
    </div>
  );
}

function FiBsEnvelope() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi-bs-envelope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4_8914)" id="fi-bs-envelope">
          <path d={svgPaths.p7e64600} fill="var(--fill-0, #585F8C)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_8914">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[15px] items-start ml-[30px] mt-[21px] relative">
      <FiBsEnvelope />
      <p className="font-['Prompt:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#646b97] text-[16px] text-nowrap whitespace-pre">Enter your email</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#202545] h-[66px] ml-0 mt-0 rounded-[100px] w-[720px]" />
      <Buttons />
      <Frame1 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative size-full">
      <Frame2 />
      <Group />
    </div>
  );
}