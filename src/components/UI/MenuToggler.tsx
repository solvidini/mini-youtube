import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export const MenuToggler: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className='menu-toggler' onClick={onClick}>
      <FontAwesomeIcon className='menu-toggler__icon' icon={faEllipsisV} />
    </button>
  )
}
