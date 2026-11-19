import { FaBook, FaHome, FaRocket } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { SiBitcoinsv } from "react-icons/si";
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
`;

const Div1 = styled.div`
    width: 100%;
    background-color: ${props => props.theme.color.muted};
    padding: 30px;
    border: 1px solid ${props => props.theme.color.border};
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);

    div {
        font-size: 24px;
        font-weight: 800;
        color: #5b74e2;
    }

    span {
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

const Card = styled(Link)`
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);
    text-decoration: none;
    padding: 30px;
    background-color: ${props => props.theme.color.muted};
    border: 1px solid ${props => props.theme.color.border};
    border-radius: 10px;
    width: calc((100% - 40px) / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    p {
        font-size: 40px;
        color: #5b74e2;
    }

    div {
        font-size: 18px;
        font-weight: 600;
        color: ${props => props.theme.color.text};
    }

    span {
        font-size: 12px;
        color: ${props => props.theme.color.sideText};
    }
`;


function Home() {
    return (
        <Container>
            <Div1>
                <div>My Project Dashboard</div>
                <span>지금까지 구축한 포트폴리오 리스트입니다.</span>
            </Div1>
            <Div2>
                <Card to={"/todo"}>
                    <p>
                        <IoMdCheckbox />
                    </p>
                    <div>투두리스트</div>
                    <span>일 체계적인 일정 관리와 할 일 목록 기록</span>
                </Card>
                <Card to={"/coin"}>
                    <p>
                        <SiBitcoinsv />
                    </p>
                    <div>코인트래커</div>
                    <span>실시간 가상화폐 시세 확인 및 정보 트래킹</span>
                </Card>
                <Card to={"/movie"}>
                    <p>
                        <BiSolidCameraMovie />
                    </p>
                    <div>무비검색앱</div>
                    <span>영화 데이터베이스 API를 활용한 영화 검색</span>
                </Card>
                <Card to={"/"}>
                    <p>
                        <FaHome />
                    </p>
                    <div>게시판</div>
                    <span>기본적인 커뮤니티 게시판</span>
                </Card>
                <Card to={"/rocket"}>
                    <p>
                        <FaRocket />
                    </p>
                    <div>로켓앱</div>
                    <span>스페이스X의 로켓 발사 상태 및 상세 정보 조회</span>
                </Card>
                <Card to={"/book"}>
                    <p>
                        <FaBook />
                    </p>
                    <div>구글북스 검색앱</div>
                    <span>구글 도서 데이터를 활용한 온라인 책 검색</span>
                </Card>
            </Div2>
        </Container>
    );
}
export default Home;
