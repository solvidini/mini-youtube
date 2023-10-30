import React, { ChangeEventHandler, FC, FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const SearchInput: FC<{
  value: string
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}> = ({ value, onChange, onSubmit }) => (
  <form className='search-input-container' onSubmit={onSubmit}>
    <input type='search' value={value} onChange={onChange} placeholder='Search...' />
    <button type='submit'>
      <FontAwesomeIcon className='fa-magnifying' icon={faMagnifyingGlass} />
    </button>
  </form>
)
