import React from 'react'

const SearchInput: React.FC<{
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}> = ({ value, onChange }) => (
  <div className='search-input-container'>
    <input type='search' value={value} onChange={onChange} placeholder='Search...' />
    <button>X</button>
  </div>
)

export default SearchInput
