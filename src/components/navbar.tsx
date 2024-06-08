import { NavLink } from './nav-link'

export function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/athletes">
        <span>Atletas</span>
      </NavLink>
    </nav>
  )
}
