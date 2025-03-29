import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-blue-50 md:p-12 p-3">
        <div className="min-h-screen bg-white 
    rounded-lg  shadow-sm">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white p-8 ">
          <div className="flex items-center justify-between mb-8">
            <Link href="/reset-password">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Go back
              </Button>
            </Link>
            <div className="text-blue-600 font-bold text-xl">Talentrah</div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-6">Terms and condition</h1>

          <div className="space-y-6">
            <p className="text-gray-600">
              Welcome to TalentRah! These Terms and Conditions govern your use of our platform, which connects job
              seekers with potential employers. By using TalentRah, you agree to comply with these terms.
            </p>

            <div>
              <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using TalentRah, you agree to be bound by these Terms and Conditions. If you do not
                agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">2. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>You must be at least 18 years old to use TalentRah.</li>
                <li>You are responsible for providing accurate information when creating an account.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">3. Account Registration & Security</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>You must provide valid and complete information when creating an account.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>TalentRah is not responsible for unauthorized access to your account.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">4. Job Listings & Applications</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Employers are responsible for the accuracy and legality of job postings.</li>
                <li>TalentRah does not guarantee job placement or employment offers.</li>
                <li>Job seekers should verify the legitimacy of job postings before applying.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">5. AI Resume Analysis & Recommendations</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Our AI-powered tools provide resume analysis and job recommendations.</li>
                <li>AI suggestions are based on available data and do not guarantee job success.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">6. Prohibited Activities</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Posting false, misleading, or fraudulent job listings.</li>
                <li>Submitting false information in resumes or applications.</li>
                <li>Attempting to hack, disrupt, or misuse the platform.</li>
                <li>Engaging in discrimination, harassment, or unlawful conduct.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">7. Subscription & Payments</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Certain features require a paid subscription.</li>
                <li>Payments are non-refundable unless stated otherwise.</li>
                <li>TalentRah reserves the right to modify pricing with prior notice.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">8. Privacy & Data Protection</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  We collect and store user data in accordance with our{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </li>
                <li>Your personal information will not be shared with third parties without consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">9. Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>TalentRah is not liable for any job offers, employer actions, or employment outcomes.</li>
                <li>We do not guarantee the accuracy, reliability, or completeness of job listings.</li>
                <li>Users assume full responsibility for their interactions on the platform.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">10. Termination & Suspension</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>TalentRah reserves the right to suspend or terminate accounts for violations of these terms.</li>
                <li>Users may deactivate their accounts at any time.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">11. Contact Us</h2>
              <p>
                For any questions or concerns regarding these Terms and Conditions, please contact us at{" "}
                <span className="font-medium">support@talentrah.com</span>
              </p>
            </div>

            <p className="text-gray-600 mt-4">
              By using TalentRah, you acknowledge that you have read, understood, and agreed to these Terms and
              Conditions.
            </p>
          </div>

          <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
            <p>© 2025 talentrah. All rights reserved</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/reset-password/terms-and-conditions" className="hover:underline">
                Terms & conditions
              </Link>
              <span>|</span>
              <Link href="/reset-password/privacy-policy" className="hover:underline">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div></div>
   
  )
}

