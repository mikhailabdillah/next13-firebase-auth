import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button type="button" className={cn(styles.default, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
