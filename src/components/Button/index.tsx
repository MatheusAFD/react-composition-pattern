import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  variant?: 'primary' | 'secondary'
}

export function Button({
  text = '',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const buttonVariant = {
    primary: 'bg-blue-500 hover:brightness-125 transition-colors',
    secondary: 'bg-gray-500 hover:brightness-125 transition-colors',
  }

  return (
    <button
      className={`w-full text-white font-bold rounded p-3 ${buttonVariant[variant]}`}
      {...props}
    >
      {text}
    </button>
  )
}
