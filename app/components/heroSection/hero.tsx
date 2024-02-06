import Image from "next/image";
import GithubLogo from "@/public/github.svg";
import LinkedinLogo from "@/public/linkedin.svg";
import ResumeLogo from "@/public/resume.svg";
import SwipeDownLogo from "@/public/swipe-down.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col h-screen align-middle">
      <div className="flex-1" />

      <div
        className="
      font-medium  text-[#818c91] leading-none
      px-1
      text-[0.2 rem]
      md:text-[1.3rem]
      "
      >
        <p>Prazer, Thélio Matheus 👋</p>
      </div>

      <div
        className="
      flex overflow-hidden gap-4  font-black text-[#2a434d] leading-none
      text-[3rem]
      md:text-[5rem]
      "
      >
        <p>FRONTEND</p>

        <div
          className="flex gap-2 md:gap-4
        w-24
        md:w-36
        "
        >
          <Link
            className="flex justify-center align-middle prevent-select"
            href="https://github.com/OtrisX"
            target="_blank"
          >
            <Image src={GithubLogo} alt="Github logo" />
          </Link>
          <Link
            className="flex justify-center align-middle prevent-select"
            href="https://www.linkedin.com/in/matheusferreirabr/"
            target="_blank"
          >
            <Image src={LinkedinLogo} alt="Linkedin logo"></Image>
          </Link>
          <Link
            className="flex justify-center align-middle prevent-select"
            href=""
            target="_blank"
          >
            <Image src={ResumeLogo} alt="Resume logo"></Image>
          </Link>
        </div>
      </div>
      <div
        className="
      font-black overflow-hidden  text-[#264653] leading-none
      text-[4rem]
      md:text-[7rem]
      "
      >
        <p>DEVELOPER</p>
      </div>
      <div
        className="
      font-bold  text-[#818c91] text-right
      text-[0.9rem]
      md:text-[1.3rem]
      "
      >
        <p className="mr-10">Tenho 19 anos, sou desenvolvedor front-end </p>
        <p>com 1 ano de experiência como freelancer.</p>
      </div>

      <div
        className="flex justify-center items-center flex-1
        
      "
      >
        <Link href="#" className="w-[50px]">
          <Image src={SwipeDownLogo} alt="Swipe down logo"></Image>
        </Link>
      </div>
    </section>
  );
}
