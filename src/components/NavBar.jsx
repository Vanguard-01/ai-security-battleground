import { Link } from 'react-router-dom'
export default function NavBar(){
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-gray-900/80">
      <Link to="/" className="font-bold">AI Security BattleGround</Link>
      <div className="flex gap-4">
        <Link to="/resources">Resources</Link>
        <Link to="/capstone">Capstone</Link>
      </div>
    </nav>
  )
}

