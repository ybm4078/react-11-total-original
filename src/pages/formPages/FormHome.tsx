import styled from "styled-components";
import {useNavigate} from "react-router";
import { Card, Title, Wrap } from "./Formcomponents.tsx";
import { useForm } from "react-hook-form";

const Input = styled.input`
    padding: 14px;
    border-radius: 10px;
    border: 1px solid #ddd;
    transition: all 0.5s;

    &:focus {
        outline: none;
        border: 1px solid #6c5ce7;
    }
`;

const Button = styled.button`
    margin-top: 24px;
    padding: 14px;
    background-color: #6c5ce7;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 700;
`;

const ErrorMessage = styled.p`
    font-size: 12px;
    color: #d63031;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

type FormValues = {
    username: string;
    password: string;
    name: string;
    email: string;
}

function FormHome() {
    const navigate = useNavigate();

    const {
        register,  
        handleSubmit,  
        formState: {errors},
    } = useForm<FormValues>();

    const submitHandler = (data: FormValues) => {
  
        const queryString = new URLSearchParams(data).toString();
        navigate(`/form/result?${queryString}`);
    }

    return (
        <Wrap>
            <Card onSubmit={handleSubmit(submitHandler)}>
                <Title>회원가입</Title>
                <InputGroup>
                    <Input
                        placeholder={"아이디"}
                        {...register("username", {required: "아이디는 필수 값입니다"})}
                    />
                    {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                    <Input
                        placeholder={"비밀번호"}
                        type={"password"}
                        {...register("password",{
                            required:"비밀번호는 필수 값입니다",
                            minLength: {
                                value: 6,
                                message: "비밀번호는 최소 6자 이상이여야 합니다."
                            },
                            maxLength: {
                                value: 50,
                                message: "비밀번호는 최대 50자 이하여야 합니다."
                            }})}
                    />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                    <Input placeholder={"이름"} {...register("name",{required: "이름은 필수 값입니다"})} />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                    <Input
                        placeholder={"이메일"}
                        type={"email"}
                        {...register("email",{
                            required: "이메일은 필수 값입니다",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "올바른 이메일 형식이 아닙니다."
                            }
                        })}
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </InputGroup>
                <Button type={"submit"}>회원가입</Button>
            </Card>
        </Wrap>
    );
}

export default FormHome;