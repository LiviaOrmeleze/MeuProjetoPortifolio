import styles from './SocialLinks.module.css'

const SocialLinks = (props) => {
  return (
   <a href={props.link}>
    <ion-icon name={props.icon}></ion-icon>
   </a>
  )
}

export default SocialLinks
