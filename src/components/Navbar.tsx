import React, { FC } from 'react'
import { RouteComponentProps, Link, withRouter } from 'react-router-dom'

type NavbarProps = {} & RouteComponentProps<{}>

const routeMap = ['/', '/timeline', '/profile', '/users', '/services', '/issue-board']
const tabMap = {
  '/': 'Home',
  '/timeline': 'Timeline',
  '/profile': 'Profile',
  '/users': 'Users',
  '/services': 'Services',
  '/issue-board': 'IssueBoard',
}

function iconMap(r) {
  if (r === '/timeline') return <i className="address card icon" />
  if (r === '/profile') return <i className="user icon" />
  if (r === '/users') return <i className="users icon" />
  if (r === '/services') return <i className="handshake icon" />
  if (r === '/issue-board') return <i className="clipboard list icon" />
  return <i className="home icon" /> // homeのとき
}

const Navbar: FC<NavbarProps> = props => (
  <div className="ui secondary pointing menu">
    {routeMap.map(r =>
      props.location.pathname === r ? (
        <Link key={r} className="ui teal item active" to={r}>
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
