'use client';

import { createContext, ReactNode, useContext, useState } from 'react';



interface ModalContextType {
  isOpen: boolean;
  modalContent: ReactNode | null;
  modalProps: Record<string, unknown> | null;
  openModal: (content: ReactNode, props?: Record<string, unknown>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [modalProps, setModalProps] = useState<Record<string, unknown> | null>(null);

  const openModal = (content: ReactNode, props: Record<string, unknown> = {}) => {
    setModalContent(content);
    setModalProps(props);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    setModalProps(null);
  };

  
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        modalContent,
        modalProps,
        openModal,
        closeModal,
      }}
    >
      {children}
      {/* {renderModal()} */}
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
