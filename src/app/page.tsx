'use client'

import { Button } from '@/components/Button'
import { Drawer } from '@/components/Drawer'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  function handleOpenDrawer() {
    setIsOpen(true)
  }

  function handleCloseDrawer() {
    setIsOpen(false)
  }

  useOnClickOutside(ref, handleCloseDrawer)

  return (
    <main ref={ref}>
      <div className='flex'>
        <div className='flex flex-col gap-4 text-white p-4'>
          <button
            className='p-4 bg-blue-500 rounded-md'
            onClick={handleOpenDrawer}
          >
            Open Drawer
          </button>
        </div>

        <Drawer.Root isOpen={isOpen}>
          <Drawer.Header>Editando Matheus</Drawer.Header>
          <Drawer.Content>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            nobis molestiae, delectus maiores vel temporibus tempora dolorem
            nostrum porro cum.
          </Drawer.Content>
          <Drawer.Footer>
            <Button onClick={handleCloseDrawer} text={'Salvar'} />

            <Button
              onClick={handleCloseDrawer}
              text={'Cancelar'}
              variant='secondary'
            />
          </Drawer.Footer>
        </Drawer.Root>
      </div>
    </main>
  )
}
