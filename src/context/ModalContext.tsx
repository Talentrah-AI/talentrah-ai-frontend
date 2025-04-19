'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import modal components
const ResumeModal = dynamic(() => import('@/components/modals/ResumeModal'));
const CoverLetterModal = dynamic(
  () => import('@/components/modals/CoverLetterModal')
);

interface ModalProps {
  [key: string]: unknown;
}

interface ModalContextType {
  isOpen: boolean;
  modalType: string | null;
  modalProps: ModalProps | null;
  openModal: (type: string, props?: ModalProps) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = (type: string, props: ModalProps = {}) => {
    setModalType(type);
    setModalProps(props);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
    setModalProps(null);
  };

  const renderModal = () => {
    if (!isOpen || !modalType) return null;

    switch (modalType) {
      case 'resume':
        return <ResumeModal {...modalProps} />;
      case 'coverLetter':
        return <CoverLetterModal {...modalProps} />;
      default:
        return null;
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        modalType,
        modalProps,
        openModal,
        closeModal,
      }}
    >
      {children}
      {renderModal()}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
