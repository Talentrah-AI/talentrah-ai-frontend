import React, { SetStateAction } from 'react'
import ProfileEdit from './ProfileEdit'
import { UserData } from './AccoutSetting'

interface User{
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
interface ProfileInfoProps {
  user:User
  isEditing: boolean;
  handleSaveChanges: (updatedData: Partial<UserData>) => void;
  setIsEditing:(value: SetStateAction<boolean>) => void;
}

const ProfileInfo = ({isEditing,handleSaveChanges,setIsEditing,user}:ProfileInfoProps) => {
  return (
  
        <div className="bg-white rounded-xl shadow-sm min-h-[574px]">
          {isEditing ? (
            <ProfileEdit user={user} onSave={handleSaveChanges} onCancel={() => setIsEditing(false)} />
          ) : (
            <div className="p-6">
              <div className=" p-4">
                <h2 className="text-xl font-semibold border-b border-[#EFF0F2]">Personal details</h2>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center border-b border-[#EFF0F2]">
                    <span className="text-[#515D68] text-[14px] font-normal">First name</span>
                    <span className="font-normal text-[#515D68] text-[14px] ">{user.firstName}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#EFF0F2]">
                    <span className="text-[#515D68] text-[14px] font-normal">Last name</span>
                    <span className="font-normal text-[#515D68] text-[14px] ">{user.lastName}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#EFF0F2]">
                    <span className="text-[#515D68] text-[14px] font-normal">Email address</span>
                    <span className="font-normal text-[#515D68] text-[14px] ">{user.email}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#EFF0F2]">
                    <span className="text-[#515D68] text-[14px] font-normal">Country</span>
                    <span className="font-normal text-[#515D68] text-[14px] ">{user.country}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#EFF0F2]">
                    <span className="text-[#515D68] text-[14px] font-normal">Phone number</span>
                    <span className="font-medium text-[#515D68] text-[14px] ">{user.phone}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#EFF0F2]">
                    <span className="text-[#515D68] text-[14px] font-normal">Role</span>
                    <span className="font-normal text-[#515D68] text-[14px] ">{user.role}</span>
                  </div>

                  <div className='flex justify-between gap-2 '>
                    <span className="text-[#515D68] text-[14px] font-normal block mb-2  border-[#EFF0F2]">Skills</span>
                    <div className="flex flex-wrap gap-2 justify-end  ">
                      {user.skills.map((skill) => (
                        <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-[#515D68]  ">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex justify-between '>
                    <span className="text-[#515D68] text-[16px] font-normal block mb-2">Tools</span>
                    <div className="flex flex-wrap gap-2 justify-end  ">
                      {user.tools.map((tool) => (
                        <span key={tool} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-[#515D68]  ">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end ">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 text-blue-600 border border-b border-[#EFF0F2]lue-600 rounded-lg px-6 py-2 hover:bg-blue-50 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )}
    </div>
   
  )
}

export default ProfileInfo