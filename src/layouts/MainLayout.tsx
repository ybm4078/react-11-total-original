import styled from "styled-components";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar.tsx";

const Div1 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const Wrap = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    background: ${props => props.theme.color.background};
    background-size: contain;
    color: ${props => props.theme.color.text};
`;

function MainLayout() {
    return (
        <Div1>
            <Sidebar />
            <Wrap>
                <Header />
                <Outlet />
            </Wrap>
        </Div1>
    );
}

export default MainLayout;
