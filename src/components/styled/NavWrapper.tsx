import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = () => {
  return (
    <Section>
      <Nav>
        <Ul>
          <Item>
            <Link to="/">홈</Link>
          </Item>
          <Item>
            <Link to="">목록</Link>
          </Item>
          <Item>
            <Link to="/mypage">마이페이지</Link>
          </Item>
          <Item>
            <Link to="">준비중</Link>
          </Item>
        </Ul>
      </Nav>
    </Section>
  );
};

export default NavWrapper;

const Section = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.gray100};
  width: 11rem;
  color: ${({ theme }) => theme.colors.white500};

  z-index: 10;
`;

const Nav = styled.nav`
  margin-top: 5rem;
  padding-left: 2rem;
  ${({ theme }) => theme.fonts.body5}
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;

  &:hover {
    a {
      color: ${({ theme }) => theme.colors.orange100};
    }
  }
`;
