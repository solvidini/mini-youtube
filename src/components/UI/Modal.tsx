import React, { FC, ReactNode, useCallback } from 'react'
import { createPortal } from 'react-dom'

import { Backdrop } from './Backdrop'

interface IModalProps {
  show: boolean
  onClose(event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>): void
  children: ReactNode
}

export const Modal: FC<IModalProps> = ({ show, onClose, children }) => {
  const focusModal = useCallback((node: HTMLDivElement) => {
    if (node) node.focus()
  }, [])

  return createPortal(
    <>
      <Backdrop show={show} onClick={onClose} />
      {show && (
        <div className='modal' ref={focusModal} tabIndex={-1}>
          {children}
        </div>
      )}
    </>,
    document.getElementById('modal-root') as HTMLElement,
  )
}
