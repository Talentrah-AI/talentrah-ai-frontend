'use client';
import { samplePlaceholder, sampleQuestion } from '@/data/landing/landingForm';
import { useEffect, useState } from 'react';

export const LandingForm = () => {
  const [textInput, setTextInput] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>('');

  useEffect(() => {
    let charIndex = 0;
    let timeout: NodeJS.Timeout;
    let isTyping = true;

    const type = () => {
      if (isTyping) {
        if (charIndex <= samplePlaceholder[currentIndex].length) {
          setTypedText(samplePlaceholder[currentIndex].slice(0, charIndex));
          charIndex++;
          timeout = setTimeout(type, 100);
        } else {
          isTyping = false;
          timeout = setTimeout(erase, 2000); // Delay before erasing
        }
      } else {
        erase();
      }
    };
    const erase = () => {
      if (charIndex > 0) {
        setTypedText(samplePlaceholder[currentIndex].slice(0, charIndex - 1));
        charIndex--;
        timeout = setTimeout(erase, 50);
      } else {
        isTyping = true;
        setCurrentIndex((prev) => (prev + 1) % samplePlaceholder.length);
        timeout = setTimeout(type, 500); // Delay before typing next
      }
    };
    type();

    return () => clearTimeout(timeout);
  }, [currentIndex]);
  return (
    <form className="w-full max-w-[785px] flex flex-col justify-start items-center gap-5 md:my-12 my-6">
      <div className="w-full h-[154px] bg-white border border-light-grey-02 rounded-xl relative py-4 overflow-hidden ">
        <textarea
          name="text"
          id="text"
          className="w-full h-[85px] resize-none outline-none px-6 placeholder:text-lightGrey-05 md:text-sm text-xs text-black hidescrollbar"
          placeholder={`I want to ${typedText}`}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>
        <button
          className="absolute bottom-2.5 right-3 bg-gradient-to-r from-primary to-[#09CBD2] text-white px-5 py-2 rounded-md cursor-pointer flex justify-start items-center gap-2 text-base font-normal"
          type="button"
        >
          <svg
            className="size-[18px]"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2419 8.9998C16.2425 9.2838 16.1625 9.56215 16.0111 9.80246C15.8598 10.0428 15.6433 10.2352 15.3869 10.3573L4.39937 15.5623C4.19828 15.6719 3.9755 15.736 3.74687 15.7498C3.49669 15.7493 3.2506 15.6862 3.03102 15.5663C2.81145 15.4463 2.62535 15.2734 2.48969 15.0632C2.35402 14.853 2.27309 14.6122 2.25425 14.3627C2.23542 14.1132 2.2793 13.863 2.38187 13.6348L4.09187 9.7498L4.42937 8.9998L4.09187 8.2498L2.38187 4.4023C2.25651 4.12191 2.22024 3.8098 2.27796 3.50813C2.33568 3.20646 2.48462 2.92979 2.70464 2.71549C2.92467 2.50119 3.20517 2.3596 3.50826 2.30985C3.81134 2.2601 4.12239 2.30459 4.39937 2.4373L15.3869 7.6423C15.6433 7.76442 15.8598 7.95682 16.0111 8.19714C16.1625 8.43745 16.2425 8.71579 16.2419 8.9998Z"
              fill="white"
            />
            <path
              d="M8.99875 9C8.99875 9.19891 8.91973 9.38968 8.77908 9.53033C8.63843 9.67098 8.44766 9.75 8.24875 9.75H4.09375L4.43125 9L4.09375 8.25H8.24875C8.44766 8.25 8.63843 8.32902 8.77908 8.46967C8.91973 8.61032 8.99875 8.80109 8.99875 9Z"
              fill="#0967D2"
            />
          </svg>
          <p>send</p>
        </button>
      </div>
      <div className="w-full flex justify-center items-center md:gap-2.5 gap-2 flex-wrap">
        {sampleQuestion.map((question) => (
          <button
            className="text-tGray bg-white/45 md:text-sm text-xs font-normal md:px-3.5 px-3 md:py-3 py-2.5 border border-white rounded-md cursor-pointer"
            type="button"
            key={question}
            onClick={() => setTextInput(`I want to ${question}`)}
          >
            {question}
          </button>
        ))}
      </div>
    </form>
  );
};
