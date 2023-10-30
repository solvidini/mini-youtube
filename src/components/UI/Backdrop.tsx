import React from 'react'
import { createPortal } from 'react-dom'

interface IBackdropProps {
  show: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const Backdrop = ({ show, onClick }: IBackdropProps) =>
  createPortal(
    show ? <div className='backdrop' onClick={onClick} /> : null,
    document.getElementById('backdrop-root') as HTMLElement,
  )
