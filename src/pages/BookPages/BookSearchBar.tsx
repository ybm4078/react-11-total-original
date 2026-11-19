import { type ChangeEvent, type SubmitEvent, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    gap: 10px;
    width: 100%;
    margin: 10px 0;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    padding: 12px 18px;
    border: none;
    background-color: black;
    color: white;
    border-radius: 8px;
    cursor: pointer;
`;

function BookSearchBar({ keyword }: { keyword: string }) {
    const navigate = useNavigate();
    const [input, setInput] = useState(keyword || "");

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
        setInput(event.target.value);

    const onSubmitHandler = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const k = input.trim();
        if (!k) return;

        navigate(`/book/search?keyword=${encodeURIComponent(k)}`);
    };

    return (
        <Form onSubmit={onSubmitHandler}>
            <Input onChange={onChangeHandler} value={input} />
            <Button type="submit">검색</Button>
        </Form>
    );
}

export default BookSearchBar;
