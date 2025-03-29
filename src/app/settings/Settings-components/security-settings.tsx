"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { LogoutModal } from "./modals/log-out-modal"
import { DeleteAccountModal } from "./modals/delete-account-modal"

export function SecuritySettings() {
  const router = useRouter()
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleResetPassword = () => {
    // In a real app, this would navigate to the reset password page
    router.push("/reset-password")
  }

  const handleLogout = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = () => {
    // In a real app, this would handle the logout process
    console.log("User logged out")
    setShowLogoutModal(false)
    // Redirect to login page
    router.push("/login")
  }

  const handleDeleteAccount = () => {
    setShowDeleteModal(true)
  }

  const confirmDeleteAccount = () => {
    // In a real app, this would handle the account deletion process
    console.log("Account deleted")
    setShowDeleteModal(false)
    // Redirect to signup page
    router.push("/signup")
  }

  return (
    <div className="space-y-8 text-[16px]">
      <section className="space-y-4 bg-white p-5  shadow-sm  rounded-[20px]">
        <h2 className="text-[16px] font-semibold">Change Password</h2>
        <button
          onClick={handleResetPassword}
          className="w-full cursor-pointer flex items-center justify-between p-4 border border-[#0967D2] rounded-[16px] text-blue-600 hover:bg-gray-50 transition-colors"
        >
          <span>Reset password</span>
          <ChevronRight size={20} />
        </button>
      </section>

      <section className="space-y-4  bg-white p-5  shadow-sm  rounded-[20px]">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <h2 className="font-semibold">Account log out</h2>
            <p className="text-gray-500 text-sm mt-1">Log out securely to keep your account safe. See you soon!</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 cursor-pointer  ml-auto md:ml-0 py-2 border text-[12px] border-[#0967D2] rounded-lg text-blue-600 hover:bg-gray-50 transition-colors"
          >
            Log out
          </button>
        </div>
      </section>

      <section className="space-y-4  bg-white p-5  shadow-sm  rounded-[20px]">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <h2 className="font-semibold">Delete Account</h2>
            <p className="text-gray-500 text-sm mt-1">
              Permanently delete your Talentrah account and all associated data
            </p>
          </div>
          <button
            onClick={handleDeleteAccount}
            className="px-4 py-2 border ml-auto md:ml-0 cursor-pointer border-[#0967D2]  text-[12px] rounded-lg text-blue-600 hover:bg-red-50 transition-colors"
          >
            Delete account
          </button>
        </div>
      </section>

      {/* Modals */}
      <LogoutModal isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} onConfirm={confirmLogout} />

      <DeleteAccountModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDeleteAccount}
      />
    </div>
  )
}

