import check from '@/assets/images/Check.svg';
import { StaticImageData } from 'next/image';
type mentorType = {
  image: StaticImageData;
  title: string;
  desc: string;
}[];
export const mentorData: mentorType = [
  {
    image: check,
    title: 'Career guidance',
    desc: 'Gain insights and advice based on your unique goals.',
  },
  {
    image: check,
    title: 'Resume & Interview tips',
    desc: 'Get expert feedback to improve your job search approach',
  },
  {
    image: check,
    title: 'Industry insights',
    desc: 'Learn about trends and opportunities in your field.',
  },
  {
    image: check,
    title: 'Actionable next steps',
    desc: 'Leave each session with clear steps to move forward in your career.',
  },
];
