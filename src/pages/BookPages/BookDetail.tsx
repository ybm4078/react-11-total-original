import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY, type Book } from "./BookSearch.tsx";

const Container = styled.div`
    padding: 30px;
`;

const BackBtn = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 14px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #f3f3f3;
    color: #333;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        background-color: #e0e0e0;
        border-color: #999;
    }
`;

const Cover = styled.img`
    width: 200px;
    height: 300px;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const NoCover = styled.div`
    width: 200px;
    height: 300px;
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: #f3f3f3;
`;

function BookDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
            .then(res => res.json())
            .then((json: Book) => setBook(json))
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err.message);
                } else {
                    console.error(err);
                }
            });
    }, [id]);

    if (!book) {
        return <Container>Loading...</Container>;
    }

    return (
        <Container>
            <BackBtn
                onClick={() => {
                    navigate(-1);
                }}>
                &larr; 뒤로 가기
            </BackBtn>
            <h2>{book.volumeInfo.title}</h2>
            {book.volumeInfo.imageLinks ? (
                <Cover src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            ) : (
                <NoCover>No Cover</NoCover>
            )}
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            <p dangerouslySetInnerHTML={{ __html: book.volumeInfo.description || "" }}></p>
        </Container>
    );
}

export default BookDetail;
