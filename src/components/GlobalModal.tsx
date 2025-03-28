'use client';

import { Dialog } from '@/components/ui/dialog';
import { useModal } from '@/context/ModalContext';
import React from 'react';

export default function GlobalModal() {
  const { isOpen, modalContent, modalProps } = useModal();

  if (!modalContent) return null;

  return (
    <Dialog open={isOpen}>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[3px] z-50 transition-opacity duration-200">
        {modalContent &&
          React.cloneElement(
            modalContent as React.ReactElement,
            modalProps ?? {}
          )}
      </div>
    </Dialog>
  );
}
