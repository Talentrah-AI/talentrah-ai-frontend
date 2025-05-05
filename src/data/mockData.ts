export const mockData = {
    totalCandidates: 5532,
    totalResumes: 10000,
    totalCoverLetters: 8200,
    totalJobsApplied: 20455,
    activePaidCandidates: 4295,
    jobApplications: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        paid: [100, 500, 800, 700, 600, 900, 1100],
        free: [200, 600, 900, 1000, 1200, 1100, 1300],
    },
    subscriptionPayments: {
        premium: 2000,
        freemium: 3532,
    },
    latestCandidates: [
        {
            fullName: "Andrew Erekosima",
            email: "andrewerekosima@icloud.com",
            metrics: { applications: 12, shortlisted: 45, rejected: 25 },
            subscription: "Premium",
            completion: "100%",
        },
        {
            fullName: "Jane Doe",
            email: "janedoe@icloud.com",
            metrics: { applications: 10, shortlisted: 30, rejected: 15 },
            subscription: "Freemium",
            completion: "60%",
        },
        {
            fullName: "John Smith",
            email: "johnsmith@icloud.com",
            metrics: { applications: 8, shortlisted: 20, rejected: 10 },
            subscription: "Premium",
            completion: "80%",
        },
    ],
};
