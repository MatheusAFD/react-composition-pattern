import { ReactNode } from 'react'

interface AlertDialogProps {
  children?: ReactNode
  isOpen?: boolean
}

export function DrawerRoot({ isOpen = false, children }: AlertDialogProps) {
  return (
    <>
      {isOpen && (
        <div className='fixed inset-y-0 right-0 w-2/6 max-w-lg h-screen bg-gray-900 text-white px-8 py-10 animate-from-right'>
          {children}
        </div>
      )}
    </>
  )
}
