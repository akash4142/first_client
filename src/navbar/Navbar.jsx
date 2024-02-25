import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h3 className='logo'>AKASH  YADAV</h3>
      <ul className='unordered-list'>
        <li className='list-item'><a href="/">Home</a></li>
        <li className='list-item'><a href="/Experience">Experience</a></li>
        <li className='list-item'><a href="/Skills">Skills</a></li>
        <li className='list-item'><a href="/Contact">Contact</a></li>
      </ul>
    </div>
  );
}

