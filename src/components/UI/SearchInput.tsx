import React from 'react'

const SearchInput: React.FC<{
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}> = ({ value, onChange }) => {
  return (
    <div>
      <input type='search' value={value} onChange={onChange} placeholder='Search...' />
    </div>
  )
}

export default SearchInput
