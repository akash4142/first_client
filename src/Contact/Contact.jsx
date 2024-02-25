import '../Contact/contact.css';
import {Phone,LinkedIn,Email,Copyright} from "@mui/icons-material"

export default function Contact() {
  return (
    <>
    <div className='contact'>
      <h1 className='contactHeading'>Contact Me - </h1>
      <div className='contact2'>
      <div className="phone">
        <Phone className='phoneIcon'/>
        <h3 className='phoneNumber'>+1 437-984-4182</h3>
      </div>
      <div className="phone">
        <Email className='phoneIcon'/>
        <h3 className='phoneNumber'>yadavakki440@gmail.com</h3>
      </div>
      <div className="phone">
        <LinkedIn className='phoneIcon'/>
        <a href="https://www.linkedin.com/in/akash-yadav-922b06236/">LinkedIn</a>
      </div>
      </div>
    </div>


      <div className="copyright">
        <Copyright className='copyRightIcon'/>
        <h3 className='copyRightText' >akashyadav@copyright2024</h3>
      </div>
      </>
  );
}
