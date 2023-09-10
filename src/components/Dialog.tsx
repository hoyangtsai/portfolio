import React from 'react'

type DialogProps = {
    children: React.ReactNode
}

const Dialog = ({ children }: DialogProps) => {
  return (
    <dialog open>
        {children}
    </dialog>
  )
}

export default Dialog