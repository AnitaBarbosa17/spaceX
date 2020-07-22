import Link from 'next/link';
import classNames from 'classnames';
import { Container, List, Image, Item } from '../styles/NavBar';

const NavBar = ({ classes, children, ...restProps }) => {
    return(
        <Container className={classNames('navbar', classes)} {...restProps}>
            <NavBar.List>
                <NavBar.Item>
                    <Link href="/">
                        <a>
                            <NavBar.Image src="/images/SpaceX-Logo.svg" alt="Logo"/> 
                        </a>
                    </Link>
                </NavBar.Item>
                <NavBar.Item>
                    <Link href="/about"><a>About</a></Link>
                </NavBar.Item>
            </NavBar.List>
        </Container>
    )
}

NavBar.List = function NavList({ classes, children, ...restProps}) {
    return (
        <List className={classNames('nav__list', classes)} {...restProps}>
            {children}
        </List>
    )
}

NavBar.Image = function NavImage({ src, alt, classes, ...restProps}) {
    return (
        <Image 
        src={src}
        alt={alt}
        className={classNames('nav__image'), classes}
        {...restProps}
        />
    )
}

NavBar.Item = function NavItem({ classes, children, ...restProps}) {
    return (
        <Item className={classNames('nav__item', classes)} {...restProps}>
            {children}
        </Item>
    )
}

export default NavBar;