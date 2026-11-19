import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import styled from "styled-components";
import BookSearchBar from "./BookSearchBar.tsx";

const Container = styled.div`
    padding: 30px;
`;

const Message = styled.div`
    padding: 20px 0;
    color: #666;
    text-align: center;
`;

const BookItem = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    background-color: white;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    transition: all 0.5s;
    color: #333;
    text-decoration: none;

    &:hover {
        background-color: #f3f3f3;
    }
`;

const Cover = styled.img`
    width: 60px;
    height: 90px;
    object-fit: cover;
    border-radius: 4px;
`;

const NoCover = styled.div`
    width: 60px;
    height: 90px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    color: #777;
    background-color: #eee;
`;

const Title = styled.div`
    font-weight: 600;
    margin-bottom: 4px;
`;

const Authors = styled.div`
    font-size: 12px;
    color: #555;
`;

export type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        description?: string | undefined;
        imageLinks?: {
            thumbnail: string;
        };
    };
};

type ApiResponse = {
    items: Book[];
};

export const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

function BookSearch() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    const [list, setList] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!keyword) return;

        setLoading(true);

        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=20&key=${API_KEY}`,
        )
            .then(res => res.json())
            .then((json: ApiResponse) => setList(json.items || []))
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err.message);
                } else {
                    console.error(err);
                }
            })
            .finally(() => setLoading(false));
    }, [keyword]);

    return (
        <Container>
            <h3>검색 결과 : {keyword}</h3>

            <BookSearchBar keyword={keyword || ""} />

            {loading ? (
                <Message>로딩 중입니다...</Message>
            ) : list.length === 0 ? (
                <Message>검색 결과가 없습니다.</Message>
            ) : (
                list.map((item, index) => {
                    return (
                        <BookItem key={index} to={`/book/detail/${item.id}`}>
                            {item.volumeInfo.imageLinks ? (
                                <Cover
                                    src={item.volumeInfo.imageLinks.thumbnail}
                                    alt={item.volumeInfo.title}
                                />
                            ) : (
                                <NoCover>No Cover</NoCover>
                            )}

                            <div>
                                <Title>{item.volumeInfo.title}</Title>
                                <Authors>{item.volumeInfo.authors?.join(", ")}</Authors>
                            </div>
                        </BookItem>
                    );
                })
            )}
        </Container>
    );
}

export default BookSearch;
