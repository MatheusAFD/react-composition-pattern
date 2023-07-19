import React, { ReactNode } from 'react'

interface DrawerHeaderProps {
  children?: React.ReactNode
}

export function DrawerHeader({ children }: DrawerHeaderProps) {
  return (
    <div className='flex justify-center'>
      <h1 className='text-2xl font-bold mb-4'>{children}</h1>
    </div>
  )
}
