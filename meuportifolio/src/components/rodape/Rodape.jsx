import styles from './Rodape.module.css'

const Rodape = (props) => {
  return (
  <footer>
    <p>
        Feito com 🤍 <a href="">{props.nome}</a>
    </p>
  </footer>
  )
}

export default Rodape
