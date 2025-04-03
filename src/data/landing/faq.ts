type faqTag =
  | 'General'
  | 'Job Loop'
  | 'AI Related'
  | 'Resume Related'
  | 'Mentorship'
  | 'Human Copilot';
export type faqType = {
  title: string;
  desc: string;
  tag: faqTag;
}[];
export const faqs: faqType = [
  {
    title: 'Is Talentrah free to use, or are there paid plans?',
    desc: 'Talentrah offers free access to core features, with premium plans for advanced tools like career coaching or localization. Pricing varies by country and includes perks like priority support.',
    tag: 'General',
  },
  {
    title: 'How do I reset my password or recover my account?',
    desc: 'Click “Forgot Password” on the login page, and we’ll email a secure link to reset it. Your data remains protected with end-to-end encryption.',
    tag: 'General',
  },
  {
    title: 'Is Talentrah available in my country/language?',
    desc: 'Talentrah supports multiple languages and job boards globally, auto-adjusting to your location. Premium features may vary based on regional partnerships.',
    tag: 'General',
  },
  {
    title: 'How does Talentrah protect my personal data and privacy?',
    desc: 'We use SSL/TLS encryption, GDPR/CCPA compliance, and let you control data retention. Your information is never shared without consent.',
    tag: 'General',
  },
  {
    title: 'Can I use Talentrah without creating an account?',
    desc: 'You need an account to save resumes or track applications, but you can explore job listings and AI tools anonymously first.',
    tag: 'General',
  },
  {
    title: 'How do I set up job alerts for new opportunities',
    desc: 'Enable alerts in your profile settings, and Talentrah’s AI will notify you via email or app for roles matching your criteria.',
    tag: 'Job Loop',
  },
  {
    title: 'Can I filter jobs by location, salary, or experience level?',
    desc: 'Yes! Use filters in the job search dashboard to narrow results by salary, location, seniority, or industry.',
    tag: 'Job Loop',
  },
  {
    title: 'How does Talentrah’s AI avoid bias in job recommendations?',
    desc: 'Our AI uses anonymized data and audits for fairness, focusing on skills and experience. You can adjust criteria to refine suggestions.',
    tag: 'AI Related',
  },
  {
    title: 'Can I adjust the AI’s matching criteria if I want different roles?',
    desc: 'Yes! Edit your preferences in the AI Copilot settings to prioritize industries, skills, or remote work.',
    tag: 'AI Related',
  },
  {
    title:
      'Does the AI learn from my application history to improve suggestions?',
    desc: 'The AI adapts based on your activity, like rejected roles or saved jobs, to refine future matches.',
    tag: 'AI Related',
  },
  {
    title: 'What happens if I disagree with the AI’s resume feedback?',
    desc: 'You can override AI suggestions manually or request a human career coach review for personalized advice.',
    tag: 'AI Related',
  },
  {
    title: 'How does the AI handle niche or unconventional career paths?',
    desc: 'The AI identifies transferable skills and tailors resumes/cover letters to highlight unique strengths for niche roles.',
    tag: 'AI Related',
  },
  {
    title: 'Does Talentrah check my resume for spelling or formatting errors?',
    desc: 'Yes! Our AI scans for errors and ensures ATS-friendly formatting. You’ll get instant fixes before saving.',
    tag: 'Resume Related',
  },
  {
    title: 'Can I export my Talentrah resume to other job platforms?',
    desc: 'Download resumes as PDF/DOCX files or auto-upload them to LinkedIn/Indeed with one click.',
    tag: 'Resume Related',
  },
  {
    title: 'How do I highlight freelance or gig work on my resume?',
    desc: 'Use the “Freelance” template section, and our AI will suggest skills/metrics to showcase your experience.',
    tag: 'Resume Related',
  },
  {
    title: 'Does Talentrah support resumes in non-traditional formats?',
    desc: 'We focus on ATS-friendly formats, but you can design creative versions separately for direct employer sharing.',
    tag: 'Resume Related',
  },
  {
    title:
      'Will the AI suggest keywords to optimize my resume for specific roles?',
    desc: 'Yes! Paste a job description, and the AI will recommend keywords and skills to boost your resume’s ranking.',
    tag: 'Resume Related',
  },
  {
    title: 'How do I connect with a mentor in my industry?',
    desc: 'Talentrah matches you with vetted experts based on your career goals and industry. Schedule sessions via the platform for personalized guidance.',
    tag: 'Mentorship',
  },
  {
    title: 'What topics can mentors help me with?',
    desc: 'Mentors assist with interview prep, skill development, networking strategies, and career pivots. They tailor advice to your specific job search challenges.',
    tag: 'Mentorship',
  },
  {
    title: 'Is mentorship included in the free plan?',
    desc: 'Mentorship is a premium feature, but free users get limited access to workshops and community forums.',
    tag: 'Mentorship',
  },
  {
    title: 'How often can I interact with my mentor?',
    desc: 'Choose flexible schedules (weekly/biweekly) and communicate via video calls, chat, or email based on your subscription tier.',
    tag: 'Mentorship',
  },
  {
    title: 'Can mentors review my resume or job applications?',
    desc: 'Yes! Mentors provide detailed feedback on resumes, cover letters, and LinkedIn profiles to boost your chances of success.',
    tag: 'Mentorship',
  },
  {
    title: 'How is Human Copilot different from the AI Copilot?',
    desc: 'Human Copilot pairs you with career experts for hands-on support, ideal if you prefer human insight over AI-driven tools.',
    tag: 'Human Copilot',
  },
  {
    title: 'Can I use Human Copilot alongside AI tools?',
    desc: 'Absolutely! Combine AI suggestions with expert reviews for a hybrid approach. Toggle between modes in your dashboard.',
    tag: 'Human Copilot',
  },
  {
    title: 'Are Human Copilot experts qualified in my field?',
    desc: 'Yes—experts are screened for industry experience (e.g., tech, healthcare) and trained in resume optimization and ATS requirements.',
    tag: 'Human Copilot',
  },
  {
    title: 'How quickly can I get help from a Human Copilot?',
    desc: "Request support anytime, and you'll be matched within 24 hours. Urgent requests are prioritized for premium users.",
    tag: 'Human Copilot',
  },
  {
    title: 'Is Human Copilot more expensive than AI features?',
    desc: 'Human support requires a premium subscription, but you can purchase single sessions or bundles for flexibility.',
    tag: 'Human Copilot',
  },
];

export const faqBtn: { title: faqTag }[] = [
  {
    title: 'General',
  },
  {
    title: 'Job Loop',
  },
  {
    title: 'AI Related',
  },
  {
    title: 'Resume Related',
  },
  {
    title: 'Mentorship',
  },
  {
    title: 'Human Copilot',
  },
];
