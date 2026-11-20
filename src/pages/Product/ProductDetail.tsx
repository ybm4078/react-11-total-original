
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import type { Product } from "./ProductList.tsx";

const LoadingMessage = styled.div`
    text-align: center;
    padding: 100px;
    font-size: 1.1rem;
    color: #999;
`;

const Background = styled.div`
    background-image: url("https://unsplash.com");
    height: 100dvh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.5s;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
`;

const BackLink = styled(Link)`
    text-decoration: none;
    color: #666;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: #f1f3f5;
    border: 1px solid #cbcbcb;
    margin: 10px;
    display: inline-block;

    &:hover {
        background-color: #e9ecef;
        color: #0077ff;
    }
`;

const Body = styled.div`
    padding: 20px;
    background-color: white;
    display: flex;
    border: 1px solid #cbcbcb;
    border-radius: 10px;
    margin: 20px 0;
`;

const Thumbnail = styled.img`
    width: 50%;
    border: 1px solid #c2c2c2;
    border-radius: 10px;
    aspect-ratio: 1 / 1; /* 비율 (width를 부모의 100%로 줬기 때문에 height 알 수 없어서) */
    object-fit: cover;
    background-color: #f3f3f3;
    margin-right: 20px;
`;

const Card = styled.div`
    div {
        max-width: 500px;
        margin: 20px 10px;
        font-size: 18px;
    }

    div:last-child {
        font-size: 16px;
        color: #6b6b6b;
        padding: 10px;
        border: 1px solid #c2c2c2;
        border-radius: 10px;
    }

    span {
        margin: 20px 10px;
        font-size: 26px;
        color: #2563ed;
    }
`;

const Title = styled.h2`
    font-family: "Cormorant Garamond", sans-serif;
    margin: 20px 10px 30px 10px;
    font-size: 36px;
    padding-bottom: 20px;
    border-bottom: 1px solid #c2c2c2;
`;

function ProductDetail() {
    const { id } = useParams(); // string | undefined

    const [post, setPost] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((json: Product) => setPost(json))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <LoadingMessage>본문을 불러오는 중입니다...</LoadingMessage>;
    }

    if (!post) {
        return <LoadingMessage>상품을 찾을 수 없습니다.</LoadingMessage>;
    }

    return (
        <Background>
            <Container>
                <BackLink to={"/product"}>&larr; 목록으로</BackLink>
                <Body>
                    <Thumbnail alt={post.title} src={post.thumbnail} />
                    <Card>
                        <Title>{post.title}</Title>
                        <div> 브랜드 : {post.brand}</div>
                        <span>$ {post.price}</span>
                        <div> 할인률 : {post.discountPercentage}%</div>
                        <div> 평점 : {post.rating}/5 점</div>
                        <div> 재고 : {post.stock}개</div>
                        <div> 무게 : {post.weight}g</div>
                        <div> 설명 : {post.description}</div>
                    </Card>
                </Body>
            </Container>
        </Background>
    );
}

export default ProductDetail;
