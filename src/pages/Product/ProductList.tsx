import { useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

export type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    brand: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    weight: number;
    description: string;
};

type ApiResponse = {
    products: Product[];
};

const LoadingMessage = styled.div`
    padding: 80px 0;
    text-align: center;
    color: #888;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 32px 16px;
`;

const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 24px;
`;

const ListWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const Card = styled(Link)`
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    overflow: hidden;
    background-color: white;
    text-decoration: none;
    width: calc(25% - 15px); /* 한 줄에 4개가 올라가게 */
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.12);
    }
`;

const Thumbnail = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1; /* 비율 (width를 부모의 100%로 줬기 때문에 height 알 수 없어서) */
    object-fit: cover;
    background-color: #f3f3f3; /* 만약 이미지 불러오기에 실패할 경우 */
`;

const Info = styled.div`
    padding: 12px 16px 16px;
`;

const Name = styled.h3`
    font-size: 16px;
    margin-bottom: 6px;
    color: inherit;
`;

const Price = styled.p`
    font-weight: bold;
    color: #2563ed;
`;

function ProductList() {
    const [list, setList] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=12")
            .then(res => res.json())
            .then((json: ApiResponse) => {
                setList(json.products || []);
            })
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <LoadingMessage>데이터를 로드 중입니다...</LoadingMessage>;
    }

    if (list.length === 0) {
        return <LoadingMessage>상품을 찾을 수 없거나, 오류가 발생 되었습니다.</LoadingMessage>;
    }

    return (
        <Container>
            <Title>상품 목록</Title>
            <ListWrap>
                {list.map(item => {
                    return (
                        <Card to={`/product/${item.id}`} key={item.id}>
                            <Thumbnail src={item.thumbnail} alt={item.title} />
                            <Info>
                                <Name>{item.title}</Name>
                                <Price>${item.price}</Price>
                            </Info>
                        </Card>
                    );
                })}
            </ListWrap>
        </Container>
    );
}

export default ProductList;
