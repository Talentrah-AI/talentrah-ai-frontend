import { JobSearchForm } from "@/components/onboarding/jobloop/job-search-form";
import { Stepper } from "@/components/ui/Stepper";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <header className="container mx-auto px-4 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Talentrah</h1>
          <button className="text-gray-600 hover:text-gray-800">Logout</button>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <Stepper
          steps={["Step 01", "Step 02", "Step 03"]}
          currentStep={1}
        />
        <JobSearchForm />
      </div>
    </main>
  );
}