import styled from "styled-components";
import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contests/theme/themeContext.tsx";
import { FaBook, FaHome, FaMoon, FaRocket, FaSun } from "react-icons/fa";
import { TbUniverse } from "react-icons/tb";
import { IoMdCheckbox } from "react-icons/io";
import { SiBitcoinsv } from "react-icons/si";
import { BiSolidCameraMovie } from "react-icons/bi";

const Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    background-color: ${props => props.theme.color.muted};
    padding: 20px;
    margin-top: 20px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.color.text};

    div {
        font-size: 24px;
        color: #2a51ed;
    }
`;

const Button = styled.button`
    border: 1px solid gray;
    border-radius: 16px;
    padding: 5px 10px;
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.background};
    margin-left: 50px;
    font-size: 14px;
    div {
        display: flex;
        align-items: center;
    }
`;

const Hlink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.color.text};
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;

    &:hover {
        color: #5d79eb;
    }
`;

function Header() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) throw new Error("Provider 안에서 사용해주세요");

    return (
        <>
            <Head>
                <Logo>
                    <div><TbUniverse /></div>
                    &nbsp; My Universe
                </Logo>
                <Nav>
                    <Hlink to={"/"}>
                        <FaHome />
                        &nbsp;Home
                    </Hlink>
                    <Hlink to={"/todo"}>
                        <IoMdCheckbox />
                        &nbsp;Todo
                    </Hlink>
                    <Hlink to={"/coin"}>
                        <SiBitcoinsv />
                        &nbsp;Coin
                    </Hlink>
                    <Hlink to={"/movie"}>
                        <BiSolidCameraMovie />
                        &nbsp;Movie
                    </Hlink>
                    <Hlink to={"/rocket"}>
                        <FaRocket />
                        &nbsp;Rocket
                    </Hlink>
                    <Hlink to={"/book"}>
                        <FaBook />
                        &nbsp;Book
                    </Hlink>
                </Nav>
                <Button onClick={themeContext.toggleTheme}>
                    {themeContext.theme === "light" ? (
                        <div>
                            <FaMoon color={"#ffa100"} />
                            &nbsp;dark
                        </div>
                    ) : (
                        <div>
                            <FaSun color={"rgb(255 157 0)"} />
                            &nbsp;light
                        </div>
                    )}
                </Button>
            </Head>
        </>
    );
}
export default Header;

