import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Modal } from './ui/Modal'

interface IMenuModalProps {
  show: boolean
  onClose(
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLLIElement, MouseEvent>,
  ): void
}

export const MenuModal: FC<IMenuModalProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <ul className='menu-modal'>
        <li className='menu-modal__item' onClick={onClose}>
          <Link to='/auth'>Sign In</Link>
        </li>
        <li className='menu-modal__item' onClick={onClose}>
          Settings
        </li>
        <li className='menu-modal__item' onClick={onClose}>
          Playback settings
        </li>
        <li className='menu-modal__item' onClick={onClose}>
          Your data in YouTube
        </li>
        <li className='menu-modal__item' onClick={onClose}>
          Feedback
        </li>
        <li className='menu-modal__item' onClick={onClose}>
          Help
        </li>
        <li className='menu-modal__item' onClick={onClose}>
          Cancel
        </li>
      </ul>
    </Modal>
  )
}
