'use client';
import { faqBtn, faqs, faqType } from '@/data/landing/faq';
import { Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

export const FaqSection = () => {
  const [faqSelect, setFaqSelect] = useState<string>('General');
  const [filteredFaq, setFilteredFaq] = useState<faqType>(
    faqs.filter((item) => item.tag === faqSelect)
  );
  useEffect(() => {
    setFilteredFaq(faqs.filter((item) => item.tag === faqSelect));
  }, [faqSelect]);
  return (
    <section className="w-full max-w-[1049px] flex md:flex-row flex-col justify-center items-start xl:gap-20 gap-12">
      <section className="w-fit">
        <section className="w-[289px] md:flex hidden flex-col justify-start items-start gap-2 px-4 py-7">
          {faqBtn.map((btn, index) => (
            <button
              key={index}
              className={`w-full leading-none text-base py-3 px-4 text-left rounded-md cursor-pointer ${
                faqSelect === btn.title
                  ? 'bg-gradient-to-br from-[#0967D2] to-[#09CBD2] text-white'
                  : 'bg-transparent text-lightGrey-05'
              }`}
              onClick={() => setFaqSelect(btn.title)}
            >
              {btn.title}
            </button>
          ))}
        </section>
        <select
          name="faq"
          id="faq"
          className="md:hidden flex w-full leading-none text-base py-5 px-6 text-left rounded-2xl cursor-pointer bg-gradient-to-br from-[#0967D2] to-[#09CBD2] text-white outline-none"
          value={faqSelect}
          onChange={(e) => setFaqSelect(e.target.value)}
        >
          <optgroup className="bg-black text-background">
            {faqBtn.map((btn, index) => (
              <option key={index} value={btn.title}>
                {btn.title}
              </option>
            ))}
          </optgroup>
        </select>
      </section>
      <section className="w-full max-w-[676px] flex flex-col justify-start items-start gap-0">
        {filteredFaq.map((faq, index) => (
          <FaqModal faq={faq} key={index} />
        ))}
        <section className="w-full bg-background py-6 px-3.5 mt-8 rounded-2xl flex sm:flex-row flex-col justify-between sm:items-center items-start gap-2.5 border-b border-b-light-grey-02">
          <div className="flex flex-col justify-start items-start gap-2.5">
            <p className="text-base font-normal text-black">
              Still have questions?
            </p>
            <p className="text-base text-lightGrey-05">
              Kindly contact our support team, we are always happy to help
            </p>
          </div>
          <button className="px-6 py-3 text-base font-normal text-black border border-[#B0B5BB] bg-white rounded-xl whitespace-nowrap cursor-pointer">
            Contact us
          </button>
        </section>
      </section>
    </section>
  );
};
interface faqModalProps {
  faq: {
    title: string;
    desc: string;
  };
}

const FaqModal = ({ faq }: faqModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div
        className="text-base font-medium py-4 px-2.5 border-b border-b-light-grey-02 w-full cursor-pointer flex justify-between items-center group"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{faq.title}</p>
        <div className='transition-all duration-300 group-hover:rotate-180'>
          {!isOpen ? (
            <Plus className=" stroke-black size-5" />
          ) : (
            <Minus className="stroke-black size-5" />
          )}
        </div>
      </div>
      {isOpen && (
        <p className="w-full bg-background py-6 px-2.5 text-dark-grey-01 text-base leading-tight border-b border-b-light-grey-02">
          {faq.desc}
        </p>
      )}
    </div>
  );
};
