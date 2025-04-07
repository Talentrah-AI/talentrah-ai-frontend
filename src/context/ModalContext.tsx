'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalProps {
  [key: string]: unknown;
}

interface ModalContextType {
  isOpen: boolean;
  modalType: string | null;
  modalContent: ReactNode | null;
  modalProps: ModalProps | null;
  openModal: (content: ReactNode, props?: ModalProps) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = (content: ReactNode, props: ModalProps = {}) => {
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
        modalType,
        modalContent,
        modalProps,
        openModal,
        closeModal,
      }}
    >
      {children}
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
