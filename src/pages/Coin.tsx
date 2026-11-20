import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 30px;
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
    align-items: flex-start;
`;

const CoinList = styled.div`
    width: 320px;
    max-height: 600px;
    overflow-y: auto;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const Title = styled.h2`
    position: sticky;
    top: 0;
    width: 100%;
    background: #ffffff;
    font-size: 16px;
    font-weight: 700;
    color: #111827;
`;

const Div1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 14px;
    border-radius: 10px;
    cursor: pointer;

    div:first-child {
        display: flex;
        flex-direction: column;
        gap: 2px;
        font-weight: 600;
        color: #111827;

        span {
            font-size: 12px;
            font-weight: 400;
            color: #6b7280;
        }
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2px;
        font-weight: 600;
        color: #111827;

        span {
            font-size: 12px;
            color: #10b981;
        }
    }
`;

const DetailBox = styled.div`
    flex: 1;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 32px;

    h1 {
        margin: 0 0 24px 0;
        font-size: 28px;
        color: #2563eb;
    }

    p {
        margin: 12px 0;
        padding: 14px 16px;
        background: #f8fafc;
        border-radius: 10px;
        font-size: 16px;
        color: #1f2937;
    }
`;

type Coin = {
    id: string;
    symbol: string;
    name: string;
    nameid: string;
    rank: number;
    price_usd: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
    price_btc: string;
    market_cap_usd: string;
    volume24: number;
    volume24a: string;
    csupply: string;
    tsupply: string;
    msupply: string;
};
type ApiResponse = {
    data: Coin[];
};

function App() {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [sideCoin, setSideCoin] = useState<Coin | null>(null);

    const onClickHandle = (coin: Coin) => setSideCoin(coin);

    useEffect(() => {
        fetch(`https://api.coinlore.net/api/tickers/?start=0&limit=50`)
            .then(res => res.json())
            .then((json: ApiResponse) => {
                setCoins(json.data);
                setSideCoin(json.data[0]);
            });
    }, []);

    return (
        <Container>
            <CoinList>
                <Title>Top 50 Coins</Title>
                {coins.map(coin => (
                    <Div1
                        key={coin.id}
                        onClick={() => {
                            onClickHandle(coin);
                        }}>
                        <div>
                            {coin.name}
                            <span>{coin.symbol}</span>
                        </div>
                        <div>
                            ${Number(coin.price_usd).toLocaleString()}
                            <span
                                style={{
                                    color: Number(coin.percent_change_24h) >= 0 ? "green" : "red",
                                }}>
                                {Number(coin.percent_change_24h) >= 0 ? "↑" : "↓"}
                                {coin.percent_change_24h}%
                            </span>
                        </div>
                    </Div1>
                ))}
            </CoinList>

            {sideCoin && (
                <DetailBox>
                    <h1>
                        {sideCoin.name} ({sideCoin.symbol})
                    </h1>
                    <p>현재 가격: ${Number(sideCoin.price_usd).toLocaleString()}</p>
                    <p>시가총액: ${Number(sideCoin.market_cap_usd).toLocaleString()}</p>
                    <p>24시간 거래량: ${Number(sideCoin.volume24).toLocaleString()}</p>
                    <p>시가총액 순위: {sideCoin.rank}위</p>
                </DetailBox>
            )}
        </Container>
    );
}

export default App;
