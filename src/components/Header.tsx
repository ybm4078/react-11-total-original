import styled from "styled-components";
import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contests/theme/themeContext.tsx";
import { FaBook, FaClipboardList, FaMoon, FaSun } from "react-icons/fa";
import { TbUniverse } from "react-icons/tb";
import { IoMdCheckbox } from "react-icons/io";
import { SiBitcoinsv } from "react-icons/si";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";

const Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    background-color: ${props => props.theme.color.muted};
    padding: 20px;
    margin-top: 20px;
    border: 1px solid ${props => props.theme.color.border};
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const Logo = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 800;
    color: ${props => props.theme.color.text};

    div {
        font-size: 24px;
        font-weight: 800;
        color: #5b74e2;
    }
`;

const Button = styled.button`
    border: 1px solid ${props => props.theme.color.border};
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
    color: ${props => props.theme.color.sideText};
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;

    &:hover {
        color: #5b74e2;
    }
`;

function Header() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) throw new Error("Provider 안에서 사용해주세요");

    return (
        <>
            <Head>
                <Logo to={"/"}>
                    <div>
                        <TbUniverse />
                    </div>
                    &nbsp; My Universe
                </Logo>
                <Nav>
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
                    <Hlink to={"/product"}>
                        <FaClipboardList />
                        &nbsp;product
                    </Hlink>
                    <Hlink to={"/form"}>
                        <IoShieldCheckmark />
                        &nbsp;form
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

