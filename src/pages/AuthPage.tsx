import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { Topbar } from '../components/ui/Topbar'
import { Layout } from '../containers/Layout'

// Dummy Auth Page
export const AuthPage = () => {
  const [credential, setCredential] = useState<string>('')

  const handleCredentialChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredential(event.target.value)
  }

  return (
    <Layout>
      <Topbar showSearchInput={false} />
      <div className='auth'>
        <div className='auth__title'>
          <h3>Sign in</h3>
          <span>to continue to YouTube</span>
        </div>
        <div className='auth__input'>
          <input
            type='text'
            value={credential}
            onChange={handleCredentialChange}
            placeholder='Email or phone'
          />
          <Link className='auth__link' to='/auth'>
            Forgot email?
          </Link>
        </div>
        <div className='auth__info'>This is some dummy functionality... :)</div>
        <div className='auth__actions'>
          <Link className='auth__link' to='/auth'>
            Create account
          </Link>
          <button className='auth__button'>Next</button>
        </div>
      </div>
    </Layout>
  )
}
