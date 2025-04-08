

interface ProfileViewProps {
  user: {
    firstName: string
    lastName: string
    email: string
  }
  onEdit: () => void
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const ProfileCard = ({ user}: ProfileViewProps) => {
  return (
    <div className='flex flex-col '>
    <div className='relative '>
    <div className='absolute top-[12px] right-0 z-10 p-1 items-center justify-center border-[0.41px] cursor-pointer  rounded-lg font-normal text-[#0967D2] border-[#0967D2] flex gap-1'>
            <span>   
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.59202 10.7269H4.59875C4.37565 10.7269 4.12598 10.5516 4.05162 10.3392L1.85245 4.18789C1.53904 3.3061 1.90557 3.03518 2.65987 3.57701L4.73155 5.05905C5.07683 5.29809 5.46992 5.17592 5.61865 4.78814L6.55356 2.29682C6.85103 1.50002 7.34505 1.50002 7.64252 2.29682L8.57743 4.78814C8.72616 5.17592 9.11925 5.29809 9.45922 5.05905L11.4034 3.67262C12.2321 3.07768 12.6305 3.38046 12.2905 4.34193L10.1445 10.3498C10.0648 10.5516 9.81512 10.7269 9.59202 10.7269Z" stroke="#0967D2" stroke-width="0.796798" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.17383 12.332H10.017" stroke="#0967D2" stroke-width="0.796798" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.76758 8.08203H8.42357" stroke="#0967D2" stroke-width="0.796798" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

            </span>
            <span className="text-sm">premium</span>
    </div>
    <div className="space-y-6">
        <div className="flex flex-col items-center p-7 text-center bg-white  w-full min-h-[231.9px] justify-center rounded-[12px] mb-[12px]">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-white cursor-pointer">
              <AvatarImage src="https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png" alt="Mercy Benjamin" />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
            <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full bg-white cursor-pointer">      
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.43358 14.4284H11.3063C13.1163 14.4284 13.8377 13.3201 13.923 11.9692L14.264 6.55232C14.3558 5.1358 13.2278 3.93569 11.8047 3.93569C11.4047 3.93569 11.0375 3.70616 10.8538 3.35203L10.3817 2.40112C10.08 1.80435 9.29304 1.3125 8.62413 1.3125H7.12235C6.44688 1.3125 5.65992 1.80435 5.35826 2.40112L4.88608 3.35203C4.70246 3.70616 4.33521 3.93569 3.93518 3.93569C2.5121 3.93569 1.38412 5.1358 1.47594 6.55232L1.81695 11.9692C1.89565 13.3201 2.62358 14.4284 4.43358 14.4284Z" stroke="#0967D2" stroke-width="0.983696" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.88672 5.24609H8.85411" stroke="#0967D2" stroke-width="0.983696" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.86962 11.8057C9.0435 11.8057 10.001 10.8482 10.001 9.67431C10.001 8.50043 9.0435 7.54297 7.86962 7.54297C6.69575 7.54297 5.73828 8.50043 5.73828 9.67431C5.73828 10.8482 6.69575 11.8057 7.86962 11.8057Z" stroke="#0967D2" stroke-width="0.983696" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </Button>
          </div>

          <div className="mt-4 space-y-1">
            <h2 className="text-xl font-bold">  {user.firstName} {user.lastName}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="flex gap-2 mt-4">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 h-[24.8px] w-[24.8px]">
                            <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_359_74138)">
            <path d="M5.44922 7.95123C5.44922 6.64494 6.50818 5.58594 7.81451 5.58594C9.1208 5.58594 10.1798 6.64494 10.1798 7.95123C10.1798 9.25755 9.1208 10.3165 7.81451 10.3165C6.50818 10.3165 5.44922 9.25755 5.44922 7.95123Z" fill="#1ABCFE"/>
            <path d="M0.714844 12.6739C0.714844 11.3676 1.77382 10.3086 3.08013 10.3086H5.44542V12.6739C5.44542 13.9802 4.38646 15.0392 3.08013 15.0392C1.77382 15.0392 0.714844 13.9802 0.714844 12.6739Z" fill="#0ACF83"/>
            <path d="M5.44922 0.851562V5.58213H7.81451C9.12083 5.58213 10.1798 4.52316 10.1798 3.21685C10.1798 1.91054 9.12083 0.851562 7.81451 0.851562H5.44922Z" fill="#FF7262"/>
            <path d="M0.714844 3.21685C0.714844 4.52316 1.77382 5.58213 3.08013 5.58213H5.44542V0.851562H3.08013C1.77382 0.851562 0.714844 1.91054 0.714844 3.21685Z" fill="#F24E1E"/>
            <path d="M0.714844 7.95123C0.714844 9.25755 1.77382 10.3165 3.08013 10.3165H5.44542V5.58594H3.08013C1.77382 5.58594 0.714844 6.64494 0.714844 7.95123Z" fill="#A259FF"/>
            </g>
            <defs>
            <clipPath id="clip0_359_74138">
            <rect width="9.55847" height="14.3377" fill="white" transform="translate(0.669922 0.78125)"/>
            </clipPath>
            </defs>
            </svg>

            </Badge>
            <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-100 h-[24.8px] w-[24.8px]">
            
          <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.33 0.78125V5.56049H5.55072L0.771484 0.78125H10.33ZM0.771484 5.56049H5.55072L10.33 10.3397H5.55072V15.119L0.771484 10.3397V5.56049Z" fill="black"/>
          </svg>
            </Badge>
          </div>
        </div>
        </div>
    </div>
</div>


  )
}

export default ProfileCard