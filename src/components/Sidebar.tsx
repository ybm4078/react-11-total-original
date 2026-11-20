import styled from "styled-components";
import { IoMdCheckbox } from "react-icons/io";
import { SiBitcoinsv } from "react-icons/si";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaBook, FaClipboardList, FaMoon, FaSun } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "../contests/theme/themeContext.tsx";
import { Link } from "react-router";

const Container = styled.aside`
    width: 200px;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 16px;
    box-sizing: border-box;
    background-color: ${props => props.theme.color.muted};
    border-right: 1px solid ${props => props.theme.color.border};
`;

const Div1 = styled.div`
    display: flex;
    flex-direction: column;
`;

const LogoLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.color.text};
    font-size: 20px;
    font-weight: 800;
    padding: 0 12px;
    display: flex;
    align-items: center;
    margin: 15px 0;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const Hlink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.color.sideText};
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 10px;
    transition: all 0.5s ease;

    svg {
        font-size: 18px;
    }

    &:hover {
        background-color: rgba(91, 116, 226, 0.1);
        color: #5b74e2;
    }
    &:first-child {
        background-color: rgba(91, 116, 226, 0.1);
        color: #5b74e2;
    }
`;

const ThemeButton = styled.button`
    background: none;
    border: none;
    font-size: 70px;
    
    
    &:hover {
        
    }
`;

const Cdiv = styled.div`
    background: ${props => props.theme.color.carrick};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    flex: 1;
`;

const EDiv = styled.div`
    color: ${props => props.theme.color.sideText};
    font-size: 10px;
    align-self: center;
`;

function Sidebar() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) throw new Error("Provider 안에서 사용해주세요");

    return (
        <Container>
            <Div1>
                <ThemeButton onClick={themeContext.toggleTheme}>
                    {themeContext.theme === "light" ? (
                        <FaSun color={"rgb(255 157 0)"} />
                    ) : (
                        <FaMoon color={"#ffa100"} />
                    )}
                </ThemeButton>
                <LogoLink to={"/"}>My Universe</LogoLink>
                <Nav>
                    <Hlink to={"/todo"}>
                        <IoMdCheckbox />
                        Todo
                    </Hlink>
                    <Hlink to={"/coin"}>
                        <SiBitcoinsv />
                        Coin
                    </Hlink>
                    <Hlink to={"/movie"}>
                        <BiSolidCameraMovie />
                        Movie
                    </Hlink>
                    <Hlink to={"/product"}>
                        <FaClipboardList />
                        Product
                    </Hlink>
                    <Hlink to={"/form"}>
                        <IoShieldCheckmark />
                        Form
                    </Hlink>
                    <Hlink to={"/book"}>
                        <FaBook />
                        Book
                    </Hlink>
                </Nav>
            </Div1>

            <Cdiv>
            </Cdiv>
            <EDiv>ybm4078@naver.com</EDiv>
        </Container>
    );
}

export default Sidebar;
