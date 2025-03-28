'use client';

import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Copyright } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSubscription } from '@/context/SubscriptionContext';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';


type Plan = {
  name: string;
  price: number;
  features: string[];
  isHighlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Essential',
    price: 9,
    features: [
      'Upload & analyze up to 5 resumes/month',
      'AI-powered resume scoring',
      'Job description match analysis',
      'Basic resume improvement suggestions',
      'Save & download optimized resumes',
    ],
  },
  {
    name: 'Advanced',
    price: 19,
    features: [
      'Upload & analyze up to 5 resumes/month',
      'AI-powered resume scoring',
      'Job description match analysis',
      'Basic resume improvement suggestions',
      'Save & download optimized resumes',
    ],
    isHighlighted: true, // Middle card is highlighted
  },
  {
    name: 'Professional',
    price: 29,
    features: [
      'Upload & analyze up to 5 resumes/month',
      'AI-powered resume scoring',
      'Job description match analysis',
      'Basic resume improvement suggestions',
      'Save & download optimized resumes',
    ],
  },
];

const Pricing = () => {
  const router = useRouter();
  const { setIsPremium } = useSubscription();

  const handleSubscribe = async () => {
    try {
      setIsPremium(true); // Update global subscription state

      const previousRoute =
        localStorage.getItem('previousRoute') || '/jobdashboard/apply';
      router.push(previousRoute);
      toast.success('Subscription successful! Redirecting...');
    } catch (error) {
      console.error('Failed to upgrade subscription:', error);
      toast.error('Subscription failed. Please try again.');
    }
  };

  return (
    <div className="bg-[#E6F0FB] pt-[50px] pr-[50px] pb-[20px] pl-[50px] gap-[20px] min-h-screen flex flex-col items-center justify-center">
      <div className="w-[1340px] h-[764px] bg-white rounded-[24px] pt-[8px] pb-[12px] gap-[207px] text-center">
        <div className="flex pt-[8px] pr-[40px] pb-[8px] pl-[40px] gap-[10px]">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 border-0 font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-[#717A84]"
          >
            <ChevronLeft className="text-[#08121D]" />
            Back
          </button>
        </div>

        <div className=" h-[643px] flex flex-col items-center justify-center gap-[40px]">
          <div>
            <h2 className="font-[Gabarito] font-medium text-[26px] leading-[30px] tracking-[0px] text-center text-black mb-2">
              Pricing Plans
            </h2>
            <p className="font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] text-center text-[#717A84]">
              Upgrade Personalized feedback to refine your resume effectively
            </p>
          </div>

          <div className="w-[1175px] h-[545px] flex bg-white pt-[30px] pr-[58px] pb-[30px] pl-[58px] gap-[27px]">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={` rounded-[20px] gap-[21px] border-[0.5px] border-[#EFF0F2] p-[20px]
              ${
                plan.isHighlighted
                  ? 'bg-gradient-to-b from-[#09CBD2] to-[#0967D2] text-white'
                  : 'bg-white border-gray-200'
              }`}
              >
                <CardHeader className="w-[full] p-0 text-left space-y-3">
                  <h3
                    className={`font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] align-middle
                     ${plan.isHighlighted ? 'text-white' : 'text-[#717A84]'}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`font-[Gabarito] font-bold text-[44px] leading-[50px] tracking-[0px] align-middle ${plan.isHighlighted ? 'text-white' : 'text-[#3A85DB]'}`}
                  >
                    ${plan.price}{' '}
                    <span
                      className={`font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] ${plan.isHighlighted ? 'text-white' : 'text-[#717A84]'}  align-middle`}
                    >
                      per month
                    </span>
                  </p>

                  <Button
                    onClick={() => handleSubscribe()}
                    className={`w-[full] h-[40px] rounded-[12px] px-[50px] py-[5px] gap-[5px]
                      ${
                        plan.isHighlighted
                          ? 'bg-white text-[#004AAD] hover:bg-gray-200'
                          : 'bg-[#0967D2] text-white hover:bg-[#003b82]'
                      }`}
                  >
                    Subscribe
                  </Button>
                </CardHeader>

                <CardContent className="w-full p-0 text-left">
                  <h4
                    className={`font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] align-middle mb-4 ${plan.isHighlighted ? 'text-white' : 'text-[#B0B5BB]'} `}
                  >
                    Features
                  </h4>

                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Image
                          src={
                            plan.isHighlighted
                              ? '/Checkwhite.svg'
                              : '/Checkblue.svg'
                          }
                          alt="Check-icon"
                          width={24}
                          height={24}
                        />
                        <span
                          className={`font-[Gabarito] font-normal text-[16px] leading-[20px] tracking-[0px] align-middle 
                            ${plan.isHighlighted ? 'text-white' : 'text-[#717A84]'}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-3 font-[Gabarito] font-normal text-[10px] leading-[12px] tracking-[0px] text-right text-[#90989F]">
        <div className="flex items-center gap-2">
          <Copyright className="w-[16px] h-[16px]" />
          <p>2025 Talentrah. All rights reserved</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/terms-condition">Terms & Conditions</Link>
          <div className="border-r border-[0.5px] border-[#90989F] h-2"></div>
          <Link href="/privacy">Privary Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
