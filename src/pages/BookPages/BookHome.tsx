import styled from "styled-components";
import SearchBar from "../MoviePages/SearchBar.tsx";


const Container = styled.div`
    padding: 40px;
`;

const Title = styled.span`
    display: block;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
`;

function BookHome() {
    return (
        <Container>
            <Title>Google Books검색</Title>
            <SearchBar keyword={""} />
        </Container>
    );
}

export default BookHome;
