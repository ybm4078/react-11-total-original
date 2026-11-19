import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { Container } from "./MovieHome.tsx";
import styled from "styled-components";
import SearchBar from "./SearchBar.tsx";
import MovieCard from "./MovieCard.tsx";


const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 100px;
    justify-content: center;
`;

export type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
};

type ApiResponse = {
    Search: Movie[];
};

function Search() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    const [list, setList] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!keyword) return;

        setList([]);
        setError("");

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${keyword}`)
            .then(res => res.json())
            .then((json: ApiResponse) => setList(json.Search))
            .catch(() => {
                setError("검색하는데 오류가 발생하였습니다.");
            })
            .finally(() => setLoading(false));
    }, [keyword]);

    return (
        <Container>
            <h2>검색 키워드 : {keyword}</h2>

            <SearchBar keyword={keyword || ""} />

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <List>
                {Array.isArray(list)
                    ? list.map((x, index) => <MovieCard key={index} movie={x} />)
                    : "검색 결과가 없습니다."}
            </List>
        </Container>
    );
}

export default Search;
