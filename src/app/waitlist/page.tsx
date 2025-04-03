import { Check, Recycle } from 'lucide-react';
import lights from '@/assets/images/light.svg';
import Image from 'next/image';

export default function WaitlistPaage() {
  return (
    <section className="w-full h-full mx-auto min-h-screen bg-blueShade flex flex-col justify-center items-center sm:gap-40 gap-20 px-4 relative pb-28 pt-36 overflow-x-hidden">
      <div className="xl:size-[519px] sm:size-[415px] size-[300px] bg-primary/46 rounded-full blur-[155px] fixed top-0 sm:-left-[250px] -left-[100px] pointer-events-none" />
      <div className="xl:size-[459px] size-[300px] bg-[#09CBD2]/33 rounded-full blur-[155px] fixed sm:-bottom-[50px] -bottom-6 sm:-right-[150px] -right-14 pointer-events-none" />
      <section className="absolute top-0">
        <div className="w-10 h-64 bg-white blur-[120px] absolute top-0 left-[50%] -translate-x-[50%] z-0" />
        <Image
          src={lights}
          alt="lights"
          width={535}
          height={433}
          className="z-10"
        />
      </section>
      <section className="w-full flex flex-col justify-start items-center gap-6 sm:max-w-[603px] max-w-[500px] text-center relative z-10">
        <div className="flex justify-start items-center gap-2.5 sm:p-4 p-2 rounded-full border border-[#0752A8] bg-blueShade/40">
          <Recycle className="size-[19px] stroke-primary" />
          <p className="bg-clip-text sm:text-sm text-xs font-normal text-transparent bg-gradient-to-r from-primary via-white to-primary">
            Join the Future. Get Early Access Today!
          </p>
        </div>
        <p className="md:text-[64px] sm:text-5xl text-4xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary font-medium">
          Be the First to Experience Talentrah
        </p>
        <p className="md:text-base text-sm leading-tight font-normal text-light-grey-01 sm:max-w-[546px] max-w-[400px] mb-3.5">
          Be among the first to experience Talentrah, exclusive early access,
          special perks, and insider updates. Don&apos;t miss out!
        </p>
        <form className="w-full flex sm:flex-row flex-col justify-center items-center gap-1.5 sm:max-w-full max-w-[350px]">
          <input
            type="email"
            name="email"
            id="email"
            className="py-3 px-3.5 w-full max-w-[372px] border border-[#B0B5BB] rounded-xl outline-none sm:text-sm text-xs placeholder:text-[#B0B5BB]/70 text-white"
            placeholder="Enter your email address "
          />
          <button
            type="button"
            className="sm:text-sm text-xs text-white py-3.5 px-5 bg-primary rounded-xl cursor-pointer whitespace-nowrap sm:w-auto w-full"
          >
            Join Talenrah&apos;s waitlist
          </button>
        </form>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-4 max-w-[699px]">
        <p className="text-sm font-normal text-white">Key Benefits</p>
        <div className="w-full flex sm:flex-row flex-col justify-center items-start gap-3.5 sm:max-w-full max-w-[350px] mx-auto">
          <div className="flex justify-start items-center gap-1">
            <div className="bg-blueShade rounded-full p-2 border-[1.3px] border-[#042954] ">
              <Check className="stroke-primary size-4" />
            </div>
            <p className="text-white font-normal text-xs w-full">
              Get in before the public launch
            </p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <div className="bg-blueShade rounded-full p-2 border-[1.3px] border-[#042954]">
              <Check className="stroke-primary size-4" />
            </div>
            <p className="text-white font-normal text-xs w-full">
              Get exclusive Perks
            </p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <div className="bg-blueShade rounded-full p-2 border-[1.3px] border-[#042954]">
              <Check className="stroke-primary size-4" />
            </div>
            <p className="text-white font-normal text-xs w-full">
              Receive product updates
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
