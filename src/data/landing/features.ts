import pin from '@/assets/images/pin.svg';
import dart from '@/assets/images/dart.svg';
import direction from '@/assets/images/direction.svg';
import call from '@/assets/images/call.svg';
import bag from '@/assets/images/bag.svg';
import { StaticImageData } from 'next/image';
type featuresType = {
  image: StaticImageData;
  title: string;
  desc: string;
}[];
export const features: featuresType = [
  {
    image: pin,
    title: 'AI resume optimization',
    desc: 'Enhance your resume with AI to improve chances of getting hired.',
  },
  {
    image: dart,
    title: 'Job loop',
    desc: 'Set your job preferences and get matched with relevant openings.',
  },
  {
    image: direction,
    title: 'Application tracking',
    desc: "Keep track of every job you've applied to in one place.",
  },
  {
    image: call,
    title: 'Mentorship & Career guidance',
    desc: 'Book calls with career mentors to get expert advice..',
  },
  {
    image: bag,
    title: 'AI-Assisted job applications',
    desc: 'Enable AI to apply for jobs on your behalf based on your preferences.',
  },
];
