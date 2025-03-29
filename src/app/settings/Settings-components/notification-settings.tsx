"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    generalJobLoop: true,
    generalResumeInsights: true,
    emailJobLoop: true,
    emailResumeInsights: true,
    emailMatchesReport: true,
    aiJobApplication: true,
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-8 text-[16px]">
      <div className="space-y-4 bg-white  rounded-xl shadow-sm p-3">
        <h2 className=" font-semibold">General notification settings</h2>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="font-medium text-[#515D68]">Job loop updates</h3>
              <p className=" text-[#90989F]">
                Get notified when your job applications receive responses, interview invites, or status changes.
              </p>
            </div>
            <Switch checked={settings.generalJobLoop} onCheckedChange={() => handleToggle("generalJobLoop")}  className="cursor-pointer"/>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="font-medium text-[#515D68]">Resume insights & Tips</h3>
              <p className=" text-[#90989F]">
                Receive AI-powered resume feedback, optimization tips, and career advice.
              </p>
            </div>
            <Switch
              checked={settings.generalResumeInsights}
              onCheckedChange={() => handleToggle("generalResumeInsights") }className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 bg-white  rounded-xl shadow-sm p-3">
        <h2 className=" font-semibold">Email notification settings</h2>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="font-mediu text-[#515D68]">Job loop updates</h3>
              <p className=" text-[#90989F]">
                Get notified when your job applications receive responses, interview invites, or status changes.
              </p>
            </div>
            <Switch checked={settings.emailJobLoop} onCheckedChange={() => handleToggle("emailJobLoop")} className="cursor-pointer" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="font-medium text-[#515D68]">Resume insights & Tips</h3>
              <p className=" text-[#90989F]">
                Receive AI-powered resume feedback, optimization tips, and career advice.
              </p>
            </div>
            <Switch
              checked={settings.emailResumeInsights}
              onCheckedChange={() => handleToggle("emailResumeInsights")} className="cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="font-medium text-[#515D68]">Matches report</h3>
              <p className=" text-[#90989F]">
                Enable this setting to receive email notifications for relevant jobs (matches) based on your loop
                settings.
              </p>
            </div>
            <Switch checked={settings.emailMatchesReport} onCheckedChange={() => handleToggle("emailMatchesReport")} className="cursor-pointer"/>
          </div>
        </div>
      </div>

      <div className="space-y-4 bg-white  rounded-xl shadow-sm p-3">
        <h2 className=" font-semibold">AI notification settings</h2>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="font-medium text-[#515D68]">Job application</h3>
              <p className="text-sm text-[#90989F]">
                Turn on auto-apply, and AI will submit applications for you based on your job preferences—saving you
                time and effort.
              </p>
            </div>
            <Switch checked={settings.aiJobApplication} onCheckedChange={() => handleToggle("aiJobApplication")} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

