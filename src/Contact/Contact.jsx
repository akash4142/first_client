import '../Contact/contact.css';
import { HiPhone } from "react-icons/hi2";

export default function Contact() {
  return (
    <div className='contact'>
      <h1 className='contactHeading'>Contact Me - </h1>
      <div className="phone">
        <HiPhone className='phoneIcon'/>
        
      </div>
    </div>
  );
}
