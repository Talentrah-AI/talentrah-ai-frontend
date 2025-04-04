'use client';

interface create {
  id: string;
  title: string;
  lastUpdated: Date;
  createdAt: Date;
  category: string;
  isDefault: boolean;
  isOptimized: boolean;
}

export const resume: create[] = [
  {
    id: '0',
    title: 'Mercy-Resume-UI-Designer',
    lastUpdated: new Date('2022-01-01'),
    createdAt: new Date('2021-12-31'),
    category: 'Engineering',
    isDefault: true,
    isOptimized: true,
  },
  {
    id: '1',
    title: 'Mercy-Resume-UI-Designer',
    lastUpdated: new Date('2023-03-15'),
    createdAt: new Date('2023-03-10'),
    category: 'Software Development',
    isDefault: false,
    isOptimized: true,
  },
  {
    id: '2',
    title: 'Mercy-Resume-UI-Designer',
    lastUpdated: new Date('2023-05-20'),
    createdAt: new Date('2023-05-18'),
    category: 'Management',
    isDefault: false,
    isOptimized: false,
  },
  {
    id: '3',
    title: 'Mercy-Resume-UI-Designer',
    lastUpdated: new Date('2022-11-10'),
    createdAt: new Date('2022-11-08'),
    category: 'Software Development',
    isDefault: false,
    isOptimized: true,
  },
  {
    id: '4',
    title: 'Mercy-Resume-UI-Designer',
    lastUpdated: new Date('2024-01-05'),
    createdAt: new Date('2024-01-01'),
    category: 'Data Science',
    isDefault: false,
    isOptimized: true,
  },
  {
    id: '5',
    title: 'Mercy-Resume-UI-Designer',
    lastUpdated: new Date('2023-06-12'),
    createdAt: new Date('2023-06-10'),
    category: 'Design',
    isDefault: false,
    isOptimized: false,
  },
  {
    id: '6',
    title: 'Mercy-Resume-UI-Designer',
    lastUpdated: new Date('2023-08-25'),
    createdAt: new Date('2023-08-22'),
    category: 'Management',
    isDefault: false,
    isOptimized: true,
  },
  {
    id: '7',
    title: 'Daniel-Resume-Fullstack-Developer',
    lastUpdated: new Date('2022-09-30'),
    createdAt: new Date('2022-09-25'),
    category: 'Software Development',
    isDefault: false,
    isOptimized: true,
  },
  {
    id: '8',
    title: 'Olivia-Resume-Marketing-Manager',
    lastUpdated: new Date('2023-07-15'),
    createdAt: new Date('2023-07-10'),
    category: 'Marketing',
    isDefault: false,
    isOptimized: false,
  },
];

export default resume;
