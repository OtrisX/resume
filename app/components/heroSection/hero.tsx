import Image from "next/image";
import GithubLogo from "@/public/github.svg";
import LinkedinLogo from "@/public/linkedin.svg";
import ResumeLogo from "@/public/resume.svg";
import SwipeDownLogo from "@/public/swipe-down.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col h-screen">
      <div className="flex-1" />
      <div className="font-medium text-[2rem] px-2 text-[#818c91] leading-none">
        <p>Prazer, Thélio Matheus 👋</p>
      </div>
      <div className="flex overflow-hidden gap-4 mb-[-2.188REM font-black text-[#2a434d] text-[10rem] leading-none">
        <p>FRONTEND</p>
        <div className="flex overflow-hidden justify-between w-56">
          <Link
            className="flex justify-center align-middle prevent-select"
            href="https://github.com/OtrisX"
            target="_blank"
          >
            <Image src={GithubLogo} alt="Github logo" width={60} />
          </Link>
          <Link
            className="flex justify-center align-middle prevent-select"
            href="https://www.linkedin.com/in/matheusferreirabr/"
            target="_blank"
          >
            <Image src={LinkedinLogo} alt="Linkedin logo" width={60}></Image>
          </Link>
          <Link
            className="flex justify-center align-middle prevent-select"
            href=""
            target="_blank"
          >
            <Image src={ResumeLogo} alt="Resume logo" width={60}></Image>
          </Link>
        </div>
      </div>
      <div className="font-black overflow-hidden text-[12.5rem] text-[#264653] leading-none">
        <p>DEVELOPER</p>
      </div>
      <div className="font-bold text-[1.5rem] text-[#818c91] text-right">
        <div>
          <p className="mr-32">Tenho 19 anos, sou desenvolvedor front-end </p>
          <p>com 1 ano de experiência como freelancer.</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <Link href="#">
          <Image src={SwipeDownLogo} alt="Swipe down logo" width={60}></Image>
        </Link>
      </div>
    </section>
  );
}
