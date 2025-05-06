import { Bell, ChevronDown, Globe } from 'lucide-react'
import React from 'react'

const HeaderPolygon = () => {
  return (
    <div className="min-h-[70px] px-7 py-4 bg-white shadow-md flex justify-end items-center gap-6">
      <div>
        <span>
          <Bell size={16} />
        </span>
      </div>
      <div className="flex items-center py-2 px-3 rounded-[12px] gap-2.5 text-[#414A53] shadow-sm">
        <span>
          <Globe size={16} />
        </span>
        <span className="text-xs">English</span>
        <span>
          <ChevronDown size={16} />
        </span>
      </div>
      <div className="flex gap-1.5 items-center">
        <div className="w-[40px] h-[40px] overflow-hidden rounded-full bg-[#F3B7D8] ">
          <img
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1746013328/0af11f9514742e5552359e9fb526151cb0b932f3_anu5fr.png"
            alt=""
            className="!object-scale-down"
          />
        </div>
        <div>
          <h2 className="text-xs text-[#08121D]">Samuel Favour</h2>
          <p className="text-[10px] text-[#0967D2]">Super Admin</p>
        </div>
        <div>
          <span className="text-[#08121D]">
            <ChevronDown size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderPolygon