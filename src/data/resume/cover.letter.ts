'use client';

interface cv {
  id: string;
  topic: string;
  createdAt: Date;
  category: string;
}

export const coverLetters: cv[] = [
  {
    id: '0',
    topic: 'Mercy-Resume-UI-Designer',
    createdAt: new Date('2021-12-31'),
    category: 'UI/UX Designer',
  },
  {
    id: '1',
    topic: 'Mercy-Resume-UI-Designer',
    createdAt: new Date('2023-03-10'),
    category: 'Software Development',
  },
  {
    id: '2',
    topic: 'Mercy-Resume-UI-Designer',
    createdAt: new Date('2023-05-18'),
    category: 'Management',
  },
  {
    id: '3',
    topic: 'Mercy-Resume-UI-Designer',
    createdAt: new Date('2022-11-08'),
    category: 'Software Development',
  },
  {
    id: '4',
    topic: 'Mercy-Resume-UI-Designer',
    createdAt: new Date('2024-01-01'),
    category: 'Data Science',
  },
  {
    id: '5',
    topic: 'Mercy-Resume-UI-Designer',
    createdAt: new Date('2023-06-10'),
    category: 'Design',
  },
  {
    id: '6',
    topic: 'Mercy-Resume-UI-Designer',
    createdAt: new Date('2023-08-22'),
    category: 'Management',
  },
  {
    id: '7',
    topic: 'Daniel-Resume-Fullstack-Developer',
    createdAt: new Date('2022-09-25'),
    category: 'Software Development',
  },
  {
    id: '8',
    topic: 'Olivia-Resume-Marketing-Manager',
    createdAt: new Date('2023-07-10'),
    category: 'Marketing',
  },
];

export default coverLetters;
