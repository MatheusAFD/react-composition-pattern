import { ReactNode } from 'react'

interface DrawerContentProps {
  children?: ReactNode
}

export function DrawerContent({ children }: DrawerContentProps) {
  return <main className='mt-8'>{children} </main>
}
