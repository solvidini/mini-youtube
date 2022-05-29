import React from 'react'
import ReactDOM from 'react-dom'

interface IBackdrop {
  show: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Backdrop = ({ show, onClick }: IBackdrop) =>
  ReactDOM.createPortal(
    show ? <div className='backdrop' onClick={onClick}></div> : null,
    document.getElementById('backdrop-root') as HTMLElement,
  )

export default Backdrop
