import React from 'react'
import { Link } from 'react-router-dom'

import Modal from './ui/Modal'

interface IMenuModal {
  show: boolean
  onClose: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLLIElement, MouseEvent>,
  ) => void
}

const MenuModal: React.FC<IMenuModal> = ({ show, onClose }) => {
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

export default MenuModal
