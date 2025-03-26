import threeImage from "@/assets/images/threeImage.webp";
import heroImage from "@/assets/images/heroImage.png";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <section className="w-full xl:min-h-screen min-h-full md:h-[1000px] h-full flex flex-col md:justify-end justify-start items-center font-gabarito bg-svg relative px-6 md:pt-0 pt-32">
      <div className="w-full flex flex-col justify-start items-center gap-4">
        <h2 className="md:text-[44px] text-[26px] font-medium text-blueShade w-full max-w-[701px] text-center md:leading-12 leading-7">
        Boost your chances with AI-Human co-pilot for job applications
        </h2>
        <p className="md:text-base sm:text-sm text-xs font-normal w-full max-w-[495px] text-center md:leading-5 leading-4 mb-4 text-greyDark">
          Leverage the power of AI and human expertise to optimize your resume,
          write tailored cover letters, and apply to jobs with confidence.
        </p>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4 w-full">
          <button className="px-6 py-3 rounded-lg sm:text-base text-xs font-normal text-white bg-gradient-to-br from-[#0967D2] to-[#09CBD2] border-0 border-transparent cursor-pointer sm:w-fit w-full outline-none">
            Apply smarter with AI
          </button>
          <button className="px-6 py-3 rounded-lg sm:text-base text-xs font-normal text-primary bg-transparent border border-primary cursor-pointer sm:w-fit w-full outline-none">
            Generate resume
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center gap-1 mt-[42px] mb-[37px]">
        <Image src={threeImage} alt="users" className="sm:w-[98px] w-[69px] object-contain" width={98} height={48} priority/>
        <div className="flex flex-col justify-start items-start gap-0">
          <div className="flex justify-start items-center">
            <svg
            className="sm:size-[17px] size-[14px]"
              width="17"
              height="17"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1 0.298828L11.0308 6.24128H17.2791L12.2241 9.91392L14.155 15.8564L9.1 12.1837L4.04505 15.8564L5.97587 9.91392L0.920914 6.24128H7.16918L9.1 0.298828Z"
                fill="#E9B209"
              />
            </svg>
            <svg
            className="sm:size-[17px] size-[14px]"
              width="17"
              height="17"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1 0.298828L11.0308 6.24128H17.2791L12.2241 9.91392L14.155 15.8564L9.1 12.1837L4.04505 15.8564L5.97587 9.91392L0.920914 6.24128H7.16918L9.1 0.298828Z"
                fill="#E9B209"
              />
            </svg>
            <svg
            className="sm:size-[17px] size-[14px]"
              width="17"
              height="17"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1 0.298828L11.0308 6.24128H17.2791L12.2241 9.91392L14.155 15.8564L9.1 12.1837L4.04505 15.8564L5.97587 9.91392L0.920914 6.24128H7.16918L9.1 0.298828Z"
                fill="#E9B209"
              />
            </svg>
            <svg
            className="sm:size-[17px] size-[14px]"
              width="17"
              height="17"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1 0.298828L11.0308 6.24128H17.2791L12.2241 9.91392L14.155 15.8564L9.1 12.1837L4.04505 15.8564L5.97587 9.91392L0.920914 6.24128H7.16918L9.1 0.298828Z"
                fill="#E9B209"
              />
            </svg>
            <svg
            className="sm:size-[17px] size-[14px]"
              width="17"
              height="17"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1 0.298828L11.0308 6.24128H17.2791L12.2241 9.91392L14.155 15.8564L9.1 12.1837L4.04505 15.8564L5.97587 9.91392L0.920914 6.24128H7.16918L9.1 0.298828Z"
                fill="#E9B209"
              />
            </svg>
          </div>
          <p className="sm:text-sm text-xs text-blueShade font-medium">+1000+ users</p>
        </div>
      </div>
      <Image
        src={heroImage}
        alt="Hero section Image"
        className="w-[1068px]"
        width={1068}
      />
    </section>
  );
};
