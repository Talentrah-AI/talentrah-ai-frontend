import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useModal } from '@/context/ModalContext';

const feedbackSchema = z.object({
  feedback: z.string().nonempty('Please select a feedback option'),
  details: z
    .string()
    .min(10, 'Please provide more details (at least 10 characters)'),
});



type feedbackFormData = z.infer<typeof feedbackSchema>;

const FeedbackModal: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { closeModal } = useModal();

  // React hook form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<feedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (data: feedbackFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data); // Log the form data
    setSubmitted(true); // Set submitted to true
  };

  return (
    <>
        <div className="w-[533px] h-[611px] flex rounded-[22px] gap-[32px] border border-[#F1F5FA] p-[30px] bg-white">
          <div className="w-[473px] h-[551px] space-y-3.5">
            {/* modal header */}
            <header className="flex justify-between">
              <h1 className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-black">
                Feedback
              </h1>
              <X
                onClick={closeModal}
                className="w-[24px] h-[24px] cursor-pointer"
              />
            </header>
            <div>
              {submitted ? (
                <div className="w-full h-[540px] flex flex-col items-center justify-center">
                  <h2 className="font-[Gabarito] text-lg font-semibold">
                    Thank you for your feedback!
                  </h2>
                  <p className="font-[Gabarito] font-normal text-[12px] leading-[20px] tracking-[0px]  text-gray-500 mt-1">
                    We appreciate your input. Your feedback helps us improve our
                    services.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-[#515D68]">
                      <span className="text-red-500 mr-1.5">*</span>What would
                      you like to tell us?
                    </label>
                    <div className="space-y-2 mt-2">
                      {[
                        'I don’t like the resume',
                        'I don’t like the cover letter',
                        'I don’t like the job recommendations',
                        'Other',
                      ].map((option, index) => (
                        <label
                          key={index}
                          className="flex rounded-[8px] gap-[10px] border border-[#EFF0F2] p-[10px] bg-[#F8F8F8] font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-[#717A84]"
                        >
                          <input
                            type="radio"
                            {...register('feedback')}
                            value={option}
                            className="accent-blue-600"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    {errors.feedback && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.feedback.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-10">
                    <label className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-[#515D68]">
                      <span className="text-red-500 mr-1.5">*</span>Can you give
                      us more details?
                    </label>
                    <textarea
                      {...register('details')}
                      className="w-full h-[126px] rounded-[8px] gap-[10px] border border-[#EFF0F2] p-[10px] bg-[#F8F8F8] text-[#B0B5BB] font-[Gabarito] font-normal text-[12px] leading-[20px] tracking-[0px]"
                      placeholder="Please describe your experience. The more specific you are, the better we can address your feedback."
                      rows={4}
                    ></textarea>
                    {errors.details && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.details.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full flex items-center justify-between gap-[10px]">
                    <button
                      onClick={closeModal}
                      className="w-[287px] h-[45px] flex items-center justify-center rounded-[12px] px-[37px] py-[5px] gap-[10px] border-[#515D68] border-[0.5px] cursor-pointer"
                    >
                      <span className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#515D68]">
                        Cancel
                      </span>
                    </button>
                    <button className="w-[287px] h-[45px] flex items-center justify-center rounded-[12px] px-[24px] py-[5px] gap-[10px] bg-[#0967D2] cursor-pointer">
                      <span className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#ffffff]">
                        Submit
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
    </>
  );
};

export default FeedbackModal;
