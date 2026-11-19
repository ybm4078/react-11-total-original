import styled from "styled-components";
import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contests/theme/themeContext.tsx";
import { FaMoon, FaSun } from "react-icons/fa";

const Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    background-color: ${props => props.theme.color.muted};
    padding: 10px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 15px;
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.color.primary};
`;

const Button = styled.button`
    background: none;
    border: none;
`;

function Header() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) throw new Error("Provider 안에서 사용해주세요");

    return (
        <>
            <Head>
                <Logo>My Universe</Logo>
                <Nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/todo"}>Todo</Link>
                    <Link to={"/coin"}>Coin</Link>
                    <Link to={"/movie"}>Movie</Link>
                    <Link to={"/rocket"}>Rocket</Link>
                    <Link to={"/book"}>Book</Link>
                </Nav>
                <Button onClick={themeContext.toggleTheme}>
                    {themeContext.theme === "light" ? (
                        <div><FaMoon />다크</div>
                    ) : (
                        <div><FaSun />라이트</div>
                    )}
                </Button>
            </Head>
        </>
    );
}
export default Header;

