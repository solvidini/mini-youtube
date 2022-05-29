import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const MenuToggler: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className='menu-toggler' onClick={onClick}>
      <FontAwesomeIcon className='menu-toggler__icon' icon={faEllipsisV} />
    </div>
  )
}

export default MenuToggler
