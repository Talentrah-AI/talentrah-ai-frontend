import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-blue-50 md:p-12 p-3">
<div className="min-h-screen bg-white 
    rounded-lg  shadow-sm">
      <div className="max-w-4xl mx-auto p-6">
        <div className="  p-2">
          <div className="flex items-center justify-between mb-8">
            <Link href="/reset-password">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Go back
              </Button>
            </Link>
         
                <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1743249392/logotalent_t2cwxh.png" className="w-[120px]" alt="" />
          </div>

          <h1 className="text-3xl font-bold text-center mb-6">Privacy policy</h1>

          <div className="space-y-6">
            <p className="text-gray-600">
              TalentRah values your privacy and is committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your data when you use our platform.
            </p>

            <div>
              <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
              <p className="mb-2">We may collect the following types of information when you use TalentRah:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Personal Information: Name, email, phone number, and resume details.</li>
                <li>Account Information: Login credentials and profile preferences.</li>
                <li>Usage Data: How you interact with our platform, including job searches and applications.</li>
                <li>
                  Payment Information: If you subscribe to paid services, we collect payment details securely through
                  third-party providers.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
              <p className="mb-2">We use the collected data to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide and improve our job matching services.</li>
                <li>Analyze resumes and recommend job opportunities.</li>
                <li>Send important notifications and updates.</li>
                <li>Process payments for premium features.</li>
                <li>Enhance platform security and prevent fraud.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">3. Data Sharing & Disclosure</h2>
              <p className="mb-2">We do not sell or rent your personal data. However, we may share information with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Employers & Recruiters: When you apply for a job, relevant details may be shared with potential
                  employers.
                </li>
                <li>Third-Party Service Providers: For payment processing, analytics, and security purposes.</li>
                <li>Legal Authorities: If required by law to comply with legal obligations or protect our rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information from unauthorized access,
                loss, or misuse. However, no online platform is 100% secure, and users should also take precautions with
                their personal data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">5. Cookies & Tracking Technologies</h2>
              <p className="mb-2">We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Improve user experience and platform functionality.</li>
                <li>Analyze site traffic and user behavior.</li>
                <li>
                  Store user preferences for a seamless experience. Users can manage cookie settings in their browser at
                  any time.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">6. Your Rights & Choices</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access & Update Your Data: Modify your account details at any time.</li>
                <li>Request Data Deletion: Delete your account and personal data upon request.</li>
                <li>Opt-Out of Marketing Communications: Unsubscribe from promotional emails.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">7. Third-Party Links</h2>
              <p>
                TalentRah may contain links to third-party websites. We are not responsible for their privacy practices
                and encourage users to review their policies before providing any information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Any significant changes will be communicated via email
                or a notice on our platform.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
                <span className="font-medium">support@talentrah.com</span>
              </p>
            </div>

            <p className="text-gray-600 mt-4">
              By using TalentRah, you acknowledge that you have read and understood this Privacy Policy.
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
    </div>
    </div>
    
  )
}

