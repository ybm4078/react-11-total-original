import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 60px auto;
    padding: 30px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

    h1 {
        font-size: 1.6rem;
        color: #1f2937;
        margin-bottom: 15px;
        text-align: center;
    }

    hr {
        border: none;
        height: 1px;
        background: #e5e7eb;
        margin: 20px 0;
    }

    select {
        width: 100%;
        padding: 12px 16px;
        font-size: 1rem;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        outline: none;
        background-color: #f9fafb;
        color: #1f2937;
        cursor: pointer;
        transition:
            border-color 0.2s,
            background-color 0.2s;

        &:hover {
            background-color: #f3f4f6;
        }

        &:focus {
            background-color: white;
            border-color: #3b82f6;
        }
    }
`;

type Coin = {
    market: string;
    korean_name: string;
    english_name: string;
};

function App() {
    const [coins, setCoins] = useState<Coin[]>([]);

    const firestThen = (response: Response): Promise<Coin[]> => {
        return response.json();
    };

    const secondThen = (json: Coin[]) => {
        setCoins(json);
    };

    useEffect(() => {
        fetch("https://api.upbit.com/v1/market/all")
            .then(firestThen)
            .then(secondThen)

            .catch((error: unknown) => {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log("알 수 없는 에러가 발생되었습니다" + error);
                }
            });
    }, []);

    return (
        <Container>
            <h1>업비트 코인 목록 ({coins.length}개)</h1>
            <hr />
            <select>
                {coins.map((item, index) => {
                    return (
                        <option key={index} value={item.market}>
                            {item.korean_name}({item.market})
                        </option>
                    );
                })}
            </select>
        </Container>
    );
}

export default App;

