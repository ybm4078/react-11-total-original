
import styled from "styled-components";
import SearchBar from "./SearchBar.tsx";

export const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

function MovieHome() {
    return (
        <Container>
            <h1>Movie Search</h1>
            <SearchBar keyword={""} />
        </Container>
    );
}

export default MovieHome;
