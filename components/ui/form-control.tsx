import styles from './form-control.module.css'

interface FormControl {
  children?: React.ReactNode
}

const FormControl = ({ children }: FormControl) => {
  return <div className={styles.formControl}>{children}</div>
}

export default FormControl
