import styles from './Perfil.module.css'

const Perfil = (props) => {
  return (
    <div id={styles.Perfil}>
            <img src={props.foto} alt="" />
            <p>{props.nome}</p>
    </div>
  )
}

export default Perfil
