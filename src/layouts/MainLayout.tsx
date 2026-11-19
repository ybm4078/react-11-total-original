import styled from "styled-components";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router";

const Wrap = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;

function MainLayout() {
    return (
        <Wrap>
            <Header />
            <Outlet />
        </Wrap>
    );
}

export default MainLayout;
