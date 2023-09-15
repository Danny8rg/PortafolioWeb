import Header from "../components/Header/Header"
import TheFooter from "../components/Footer/Footer"
import './Contacts.css'
function Contacts (){
    return (
        <>
        <Header />
        <div id="PrincipalBox">
        <div id="Upbox">
            <p className="ContactsText">316 728 1435</p>
            <p className="ContactsText">@DannySoft</p>
            <p className="ContactsText">DannyCodes97@Gmail.com</p>
            <p className="ContactsText">Danny A Rodriguez G </p>
        </div>
        <div id="MagesBox">
            <img src="../public/WhatsUp.png" alt="Whatsup" className="Mages"/>
            <img src="../public/Instagram.jpg" alt="Instagram" className="Mages"/>
            <img src="../public/GMail.png" alt="Correo" className="Mages"/>
            <img src="../public/Facebook.png" alt="Facebook" className="Mages"/>
        </div>
        </div>
        <TheFooter />
        </>
    )
}

export default Contacts