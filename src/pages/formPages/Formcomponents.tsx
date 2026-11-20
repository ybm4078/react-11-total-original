import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f6fa;
    padding: 15px;
`;

export const Card = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 40px;
    border-radius: 16px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 24px;
    text-align: center;
`;