import { type ChangeEvent, useState } from "react";
import * as React from "react";
import styled from "styled-components";
import { FaHeart, FaHeartBroken, FaTrash } from "react-icons/fa";

const Container = styled.div`
    padding: 30px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    gap: 10px;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px 16px;
    font-size: 1rem;
    border: 2px solid #e1e1e1;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
        border-color: #6366f1;
    }
`;

const SubmitButton = styled.button`
    padding: 12px 20px;
    background-color: #3451d8;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #4f46e5;
    }
`;

const Divider = styled.hr`
    height: 1px;
    background-color: #eaeaea;
    margin: 30px 0;
    width: 350px;
`;

const List = styled.ul`
    list-style: none;
    width: 350px;
`;

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 16px;
    background-color: #f9fafb;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f3f4f6;
    }
`;

const Text = styled.span<{ $completed: boolean }>`
    flex: 1;
    font-size: 1rem;
    word-break: break-all;
    margin-right: 10px;

    /* completed 상태에 따른 조건부 스타일 적용 */
    text-decoration: ${props => (props.$completed ? "line-through" : "none")};
    color: ${props => (props.$completed ? "#9ca3af" : "#1f2937")};
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 6px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

type Todo = {
    text: string;
    completed: boolean;
};

function Todo() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [todoValue, setTodoValue] = useState<string>("");

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newText = todoValue.trim();
        if (newText === "") {
            return;
        }

        setTodoList([...todoList, { text: newText, completed: false }]);
        setTodoValue("");
    };

    const handleDeleteTodo = (target: number) => {
        const result = todoList.filter((_, index) => target !== index);
        setTodoList(result);
    };

    const handleToggleTodo = (index: number) => {
        const newTodoList = todoList.map((item, i) => {
            if (i !== index) {
                return item;
            }
            return { ...item, completed: !item.completed };
        });
        setTodoList(newTodoList);
    };

    return (
        <Container>
            <Title>My ToDo ({todoList.length})</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Write your to do..."
                    onChange={handleOnChange}
                    value={todoValue}
                />
                <SubmitButton type="submit">Add To Do</SubmitButton>
            </Form>
            <Divider />
            <List>
                {todoList.map((item, index) => (
                    <ListItem key={index}>
                        <Text $completed={item.completed}>{item.text}</Text>
                        <ActionButton onClick={() => handleToggleTodo(index)}>
                            {item.completed ? <FaHeartBroken color={"red"}/> : <FaHeart color={"red"} /> }
                        </ActionButton>
                        <ActionButton onClick={() => handleDeleteTodo(index)}>
                            <FaTrash />
                        </ActionButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default Todo;
