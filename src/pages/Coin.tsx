import { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 30px
`;

const CoinList = styled.div`
    width: 320px;
    max-height: 590px;
    overflow-y: auto;
    background: #ffffff;
    border: 1px solid ${props => props.theme.color.border};
    border-radius: 16px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    position: sticky;
    top: 0;
    width: 100%;
    padding: 15px;
    background: #ffffff;
    border-bottom: 1px solid #f1f5f9;
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    
`;

const Div1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 6px;
    border-bottom: 1px solid #f1f5f9;
    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: #f8fafc;
    }

    div:first-child {
        display: flex;
        flex-direction: column;
        gap: 3px;
        font-size: 14px;
        font-weight: 600;
        color: #111827;

        span {
            font-size: 11px;
            font-weight: 400;
            color: #9ca3af;
        }
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 3px;
        font-size: 13px;
        font-weight: 600;
        color: #111827;

        span {
            font-size: 11px;
            font-weight: 500;
        }
    }
`;

const DetailBox = styled.div`
    height: 590px;
    flex: 1;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 32px;
    gap: 16px;
`;

const Name = styled.h2`
    color: black;
`;

const DtDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Divider = styled.hr`
    height: 1px;
    background-color: #f2f2f2;
    margin: 30px 0;
`;

const Card = styled.div`
    width: 50%;
    padding: 10px 20px 15px;
    background-color: #f1f1f1;
    border: 1px solid #f2f2f2;
    border-radius: 16px;
    font-size: 18px;
    font-weight: 600;
    color: #111827;

    span {
        font-size: 12px;
        color: #696969;
        font-weight: 300;
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
                    <Name>
                        {sideCoin.name} ({sideCoin.symbol})
                    </Name>
                    <Divider />
                    <DtDiv>
                        <Card>
                            <span>현재 가격 (USD)</span> <br />$
                            {Number(sideCoin.price_usd).toLocaleString()}
                        </Card>
                        <Card>
                            <span>시가총액</span> <br />$
                            {Number(sideCoin.market_cap_usd).toLocaleString()}
                        </Card>
                        <Card>
                            <span>24시간 거래량</span> <br />$
                            {Number(sideCoin.volume24).toLocaleString()}
                        </Card>
                        <Card>
                            <span>시가총액 순위</span> <br />
                            {sideCoin.rank}위
                        </Card>
                    </DtDiv>
                </DetailBox>
            )}
        </Container>
    );
}

export default App;
