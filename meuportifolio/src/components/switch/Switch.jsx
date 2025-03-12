import styles from './Switch.module.css'

const Switch = (props) => {
  return (
    <div className={props.isLight ? styles.light : undefined}>
      <div onClick={props.troca} id={styles.switch} > 
        <button></button>
        <span></span>
      </div>
    </div>
  )
}

export default Switch
