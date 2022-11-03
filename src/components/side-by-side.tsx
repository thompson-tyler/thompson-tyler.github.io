import styled from "styled-components";

export interface SideBySideProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWidth?: number;
  rightWidth?: number;
}

export default function SideBySide(props: SideBySideProps) {
  const { left, right, leftWidth, rightWidth } = props;

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1rem;

    img {
      border-radius: 30px;
    }
  `;

  const Left = styled.div`
    width: ${leftWidth ? leftWidth : 50}%;
  `;
  const Right = styled.div`
    width: ${rightWidth ? rightWidth : 50}%;
  `;

  return (
    <Container>
      <Left>{left}</Left>
      <Right>{right}</Right>
    </Container>
  );
}
