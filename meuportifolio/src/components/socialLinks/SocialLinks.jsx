import styles from './SocialLinks.module.css'

const SocialLinks = (props) => {
  return (
   <a href={props.link}>
    <ion-icons name={props.icon}></ion-icons>
   </a>
  )
}

export default SocialLinks
