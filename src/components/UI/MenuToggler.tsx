import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const MenuToggler: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className='menu-toggler' onClick={onClick}>
      <FontAwesomeIcon className='menu-toggler__icon' icon={faEllipsisV} />
    </button>
  )
}

export default MenuToggler
