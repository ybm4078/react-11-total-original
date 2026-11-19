import { type ChangeEvent, useState } from "react";
import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 480px;
    margin: 80px auto;
    padding: 30px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
    font-size: 1.8rem;
    color: #333333;
    margin-bottom: 20px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
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
    background-color: #6366f1;
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
    border: none;
    height: 1px;
    background-color: #eaeaea;
    margin: 20px 0;
`;

const List = styled.ul`
    list-style: none;
    padding: 0; /* 기본 ul 패딩 초기화 */
`;

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
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
                            {item.completed ? "❤️" : "🤍"}
                        </ActionButton>
                        <ActionButton onClick={() => handleDeleteTodo(index)}>❌</ActionButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default Todo;
