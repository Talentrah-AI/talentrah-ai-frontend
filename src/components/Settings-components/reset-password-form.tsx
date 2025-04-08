"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function ResetPasswordForm() {
  const router = useRouter()
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match. Please try again")
      return
    }

    setIsSubmitting(true)

    try {
      // In a real app, this would call an API to reset the password
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect back to security settings
      router.push("/security-settings")
    } catch (err) {
      setError(`An error occurred. Please try again.${err}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoBack = () => {
    router.push("/settings")
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center  shadow-sm rounded-lg  ">
      <div className=" w-full max-w-md p-4">
          <img
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1743249392/logotalent_t2cwxh.png"
            alt="Talentrah Logo"
            className="w-[130px] mx-[auto]"
          />

        <h1 className="text-2xl font-bold text-center mb-2">Reset password</h1>
        <p className="text-gray-500 text-center mb-8">
          Enter your new password below to secure your account.
          <br />
          Make sure it&apos;s strong and easy to remember!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="new-password" className="block font-medium">
              Enter New Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block font-medium">
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Resetting..." : "Reset password"}
          </button>
        </form>

        <button
          onClick={handleGoBack}
          className="mt-6 flex items-center justify-center mx-auto text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={16} className="mr-2" />
          Go back
        </button>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        <p>© 2025 talentrah. All rights reserved</p>
        <div className="mt-2 space-x-4">
        <Link href="/reset-password/terms-and-conditions" className="hover:underline">
           Terms and conditions
          </Link>
          <span>|</span>
          <Link href="/reset-password/privacy-policy" className="hover:underline">
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  )
}

