'use client'
import { useState } from 'react'
import { AllHTMLAttributes } from 'react'
import styles from './alert.module.css'
import cn from 'classnames'
import { CloseIcon } from '../icons'

interface AlertProps extends AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  variant?: 'success' | 'info' | 'danger' | 'warning'
}

const Alert = ({
  children,
  variant = 'info',
  className,
  ...rest
}: AlertProps) => {
  const [visible, setVisible] = useState(true)
  const variantClass = {
    [styles.success]: variant === 'success',
    [styles.info]: variant === 'info',
    [styles.danger]: variant === 'danger',
    [styles.warning]: variant === 'warning',
  }

  if (!visible) {
    return null
  }

  return (
    <div
      role="alert"
      className={cn(styles.default, variantClass, className)}
      {...rest}
    >
      {children}
      <button
        type="button"
        className={styles.closeButton}
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        <CloseIcon size={16} />
      </button>
    </div>
  )
}

export default Alert
