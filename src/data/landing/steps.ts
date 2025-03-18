import { StaticImageData } from "next/image"
import loop from "@/assets/images/loop.png";
import application from "@/assets/images/application.png";
import analysis from "@/assets/images/analysis.png";
import resume from "@/assets/images/resume.png";
import coverLetter from "@/assets/images/cover-letter.png";
import submit from "@/assets/images/submit.png";

type stepsType = {
    image: StaticImageData,
    title: string,
    desc: string,
    bg: string,
    text: string
}[]

export const steps: stepsType = [
    {
        image: loop,
        title: "Create your job loop",
        desc: "Set your job preferences, including role, location, and industry. This helps the platform curate job listings tailored to your career goals.",
        bg: "#E6F0FB",
        text: "#0967D2",
    },
    {
        image: application,
        title: "Initiate your application",
        desc: 'When you find a suitable opportunity, click "Apply." The platform will analyze your resume against the job description to assess its relevance and highlight key insights.',
        bg: "#FBF4E6",
        text: "#E36308",
    },
    {
        image: analysis,
        title: "Resume analysis & Insights",
        desc: "Receive a detailed breakdown of your resume's strengths, missing skills, and areas for improvement, ensuring it aligns with the job requirements.",
        bg: "#E6FBEA",
        text: "#3ADB4D",
    },
    {
        image: resume,
        title: "AI-Powered resume optimization",
        desc: "Enhance your resume with AI-driven suggestions that refine your skills, experience, and formatting to increase compatibility with the job posting.",
        bg: "#FBE6F6",
        text: "#B009D2",
    },
    {
        image: coverLetter,
        title: "Generate a tailored cover letter",
        desc: "Create a personalized cover letter that effectively highlights your qualifications and aligns with the specific job requirements.",
        bg: "#FBE6E6",
        text: "#E32908",
    },
    {
        image: submit,
        title: "Submit your application",
        desc: "Proceed with confidence, apply directly from the platform or follow the provided instructions if external submission is required.",
        bg: "#E6FAFB",
        text: "#07A2A8",
    },
]