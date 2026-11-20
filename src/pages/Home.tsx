import { FaBook, FaClipboardList } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { SiBitcoinsv } from "react-icons/si";
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router";
import styled from "styled-components";
import { IoShieldCheckmark } from "react-icons/io5";

const Container = styled.div`
    padding: 20px;
`;

const Div1 = styled.div`
    position: relative; /* 도형 위치 기준점 */
    overflow: hidden;
    width: 100%;
    background: ${props => props.theme.color.gradient};
    padding: 30px;
    border: 1px solid ${props => props.theme.color.border};
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);

    &::before {
        content: "";
        position: absolute;
        right: -30px;
        top: -50px;
        width: 220px;
        height: 220px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.18);
        pointer-events: none;
    }

    /* 오른쪽 앞쪽에 겹치는 테두리(링) 원 */

    &::after {
        content: "";
        position: absolute;
        right: 110px;
        bottom: -120px;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        border: 18px solid rgba(255, 255, 255, 0.14);
        pointer-events: none;
    }

    div {
        font-size: 24px;
        font-weight: 800;
    }

    span {
        font-size: 24px;
        font-weight: 800;
        color: #3451d8;
    }

    p {
        margin-top: 4px;
        font-size: 12px;
        color: ${props => props.theme.color.sideText};
    }
`;

const Div2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
`;

const Div3 = styled.div`
    margin-top: 10px;
    border-bottom: 3px solid #3451d8;
    width: 40px;
`;

/* 왼쪽 아이콘 박스 */
const IconBox = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`;

/* 가운데 텍스트 영역 */
const TextBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
        font-size: 18px;
        font-weight: 700;
        color: ${props => props.theme.color.text};
    }

    span {
        font-size: 12px;
        color: ${props => props.theme.color.sideText};
    }
`;

/* 오른쪽 동그란 화살표 버튼 */
const ArrowBtn = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f4f5f9;
    color: #555;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`;

/* 카드 공통 및 1~6번 개별 색상 적용 */
const Card = styled(Link)`
    text-decoration: none;
    padding: 28px 24px;
    background-color: ${props => props.theme.color.muted};
    border: 1px solid ${props => props.theme.color.border};
    border-radius: 20px;
    width: calc((100% - 40px) / 3);
    height: 140px;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-3px);
    }

    /* 1. 파란색 (투두리스트) */
    &:nth-child(1) {
        box-shadow: 0 5px 0 #4da1ff;
        ${IconBox} {
            background-color: #ebf4ff;
            color: #3182f6;
        }
    }

    /* 2. 보라색 (코인트래커) */
    &:nth-child(2) {
        box-shadow: 0 5px 0 #8b78ff;
        ${IconBox} {
            background-color: #f1eeff;
            color: #705df2;
        }
    }

    /* 3. 초록색 (무비검색앱) */
    &:nth-child(3) {
        box-shadow: 0 5px 0 #38d388;
        ${IconBox} {
            background-color: #e8fbf1;
            color: #20c975;
        }
    }

    /* 4. 주황색 (상품) */
    &:nth-child(4) {
        box-shadow: 0 5px 0 #ffa94d;
        ${IconBox} {
            background-color: #fff4e6;
            color: #ff922b;
        }
    }

    /* 5. 민트색 (로그인) */
    &:nth-child(5) {
        box-shadow: 0 5px 0 #3bc9db;
        ${IconBox} {
            background-color: #e3fafc;
            color: #15aabf;
        }
    }

    /* 6. 인디고색 (구글북스 검색앱) */
    &:nth-child(6) {
        box-shadow: 0 5px 0 #748ffc;
        ${IconBox} {
            background-color: #edf2ff;
            color: #5c7cfa;
        }
    }
`;

function Home() {
    return (
        <Container>
            <Div1>
                <div>
                    My Project <span>Dashboard</span>
                </div>
                <p>지금까지 구축한 포트폴리오 리스트입니다.</p>
                <Div3></Div3>
            </Div1>
            <Div2>
                <Card to={"/todo"}>
                    <IconBox>
                        <IoMdCheckbox />
                    </IconBox>
                    <TextBox>
                        <strong>투두리스트</strong>
                        <span>일 체계적인 일정 관리와 할 일 목록 기록</span>
                    </TextBox>
                    <ArrowBtn>&gt;</ArrowBtn>
                </Card>

                <Card to={"/coin"}>
                    <IconBox>
                        <SiBitcoinsv />
                    </IconBox>
                    <TextBox>
                        <strong>코인트래커</strong>
                        <span>실시간 가상화폐 시세 확인 및 정보 트래킹</span>
                    </TextBox>
                    <ArrowBtn>&gt;</ArrowBtn>
                </Card>

                <Card to={"/movie"}>
                    <IconBox>
                        <BiSolidCameraMovie />
                    </IconBox>
                    <TextBox>
                        <strong>무비검색앱</strong>
                        <span>영화 데이터베이스 API를 활용한 영화 검색</span>
                    </TextBox>
                    <ArrowBtn>&gt;</ArrowBtn>
                </Card>

                <Card to={"/product"}>
                    <IconBox>
                        <FaClipboardList />
                    </IconBox>
                    <TextBox>
                        <strong>상품</strong>
                        <span>기본적인 상품 리스트 및 상세정보</span>
                    </TextBox>
                    <ArrowBtn>&gt;</ArrowBtn>
                </Card>

                <Card to={"/form"}>
                    <IconBox>
                        <IoShieldCheckmark />
                    </IconBox>
                    <TextBox>
                        <strong>로그인</strong>
                        <span>form 정규식을 이용한 input</span>
                    </TextBox>
                    <ArrowBtn>&gt;</ArrowBtn>
                </Card>

                <Card to={"/book"}>
                    <IconBox>
                        <FaBook />
                    </IconBox>
                    <TextBox>
                        <strong>구글북스 검색앱</strong>
                        <span>구글 도서 데이터를 활용한 온라인 책 검색</span>
                    </TextBox>
                    <ArrowBtn>&gt;</ArrowBtn>
                </Card>
            </Div2>
        </Container>
    );
}

export default Home;
