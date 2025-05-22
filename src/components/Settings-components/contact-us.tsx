"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function ContactUsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    setIsOpen(true)
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto py-6 md:py-2 ">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2   p-8 md:p-5 rounded-lg">
        <div className="text-white rounded-xl shadow-sm p-3 md:p-4 bg-[#0967D2]">
        <h2 className="text-2xl font-bold mb-4">Reach out to us!</h2>
          <p className="mb-6 text-[14px] font-normal">
          We&apos;re committed to helping you succeed in your job search. Whether you have questions, need support, or want
          to share feedback, we&apos;re here for you. Feel free to contact us through any of the options below.
          </p>
        </div>
        
          <div className="mt-[20px] rounded-xl shadow-sm p-3 md:p-4  bg-white">
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-sm mb-4 text-[#90989F]">Need help or have questions? Reach out to our customer support team.</p>

            <div className="flex items-center gap-3 mb-3 ">
              <Mail className="h-8 w-8 text-[#0967D2] rounded-full shadow-lg p-1" />
              <span>support@talentrah.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-8 w-8 text-[#0967D2] rounded-full shadow-lg p-1" />
              <span>+234 909 995 5554</span>
            </div>
          </div>

          <div className="mt-[20px] rounded-xl shadow-sm p-3 md:p-4  bg-white">
            <h3 className="text-xl font-semibold mb-2">Connect with us on social media</h3>
            <p className="text-sm mb-4 text-[#90989F]">
              Stay connected for the latest updates, expert tips, and inspiring success stories from our community.
            </p>

            <div className="flex items-center gap-3 mb-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0967D2] rounded-full shadow-lg p-1">
                <g clip-path="url(#clip0_362_70875)">
                <path d="M11.9287 11.9289H9.85431V8.68025C9.85431 7.9056 9.84047 6.90838 8.77543 6.90838C7.69502 6.90838 7.5297 7.75242 7.5297 8.62387V11.9286H5.45541V5.24823H7.44674V6.16118H7.47463C7.67392 5.82043 7.9619 5.5401 8.3079 5.35007C8.6539 5.16003 9.04496 5.0674 9.43945 5.08203C11.5419 5.08203 11.9295 6.46497 11.9295 8.26408L11.9287 11.9289ZM3.11478 4.33511C2.44995 4.33522 1.91089 3.79633 1.91078 3.1315C1.91067 2.46666 2.44951 1.9276 3.11434 1.9275C3.77918 1.92733 4.31823 2.46622 4.31834 3.13106C4.3184 3.45033 4.19163 3.75654 3.96592 3.98234C3.74021 4.20815 3.43405 4.33504 3.11478 4.33511ZM4.15198 11.9289H2.07545V5.24823H4.15193V11.9289L4.15198 11.9289ZM12.9628 0.00101893H1.0331C0.469273 -0.00532482 0.00689063 0.446339 0 1.01017V12.9896C0.00667188 13.5537 0.469 14.0058 1.03305 13.9999H12.9628C13.528 14.0069 13.9922 13.5548 14 12.9896V1.00924C13.992 0.444316 13.5278 -0.00729357 12.9628 8.92441e-05" fill="#0A66C2"/>
                </g>
                <defs>
                <clipPath id="clip0_362_70875">
                <rect width="14" height="14" fill="white"/>
                </clipPath>
                </defs>
                </svg>

              <span>support@talentrah.com</span>
            </div>

            <div className="flex items-center gap-3 mb-3">            
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0967D2] rounded-full shadow-lg p-1" >
              <g clip-path="url(#clip0_362_70879)">
              <path d="M14 7C14 3.13403 10.866 0 7 0C3.13403 0 0 3.13398 0 7C0 10.4939 2.55981 13.3899 5.90625 13.915V9.02344H4.12891V7H5.90625V5.45781C5.90625 3.70344 6.95133 2.73438 8.55023 2.73438C9.31612 2.73438 10.1172 2.87109 10.1172 2.87109V4.59375H9.23453C8.36489 4.59375 8.09375 5.13335 8.09375 5.68695V7H10.0352L9.7248 9.02344H8.09375V13.915C11.4402 13.3899 14 10.4939 14 7Z" fill="#1877F2"/>
              <path d="M9.7248 9.02344L10.0352 7H8.09375V5.68695C8.09375 5.1333 8.36495 4.59375 9.23453 4.59375H10.1172V2.87109C10.1172 2.87109 9.31612 2.73438 8.55023 2.73438C6.95133 2.73438 5.90625 3.70344 5.90625 5.45781V7H4.12891V9.02344H5.90625V13.915C6.26807 13.9717 6.63376 14.0001 7 14C7.36624 14.0001 7.73193 13.9717 8.09375 13.915V9.02344H9.7248Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_362_70879">
              <rect width="14" height="14" fill="white"/>
              </clipPath>
              </defs>
              </svg>

              <span>+234 909 995 5554</span>
            </div>

            <div className="flex items-center gap-3">                       
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0967D2] rounded-full shadow-lg p-1">
                <g clip-path="url(#clip0_362_70883)">
                <path d="M10.7188 0H3.28125C1.46907 0 0 1.46907 0 3.28125V10.7188C0 12.5309 1.46907 14 3.28125 14H10.7188C12.5309 14 14 12.5309 14 10.7188V3.28125C14 1.46907 12.5309 0 10.7188 0Z" fill="url(#paint0_radial_362_70883)"/>
                <path d="M10.7188 0H3.28125C1.46907 0 0 1.46907 0 3.28125V10.7188C0 12.5309 1.46907 14 3.28125 14H10.7188C12.5309 14 14 12.5309 14 10.7188V3.28125C14 1.46907 12.5309 0 10.7188 0Z" fill="url(#paint1_radial_362_70883)"/>
                <path d="M7.00049 1.53125C5.51529 1.53125 5.32886 1.53776 4.74556 1.56428C4.16336 1.59097 3.76595 1.68312 3.41824 1.81836C3.05851 1.95803 2.75341 2.1449 2.44945 2.44896C2.14523 2.75297 1.95836 3.05807 1.81825 3.41764C1.68263 3.76545 1.59037 4.16303 1.56417 4.74496C1.53809 5.32831 1.53125 5.5148 1.53125 7.00005C1.53125 8.48531 1.53781 8.67114 1.56428 9.25444C1.59108 9.83664 1.68323 10.2341 1.81836 10.5818C1.95814 10.9415 2.14501 11.2466 2.44907 11.5505C2.75297 11.8548 3.05807 12.0421 3.41753 12.1817C3.76551 12.317 4.16298 12.4091 4.74507 12.4358C5.32842 12.4624 5.51469 12.4689 6.99984 12.4689C8.4852 12.4689 8.67103 12.4624 9.25433 12.4358C9.83653 12.4091 10.2344 12.317 10.5824 12.1817C10.9419 12.0421 11.2466 11.8548 11.5504 11.5505C11.8547 11.2466 12.0415 10.9415 12.1816 10.5819C12.3161 10.2341 12.4084 9.83653 12.4357 9.25455C12.4619 8.67125 12.4688 8.48531 12.4688 7.00005C12.4688 5.5148 12.4619 5.32842 12.4357 4.74507C12.4084 4.16287 12.3161 3.76551 12.1816 3.4178C12.0415 3.05807 11.8547 2.75297 11.5504 2.44896C11.2463 2.14479 10.942 1.95792 10.582 1.81841C10.2334 1.68312 9.83576 1.59091 9.25356 1.56428C8.67021 1.53776 8.48449 1.53125 6.9988 1.53125H7.00049ZM6.50989 2.51677C6.65552 2.51655 6.818 2.51677 7.00049 2.51677C8.4607 2.51677 8.63373 2.52202 9.21036 2.54822C9.74356 2.57261 10.033 2.6617 10.2257 2.73656C10.481 2.83566 10.6629 2.95416 10.8542 3.14562C11.0456 3.33703 11.1641 3.5193 11.2634 3.77453C11.3383 3.96703 11.4275 4.25644 11.4518 4.78964C11.478 5.36616 11.4837 5.5393 11.4837 6.9988C11.4837 8.4583 11.478 8.63149 11.4518 9.20795C11.4274 9.74116 11.3383 10.0306 11.2634 10.2231C11.1643 10.4783 11.0456 10.6601 10.8542 10.8514C10.6628 11.0428 10.4811 11.1612 10.2257 11.2604C10.0332 11.3356 9.74356 11.4244 9.21036 11.4488C8.63384 11.475 8.4607 11.4807 7.00049 11.4807C5.54023 11.4807 5.36714 11.475 4.79068 11.4488C4.25748 11.4242 3.96807 11.3351 3.77513 11.2603C3.51996 11.1611 3.33763 11.0427 3.14623 10.8513C2.95482 10.6599 2.83637 10.478 2.737 10.2227C2.66213 10.0301 2.57294 9.74072 2.54866 9.20751C2.52246 8.631 2.51721 8.45786 2.51721 6.99743C2.51721 5.53705 2.52246 5.36479 2.54866 4.78827C2.57305 4.25507 2.66213 3.96566 2.737 3.77289C2.83615 3.51766 2.95482 3.33539 3.14628 3.14398C3.33769 2.95258 3.51996 2.83407 3.77519 2.73476C3.96796 2.65956 4.25748 2.5707 4.79068 2.5462C5.29517 2.52339 5.49068 2.51655 6.50989 2.51541V2.51677ZM9.91971 3.4248C9.55741 3.4248 9.26346 3.71848 9.26346 4.08084C9.26346 4.44314 9.55741 4.73709 9.91971 4.73709C10.282 4.73709 10.576 4.44314 10.576 4.08084C10.576 3.71853 10.282 3.42459 9.91971 3.42459V3.4248ZM7.00049 4.19158C5.44955 4.19158 4.19207 5.44906 4.19207 7.00005C4.19207 8.55105 5.44955 9.80793 7.00049 9.80793C8.55148 9.80793 9.80853 8.55105 9.80853 7.00005C9.80853 5.44912 8.55138 4.19158 7.00038 4.19158H7.00049ZM7.00049 5.1771C8.00723 5.1771 8.82345 5.9932 8.82345 7.00005C8.82345 8.0068 8.00723 8.82301 7.00049 8.82301C5.9937 8.82301 5.17759 8.0068 5.17759 7.00005C5.17759 5.9932 5.9937 5.1771 7.00049 5.1771Z" fill="white"/>
                </g>
                <defs>
                <radialGradient id="paint0_radial_362_70883" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.71875 15.0783) rotate(-90) scale(13.875 12.9049)">
                <stop stop-color="#FFDD55"/>
                <stop offset="0.1" stop-color="#FFDD55"/>
                <stop offset="0.5" stop-color="#FF543E"/>
                <stop offset="1" stop-color="#C837AB"/>
                </radialGradient>
                <radialGradient id="paint1_radial_362_70883" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.34505 1.00849) rotate(78.681) scale(6.20222 25.5657)">
                <stop stop-color="#3771C8"/>
                <stop offset="0.128" stop-color="#3771C8"/>
                <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
                </radialGradient>
                <clipPath id="clip0_362_70883">
                <rect width="14" height="14" fill="white"/>
                </clipPath>
                </defs>
                </svg>

              <span>+234 909 995 5554</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm p-3 md:p-4">
          <h2 className="text-2xl font-semibold mb-2">Send us a message</h2>
          <p className="text-gray-500 mb-6">Fill out the form below, and our team will get back to you shortly.</p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block mb-2">
                  Full name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type here..."
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white"
                />
              </div>

              <Button type="submit" className="w-full md:w-[163px] md:h-[45px] float-right">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="#0066CC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">Message sent successfully!</h2>
            <p className="text-gray-500 mb-6">Thanks for reaching out to us. We&apos;ll get back to you soon.</p>
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              Back to contact us
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

