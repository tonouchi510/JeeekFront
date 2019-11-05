import React, { FC } from 'react'
import { RouteComponentProps, Link, withRouter } from 'react-router-dom'

type NavbarProps = {} & RouteComponentProps<{}>

const routeMap = ['/', '/timeline', '/profile', '/friends']
const tabMap = {
  '/': 'Home',
  '/timeline': 'Timeline',
  '/profile': 'Profile',
  '/friends': 'Friends',
}

function iconMap(r) {
  if (r === '/') return <i className="home icon" />
  if (r === '/timeline') return <i className="address card icon" />
  if (r === '/profile') return <i className="user icon" />
  return <i className="users icon" />
}

const Navbar: FC<NavbarProps> = props => (
  <div className="ui secondary pointing menu">
    {routeMap.map(r =>
      props.location.pathname === r ? (
        <Link key={r} className="item active" to={r}>
          <h3>
            {iconMap(r)}
            {tabMap[r]}
          </h3>
        </Link>
      ) : (
        <Link key={r} className="item" to={r}>
          <h3>
            {iconMap(r)}
            {tabMap[r]}
          </h3>
        </Link>
      ),
    )}
    <div className="right menu">
      <Link className="ui item" to="/#">
        <h3>Logout</h3>
      </Link>
    </div>
  </div>
)

export default withRouter(Navbar)
