"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { UserData } from "./AccoutSetting"

interface ProfileEditProps {
  user: {
    firstName: string
    lastName: string
    email: string
    country: string
    phone: string
    role: string
    skills: string[]
    tools: string[]
  }
  onSave:(updatedData: Partial<UserData>) => void
  onCancel: () => void
}


const ProfileEdit = ({ user, onSave, onCancel }: ProfileEditProps) => {
    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        country: user.country,
        phone: user.phone,
        role: user.role,
        yearsOfExperience: "3",
        skills: [...user.skills],
        tools: [...user.tools],
      })
    
      const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false)
      const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false)
      const [roleDropdownOpen, setRoleDropdownOpen] = useState(false)
    
      const availableSkills = ["Wireframing", "User Research", "Information Architecture", "User Persona"]
      const availableTools = ["Figma", "Framer", "Miro", "Wix Studio"]
      const availableRoles = ["UI/UX Designer", "Project Manager", "Frontend Developer", "Backend Developer"]
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    
      const handleSelectCountry = (country: string) => {
        setFormData((prev) => ({ ...prev, country }))
      }
    
      const handleSelectRole = (role: string) => {
        setFormData((prev) => ({ ...prev, role }))
        setRoleDropdownOpen(false)
      }
    
      const toggleSkill = (skill: string) => {
        setFormData((prev) => {
          if (prev.skills.includes(skill)) {
            return { ...prev, skills: prev.skills.filter((s) => s !== skill) }
          } else {
            return { ...prev, skills: [...prev.skills, skill] }
          }
        })
      }
    
      const toggleTool = (tool: string) => {
        setFormData((prev) => {
          if (prev.tools.includes(tool)) {
            return { ...prev, tools: prev.tools.filter((t) => t !== tool) }
          } else {
            return { ...prev, tools: [...prev.tools, tool] }
          }
        })
      }
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSave(formData)
      }
  return (
    <div className="p-6 ">
    <h2 className="text-xl font-semibold mb-6">Edit profile</h2>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block font-medium">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block font-medium">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="country" className="block font-medium">
            Country
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full px-3 py-2 border rounded-lg text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() =>  handleSelectCountry('USA')}
            >
              {formData.country}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="role" className="block font-medium">
            Role
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full px-3 py-2 border rounded-lg text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            >
              {formData.role}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {roleDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
                {availableRoles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${formData.role === role ? "bg-blue-50" : ""}`}
                    onClick={() => handleSelectRole(role)}
                  >
                    {role}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="yearsOfExperience" className="block font-medium">
            Years of experience
          </label>
          <input
            type="text"
            id="yearsOfExperience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="skills" className="block font-medium">
          Skills
        </label>
        <div className="relative">
          <button
            type="button"
            className="w-full px-3 py-2 border rounded-lg text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setSkillsDropdownOpen(!skillsDropdownOpen)}
          >
            Select
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {skillsDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
              {availableSkills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${formData.skills.includes(skill) ? "bg-blue-50" : ""}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {formData.skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {skill}
              <button type="button" onClick={() => toggleSkill(skill)}>
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="tools" className="block font-medium">
          Tools
        </label>
        <div className="relative">
          <button
            type="button"
            className="w-full px-3 py-2 border rounded-lg text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
          >
            Select
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {toolsDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
              {availableTools.map((tool) => (
                <button
                  key={tool}
                  type="button"
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${formData.tools.includes(tool) ? "bg-blue-50" : ""}`}
                  onClick={() => toggleTool(tool)}
                >
                  {tool}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {formData.tools.map((tool) => (
            <span
              key={tool}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {tool}
              <button type="button" onClick={() => toggleTool(tool)}>
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
  )
}

export default ProfileEdit