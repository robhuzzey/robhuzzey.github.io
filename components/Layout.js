import Link from 'next/link'
import Head from 'next/head'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default ({ className, children, title = 'This is the default title', loading = false }) => (
  <div className={className}>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" />
      <link rel="stylesheet" href="/static/style.css" />
    </Head>
    <header>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Rob Huzzey</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <Link href='/videos'><NavItem>Videos</NavItem></Link>
            <Link href='/books'><NavItem>Books</NavItem></Link>
          </Nav>

          <Nav pullRight>
            <Navbar.Text>Made by me:</Navbar.Text>
            <Link href='/songs'><NavItem>Songs</NavItem></Link>
            <NavItem href="/spotifyplaylister">Spotify Playlister</NavItem>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </header>

    {loading ? (
      <img src='/static/ajax-loader.gif' />
    ) : (
      children
    )}

    <footer></footer>
  </div>
)
