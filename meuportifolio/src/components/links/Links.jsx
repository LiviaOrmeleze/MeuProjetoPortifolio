import styles from './Links.module.css'

const Links = (props) => {
  return (
    <div > 
      <li> 
        <a href={props.links}>{props.nomeLink}</a>
      </li>
    </div>
  )
}

export default Links
