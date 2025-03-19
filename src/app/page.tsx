import { HeroSection } from '@/components/landing/heroSection';
import { features } from '@/data/landing/features';
import Image from 'next/image';
import paper from '@/assets/images/paper.svg';
import ball from '@/assets/images/ball.png';
import paper2 from '@/assets/images/paper2.png';
import { steps } from '@/data/landing/steps';
import { smartApply } from '@/data/landing/smartApply';
import cv from '@/assets/images/cv.png';
import mentor from '@/assets/images/mentor.png';
import { mentorData } from '@/data/landing/mentor';
import { Star, StarHalf } from 'lucide-react';
import mercy from '@/assets/images/mercy.png';
import dashboard2 from '@/assets/images/dashboard2.png';
import { FaqSection } from '@/components/landing/faqsection';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-start w-full min-h-screen gap-8 pb-24 bg-white">
        <HeroSection />
        <section className="w-full flex flex-col justify-start items-start gap-[35px] max-w-[1240px] mx-auto xl:px-0 sm:px-6 px-6 py-10" id='features'>
          <h4 className="text-base font-normal text-lightGrey">Key features</h4>
          <section className="grid w-full grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-y-10 gap-x-16">
            {features.map((feature, index) => (
              <div
                className="flex flex-col justify-start items-start gap-2 w-full max-w-[320px]"
                key={index}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-[42px] h-[47px]"
                  width={42}
                  height={47}
                />
                <p className="text-base font-medium leading-6 text-black sm:text-xl">
                  {feature.title}
                </p>
                <p className="text-base leading-5 text-greyDark">
                  {feature.desc}
                </p>
              </div>
            ))}
          </section>
        </section>

        <section className="w-full py-14 max-w-[1275px] xl:px-0 px-5">
          <section className="w-full rounded-3xl md:py-[53px] py-5 md:px-[45px] px-6 bg-gradient-to-t from-[#0967D2] to-[#09CBD2] flex md:flex-row flex-col justify-between items-center md:gap-0 gap-16">
            <div className="w-full max-w-[586px] flex flex-col justify-start items-start gap-5">
              <p className="lg:text-[34px] text-[26px] text-white font-bold lg:leading-10 leading-6 w-full lg:max-w-[420px] max-w-[284px]">
                Why job searching shouldn&apos;t be this hard
              </p>
              <p className="text-sm font-normal leading-5 text-white lg:text-base">
                Job hunting is exhausting, crafting the perfect resume,
                tailoring applications, keeping track of where you&apos;ve
                applied, and answering the same job questions repeatedly. What
                if there was a smarter way? With AI-powered resume optimization,
                job tracking, and AI-assisted applications, this platform helps
                you stay organized, improve your chances, and apply to more jobs
                with less effort.
              </p>
              <button className="px-6 py-3 text-xs bg-white rounded-lg outline-none cursor-pointer text-primary md:text-base">
                Apply for a job
              </button>
            </div>
            <div className="relative">
              <Image src={paper} alt="paper" />
              <Image
                src={ball}
                alt="ball"
                className="absolute -top-2 -left-2 md:size-[62px] size-[53px]"
                width={62}
                height={62}
              />
            </div>
          </section>
        </section>

        <section className="w-full py-10 flex flex-col justify-start items-center gap-12 max-w-[1275px] xl:px-0 px-5" id='how-it-works'>
          <div className="flex flex-col justify-start items-center gap-3 w-full max-w-[407px] text-center">
            <p className="text-xs font-normal uppercase text-lightGrey">
              HOW IT WORKS
            </p>
            <p className="text-xl font-medium leading-tight text-blueShade md:text-4xl sm:text-2xl">
              Land your next job faster
            </p>
            <p className="text-xs font-normal leading-tight md:text-base sm:text-sm text-greyDark">
              AI-powered tools to refine your resume, craft the perfect cover
              letter, and apply seamlessly.
            </p>
          </div>
          <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3 w-full sm:max-w-full max-w-[400px]">
            {steps.map((step, index) => (
              <div
                className="flex flex-col items-start justify-start w-full gap-4 p-3 bg-white lg:p-4 sm:rounded-3xl rounded-2xl shadow-card"
                key={index}
              >
                <div
                  className="sm:rounded-t-[20px] rounded-t-xl w-full"
                  style={{ backgroundColor: step.bg }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={340}
                    height={227}
                    className="mx-auto"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-2 px-4 py-2 lg:px-6 lg:py-4">
                  <p
                    style={{ color: step.text }}
                    className="text-xs font-medium uppercase"
                  >
                    STEP {index + 1}
                  </p>
                  <p className="text-base font-medium text-blueShade lg:text-xl">
                    {step.title}
                  </p>
                  <p className="text-xs font-normal leading-5 text-lightGrey-05 lg:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </section>
          <button className="px-5 py-2 text-sm text-white rounded-lg outline-none cursor-pointer bg-primary md:py-3 md:px-6 md:text-base">
            Get started now
          </button>
        </section>

        <section className="flex flex-col-reverse items-center justify-center w-full gap-12 px-5 py-10 lg:flex-row lg:items-start lg:gap-28 sm:px-0">
          <Image
            src={paper2}
            alt="let ai apply for you"
            className="sm:w-[405px] sm:h-[388px] w-[80%] sm:max-w-full max-w-[322px] object-contain h-auto"
            width={405}
            height={388}
          />
          <section className="flex flex-col items-start justify-start gap-3">
            <p className="text-xs font-normal uppercase text-lightGrey">
              AI-POWERED JOB SEARCH, TAILORED FOR YOU
            </p>
            <p className="max-w-[489px] w-full md:text-4xl sm:text-2xl text-xl leading-tight font-medium">
              <span className="text-lightOrange-04">Apply smarter</span>,
              optimize better and get the right job{' '}
              <span className="text-lightOrange-04">with AI</span>
            </p>
            <p className="md:text-base text-sm font-normal sm:w-[372px] w-full leading-tight text-greyDark">
              You&apos;re not alone in your job search, our AI is here to make
              things easier
            </p>
            <p className="py-1 text-xs font-normal text-tGray">
              Here&apos;s how AI simplifies your job search:
            </p>
            <section className="flex flex-col justify-start items-start gap-6 w-full sm:max-w-[514px] max-w-full">
              {smartApply.map((content, index) => (
                <div
                  className="flex justify-start items-start gap-1.5"
                  key={index}
                >
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.91892 4.88672L11.3278 11.3967L17.8378 13.8056L11.3278 16.2146L8.91892 22.7246L6.51 16.2146L0 13.8056L6.51 11.3967L8.91892 4.88672Z"
                      fill="url(#paint0_linear_548_66841)"
                    />
                    <path
                      d="M17.5376 0.724609L18.742 3.97961L21.997 5.18407L18.742 6.38853L17.5376 9.64353L16.3331 6.38853L13.0781 5.18407L16.3331 3.97961L17.5376 0.724609Z"
                      fill="url(#paint1_linear_548_66841)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_548_66841"
                        x1="0"
                        y1="13.8056"
                        x2="17.8378"
                        y2="13.8056"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0967D2" />
                        <stop offset="1" stopColor="#09CBD2" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_548_66841"
                        x1="13.0781"
                        y1="5.18407"
                        x2="21.997"
                        y2="5.18407"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0967D2" />
                        <stop offset="1" stopColor="#09CBD2" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-sm font-medium leading-tight text-black md:text-base">
                    {content.title}:{' '}
                    <span className="text-greyDark">{content.desc}</span>
                  </p>
                </div>
              ))}
              <button className="px-5 py-2 text-sm text-white rounded-lg outline-none cursor-pointer bg-primary md:py-3 md:px-6 md:text-base">
                Get started for free
              </button>
            </section>
          </section>
        </section>
        <section className="flex items-center justify-center w-full h-full p-6 overflow-x-hidden xl:p-0">
          <section className="w-full max-w-[1276px] md:p-11 px-5 py-10 rounded-3xl bg-white shadow-card2 flex lg:flex-row flex-col justify-center items-center gap-2.5">
            <section className="max-w-[493px] w-full flex flex-col justify-start items-start gap-3">
              <p className="text-xs font-normal uppercase text-lightGrey">
                CHOOSE A TEMPLATE! STAND OUT!
              </p>
              <p className="text-xl font-medium leading-none text-black md:text-4xl sm:text-2xl">
                Find the perfect resume template for you
              </p>
              <p className="text-xs font-normal leading-tight md:text-base sm:text-sm text-greyDark">
                Choose from a variety of professionally designed templates that
                fit your role and style. Whether you prefer a modern, creative,
                or classic look, we&apos;ve got you covered
              </p>
              <button className="px-5 py-2 mt-3 text-sm text-white rounded-lg outline-none cursor-pointer bg-primary md:py-3 md:px-6 md:text-base">
                Choose a template
              </button>
            </section>
            <Image
              src={cv}
              alt="cv"
              width={591}
              height={401}
              className="md:w-[591px] w-full max-w-[335px]md:h-[401px] h-auto"
            />
          </section>
        </section>
        <section className="flex items-center justify-center w-full px-6 py-10 xl:px-0">
          <section className="bg-background max-w-[1276px] w-full rounded-3xl py-11 lg:px-20 px-5 flex flex-col justify-start items-center gap-10">
            <div className="w-full md:max-w-[556px] sm:max-w-[400px] max-w-[300px] relative p-3.5">
              <div className="bg-sOrange md:size-[30px] size-4 absolute top-0 left-0" />
              <div className="bg-sOrange md:size-[30px] size-4 absolute top-0 right-0" />
              <div className="bg-sOrange md:size-[30px] size-4 absolute bottom-0 right-0" />
              <div className="bg-sOrange md:size-[30px] size-4 absolute bottom-0 left-0" />
              <div className="flex flex-col items-center justify-start w-full gap-2 px-4 py-8 bg-white md:gap-4 md:px-7">
                <Image
                  src={mentor}
                  alt="mentor"
                  className="md:w-[328px] w-[174px] md:h-[79px] h-[42px]"
                  width={328}
                  height={79}
                />
                <p className="text-blueShade md:text-[34px] sm:text-2xl text-xl leading-none text-center">
                  Unlock career growth with expert mentorship
                </p>
                <button className="px-5 py-2 mt-3 text-sm text-white rounded-lg outline-none cursor-pointer bg-primary md:py-3 md:px-6 md:text-base">
                  Book a call
                </button>
              </div>
            </div>
            <section className="flex flex-col items-center justify-start w-full gap-6">
              <p className="text-base font-normal text-tGray">
                What you get from our mentorship call:
              </p>
              <section className="grid w-full grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                {mentorData.map((content, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-start gap-2 p-6 text-base font-normal leading-tight transition-all duration-300 bg-white cursor-default rounded-2xl hover:scale-102"
                  >
                    <Image
                      src={content.image}
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <p>{content.title}:</p>
                      <p className="text-greyDark">{content.desc}</p>
                    </div>
                  </div>
                ))}
              </section>
            </section>
          </section>
        </section>

        <section className="w-full py-10 flex flex-col justify-start items-center gap-10 max-w-[1275px] xl:px-0 px-5" id='faqs'>
          <div className="flex flex-col justify-start items-center gap-3 w-full max-w-[549px] text-center">
            <p className="text-xs font-normal uppercase text-lightGrey">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <p className="text-blueShade font-medium md:text-[34px] sm:text-2xl text-xl leading-tight">
              Got questions? We&apos;ve got answers!
            </p>
            <p className="md:text-base sm:text-sm text-xs font-normal text-greyDark leading-tight w-full max-w-[372px]">
              Find everything you need to know about applying, optimizing, and
              landing your dream job
            </p>
          </div>
          <FaqSection />
        </section>

        <section className="flex flex-col items-center justify-start w-full gap-8 px-6 py-10 xl:px-0">
          <div className="flex flex-col justify-start items-center gap-3 w-full max-w-[549px] text-center">
            <p className="text-xs font-normal uppercase text-lightGrey">
              TESTIMONIALS
            </p>
            <p className="text-xl font-medium leading-tight text-blueShade md:text-4xl sm:text-2xl">
              Hear from job seekers like you!
            </p>
            <p className="md:text-base sm:text-sm text-xs font-normal text-greyDark leading-tight max-w-[372px] w-full">
              Don&apos;t just take our word for it—see how TalentRah has helped
              job seekers land their dream roles faster.
            </p>
          </div>
          <section className="w-full grid sm:grid-cols-3 grid-cols-1 mx-auto max-w-[1120px] sm:gap-x-5 sm:gap-y-8 gap-5">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="p-6 rounded-[20px] bg-white flex flex-col justify-start items-start gap-4 shadow-card3 hover:scale-102 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-start">
                  <Star className="fill-[#E98239] stroke-1 stroke-[#E98239] size-4" />
                  <Star className="fill-[#E98239] stroke-1 stroke-[#E98239] size-4" />
                  <Star className="fill-[#E98239] stroke-1 stroke-[#E98239] size-4" />
                  <Star className="fill-[#E98239] stroke-1 stroke-[#E98239] size-4" />
                  <StarHalf className="fill-[#E98239] stroke-1 stroke-[#E98239] size-4" />
                </div>
                <p className="text-xs leading-snug text-tGray md:text-base">
                  I used to spend hours tweaking my resume and applying for
                  jobs. With TalentRah&apos;s AI, I optimized my resume and
                  applied to multiple jobs in minutes.
                </p>
                <div className="flex items-start justify-start gap-2">
                  <Image
                    src={mercy}
                    alt="mercy"
                    width={37}
                    height={37}
                    className="md:size-[37px] size-[30px]"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <p className="text-xs font-normal leading-none text-black md:text-base">
                      Mercy Benjamin
                    </p>
                    <p className="text-xs font-normal text-primary">Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
        <section className="flex items-start justify-start w-full px-6 xl:px-0">
          <section className="w-full max-w-[1280px] relative overflow-hidden mx-auto my-10 rounded-3xl bg-primary flex md:flex-row flex-col justify-between md:items-center items-start">
            <div className="w-full max-w-[500px] md:pl-14 px-6 flex flex-col justify-start items-start gap-3 py-10">
              <p className="text-white lg:text-[44px] sm:text-3xl text-xl font-bold leading-none z-10">
                Ready to Get Hired Faster?
              </p>
              <p className="z-10 text-xs font-normal leading-tight lg:text-base sm:text-sm text-light-grey-01">
                Say goodbye to tedious job applications and resume struggles.
                Let AI optimize your resume, match you with the right
                opportunities, and apply in seconds.
              </p>
              <button className="z-10 px-5 py-2 mt-3 text-sm bg-white rounded-lg outline-none cursor-pointer text-primary md:py-3 md:px-6 md:text-base">
                Get started for free
              </button>
            </div>
            <Image src={dashboard2} alt="dashboard" />
            <div className="size-[358px] rounded-full bg-[#62A7F433] absolute -top-10 -left-44" />
            <div className="size-[358px] rounded-full bg-[#62A7F433] absolute -bottom-[70%] left-[20%]" />
          </section>
        </section>
        <section className="w-full max-w-[1137px] flex md:flex-row flex-col justify-between items-start gap-6 xl:px:0 px-6">
          <div className="flex flex-col justify-start items-start gap-3 w-full max-w-[549px] md:mx-0 mx-auto">
            <p className="text-xs font-normal uppercase text-lightGrey">
              CONTACT US
            </p>
            <p className="text-xl font-medium leading-tight text-blueShade md:text-4xl sm:text-2xl">
              Get in touch
            </p>
            <p className="md:text-base sm:text-sm text-xs font-normal text-greyDark leading-tight max-w-[475px] w-full">
              Have questions or need assistance? Fill out the form below, and
              our team will get back to you as soon as possible.
            </p>
          </div>
          <section className="w-full max-w-[492px] md:mx-0 mx-auto flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2.5 w-full">
              <label
                htmlFor="fullName"
                className="text-xs font-normal sm:text-base"
              >
                Full name <span className="text-tError">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="w-full py-3.5 px-2.5 rounded-lg sm:text-base text-xs placeholder:text-lightGrey-05 outline-none border border-lightGrey-05"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2.5 w-full">
              <label
                htmlFor="email"
                className="text-xs font-normal sm:text-base"
              >
                Email address <span className="text-tError">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full py-3.5 px-2.5 rounded-lg sm:text-base text-xs placeholder:text-lightGrey-05 outline-none border border-lightGrey-05"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2.5 w-full">
              <label
                htmlFor="subject"
                className="text-xs font-normal sm:text-base"
              >
                Subject <span className="text-tError">*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-full py-3.5 px-2.5 rounded-lg sm:text-base text-xs placeholder:text-lightGrey-05 outline-none border border-lightGrey-05"
                placeholder="Enter your subject"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2.5 w-full">
              <label
                htmlFor="message"
                className="text-xs font-normal sm:text-base"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full py-3.5 px-2.5 rounded-lg sm:text-base text-xs placeholder:text-lightGrey-05 outline-none border border-lightGrey-05 resize-none h-[130px]"
                placeholder="Type it here..."
              />
            </div>
            <button className="w-full px-4 py-3 text-xs text-white rounded-lg outline-none bg-primary sm:text-base">
              Book a call
            </button>
          </section>
        </section>
      </section>
      <Footer />
    </>
  )
}
