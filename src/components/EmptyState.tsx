import React from 'react';
import { Plus } from 'lucide-react';
import DocumentIcon from './icons/DocumentIcon';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onAction,
  icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center py-[100px] px-4 gap-[32px]"
    >
      <motion.div
        className="mb-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {icon || <DocumentIcon className="mx-auto" />}
      </motion.div>

      <motion.h2
        className="text-gray-800 font-gabarito font-medium text-base leading-5 tracking-normal text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 font-gabarito font-normal text-xs leading-4 tracking-normal w-[347px] h-[48px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {description}
      </motion.p>

      <button
        onClick={onAction}
        className="bg-blue text-white w-[347px] h-[40px] rounded-[12px] gap-[5px] pt-[5px] pr-[50px] pb-[5px] pl-[50px] bg-[#0967D2] flex items-center justify-center"
      >
        <Plus size={18} />
        <span>{actionLabel}</span>
      </button>
    </motion.div>
  );
};

export default EmptyState;
