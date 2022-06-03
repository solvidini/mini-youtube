import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchInput: React.FC<{
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}> = ({ value, onChange, onSubmit }) => (
  <form className='search-input-container' onSubmit={onSubmit}>
    <input type='search' value={value} onChange={onChange} placeholder='Search...' />
    <button type='submit'>
      <FontAwesomeIcon className='fa-magnifying' icon={faMagnifyingGlass} />
    </button>
  </form>
)

export default SearchInput
