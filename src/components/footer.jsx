import React from 'react'
import "../footer.css"
import { AiOutlineMail,AiOutlineHome,AiOutlinePhone,AiOutlineFacebook,AiFillTwitterCircle,AiFillLinkedin, AiFillFacebook, AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
<div className="footer-container">
    <div className="left">
     <div className="location">
<AiOutlineHome size={20} style={{color:"#fff", marginLeft:"2rem" }} />
<div>
    <p>123 Housing Soceity.</p>
    <p>Bangladesh.</p>
</div>
     </div>
     <div className="phone">
     <AiOutlinePhone size={20} style={{color:"#fff", marginLeft:"2rem" }} />
     <p> 1-3434-343-233</p>
    
     </div>
     <div className="email">
    <AiOutlineMail size={20} style={{color:"#fff", marginLeft:"2rem" }} />
     <p>Info@gmail.com</p>
     </div>
    </div>
    <div className="right">
<h4>
    About the Company
</h4>
<p>
   apofapsf oaihfoashifsoa aifshasoif oiashfoia oaishfoa
</p>
<div className="social">
    <AiFillFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
    <AiFillTwitterCircle size={20} style={{color:"#fff",marginRight:"2rem"}}/>
    <AiFillInstagram size={20} style={{color:"#fff",marginRight:"2rem"}}/>
</div>
    </div>
</div>
      </div>
    </>
  )
}

export default Footer
