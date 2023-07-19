import { ReactNode } from 'react'

interface DrawerFooterProps {
  children?: ReactNode
}

export function DrawerFooter({ children }: DrawerFooterProps) {
  return (
    <footer className='absolute bottom-8 w-full gap-4'>
      <div className='flex flex-col gap-4 mr-16'>{children}</div>
    </footer>
  )
}
