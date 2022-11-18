import styled from "styled-components";

export interface SideBySideProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function SideBySide(props: SideBySideProps) {
  const { left, right } = props;

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
  `;

  const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  `;

  return (
    <Container>
      <Side>{left}</Side>
      <Side>{right}</Side>
    </Container>
  );
}
