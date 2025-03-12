import { useState } from "react"
import "./App.css"
import Perfil from "./components/perfil/Perfil"
import Switch from "./components/switch/Switch"
import Foto from "./img/Lindona.webp"
import Links from "./components/links/Links"
import SocialLinks from "./components/socialLinks/SocialLinks"
import Rodape from "./components/rodape/Rodape"



const App = () => {
  const [isLight, setIsLight] = useState(true)

  const troca =() => {
    setIsLight (!isLight)
  }
  return (

    <div id="App" className={isLight && "light"}>

    <div id="container">
      <Perfil
      foto={Foto}
      nome={"@liv_217m"}
      />

      <Switch
      troca={troca}
      isLight={isLight}
      />

      <div id="links">
        <ul>
          <Links
          links={"https://github.com/LiviaOrmeleze"}
          nomeLink={"Sobre Mim"}
          />
          <Links
          links={"https://github.com/LiviaOrmeleze?tab=repositories"}
          nomeLink={"Meus Projetos"}
          />
           <Links
          links={"https://wa.link/hqp6f2"}
          nomeLink={"Meu contato"}
          />
        </ul>
      </div>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/LiviaOrmeleze"}
          icon={"logo-github"}
        />
        <SocialLinks 
          link={"https://www.instagram.com/liv_217m/"}
          icon={"logo-instagram"}
        />
      </div>
      <Rodape
      nome={"LiviaOrmeleze"}
      />
        </div>
      </div>
  )
}

export default App
