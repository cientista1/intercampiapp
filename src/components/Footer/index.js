import React from 'react';
import logo from "../../assets/logo.png";
import "./index.css";
import Contact from "../Contact";
export default function Footer() {
    return(
        <div className="footer">
            <Contact/>
            <div className="bottom">
                <label style={{color:'black'}}>@Copyright - <a href="https://www.linkedin.com/in/edeson-bizerril-981369b8/" target="_blank"> Edeson Bizerril</a>. Todos direitos reservados</label>
                <label  style={{color:'black'}}> Desenvolvido por <a href="https://www.facebook.com/CodePro.ao" target="_blank">Code Pro Inc</a></label>
            </div>
        </div>
    )
};