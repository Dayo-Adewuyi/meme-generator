import React from "react"
import troll from "./Trollface.png"
const Header =()=>{
return(
<header className="header">
<div className="header-content"><img className="troll" src={troll} alt="troll"></img>
<h2>Meme Generator</h2>
</div>

</header>

)


}

export default Header;