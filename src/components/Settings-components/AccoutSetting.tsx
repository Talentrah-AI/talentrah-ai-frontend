"use client"

import { useState } from "react"
import { NotificationSettings } from "./notification-settings"
import { PricingPlans } from "./pricing-plans"
import ProfileCard from "./ProfileCard"
import BillingCard from "./BillingCard"
import ProfileInfo from "./ProfileInfo"
import { SecuritySettings } from "./security-settings"
import { Navigation } from "./NavTab"
import ContactUsPage from "./contact-us"



export interface UserData {
    firstName: string
    lastName: string
    email: string
    country: string
    phone: string
    role: string
    skills:string[]
    tools:string[]
    plan:string
    nextRenewal: string
    billingCycle: string

}

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState("account")
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const userData:UserData = {
    firstName: "Mercy",
    lastName: "Benjamin",
    email: "mercybenjamin012@gmail.com",
    country: "Nigeria",
    phone: "NIL",
    role: "UI/UX Designer",
    skills: ["Wireframing", "User Research", "Information Architecture", "User Persona"],
    tools: ["Figma", "Framer"],
    plan: "Premium",
    nextRenewal: "02/05/2025",
    billingCycle: "Annual",
  }

  const [user, setUser] = useState(userData)

  const handleSaveChanges = (updatedData:  Partial<UserData>) => {
    setUser({ ...user, ...updatedData })
    setIsEditing(false)
  }

  const handlePlanChange = (newPlan: string) => {
    setUser((prev) => ({ ...prev, plan: newPlan }))
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "account":
        return (
            <div className="mt-6 grid md:grid-cols-[300px_1fr] gap-6">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <ProfileCard  user={user} onEdit={() => setIsEditing(true)} />
              </div>
      
              <BillingCard plan={user.plan} nextRenewal={user.nextRenewal} billingCycle={user.billingCycle}
              onPlanChange={handlePlanChange} />
            </div>
              <div>
                  <ProfileInfo
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  user={user}
                  handleSaveChanges={handleSaveChanges}
                  />
              </div>
          </div>
        )
      case "notification":
        return (
          <div className="mt-6">
            <NotificationSettings />
          </div>
        )
      case "pricing":
        return (
          <div className="mt-6 bg-white  rounded-[20px] shadow-sm  md:min-h-[671px] overflow-hidden">
            <PricingPlans />
          </div>
        )
      case "security":
        return (
          <div className="mt-6 p-3 md:p-6">
             <SecuritySettings />
          </div>
        )
      case "contact":
        return (
          <div className=" p-3 md:px-6 md:pt-0 ">
            <ContactUsPage />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-2 md:px-4 py-6 overflow-hidden">
    <div className="mobile-nav-wrapper w-full ">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
    <div>
    {renderTabContent()}
    </div>
  </div>
  )
}

