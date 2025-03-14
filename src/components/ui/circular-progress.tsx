'use client';

import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface CircularProgressProps {
  value: number;
  color: string;
  bgColor: string;
  size?: number;
  label: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  color,
  bgColor,
  size = 80,
  label,
}) => {
  const data = [{ value: value }, { value: 100 - value }];

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <PieChart width={size} height={size}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={size * 0.4}
          outerRadius={size * 0.48}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          strokeWidth={0}
        >
          <Cell fill={color} />
          <Cell fill={bgColor} />
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex flex-col items-center justify-center w-[49px] h-[33px] top-[28px] left-[16px]">
        <span className="font-gabarito font-normal text-[9.05px] leading-[13.57px] tracking-[0px] text-center align-middle text-[#90989F]">
          {label}
        </span>
        <span className="font-gabarito font-bold text-[13.57px] leading-[18.1px] tracking-[0px] text-center align-middle text-[#08121D]">
          {value}%
        </span>
      </div>
    </div>
  );
};
