import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react'

const indexGate = () => {
  return (
    <div>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.59202 10.7269H4.59875C4.37565 10.7269 4.12598 10.5516 4.05162 10.3392L1.85245 4.18789C1.53904 3.3061 1.90557 3.03518 2.65987 3.57701L4.73155 5.05905C5.07683 5.29809 5.46992 5.17592 5.61865 4.78814L6.55356 2.29682C6.85103 1.50002 7.34505 1.50002 7.64252 2.29682L8.57743 4.78814C8.72616 5.17592 9.11925 5.29809 9.45922 5.05905L11.4034 3.67262C12.2321 3.07768 12.6305 3.38046 12.2905 4.34193L10.1445 10.3498C10.0648 10.5516 9.81512 10.7269 9.59202 10.7269Z"
          stroke="#0967D2"
          stroke-width="0.796798"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.17383 12.332H10.017"
          stroke="#0967D2"
          stroke-width="0.796798"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.76758 8.08203H8.42357"
          stroke="#0967D2"
          stroke-width="0.796798"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div>
        <AvatarImage
          src="https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png"
          alt="Mercy Benjamin"
        />
        <AvatarFallback>CN</AvatarFallback>
      </div>
    </div>
  );
}

export default indexGate