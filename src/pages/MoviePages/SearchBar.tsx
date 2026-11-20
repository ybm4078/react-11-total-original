import { type ChangeEvent, type SubmitEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router";
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

function SearchBar({ keyword }: { keyword: string }) {
    const navigate = useNavigate();
    const [input, setInput] = useState(keyword || "");

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
        setInput(event.target.value);

    const location = useLocation();
    const Path = location.pathname.split("/");
    const onSubmitHandler = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const k = input.trim();
        if (!k) return;
        navigate(`/${Path[1]}/search?keyword=${encodeURIComponent(k)}`);
    };

    return (
        <Form onSubmit={onSubmitHandler}>
            <Input onChange={onChangeHandler} value={input} />
            <Button type={"submit"}>Search</Button>
        </Form>
    );
}

export default SearchBar;
