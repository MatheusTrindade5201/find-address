import { Link } from "react-router-dom"
import { HeaderContainer, Logo } from "./style"

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <nav className="header__links">
                <Link className="link" to={'/'} >Home</Link>
                <Link className="link" to={'/history'}>History</Link>
            </nav>
        </HeaderContainer>
    )
}

export default Header