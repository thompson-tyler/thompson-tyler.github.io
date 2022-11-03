import styled from "styled-components";

export interface IconLinkProps {
  icon: string;
  link: string;
  width?: number;
}

export default function IconLink(props: IconLinkProps) {
  const { icon, link, width } = props;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: ${width ? width : 100}px;
  `;

  const Icon = styled.img`
    height: ${width ? width : 100}px;
    width: auto;
    border-radius: 10px;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }
  `;

  return (
    <Container>
      <a href={link} target="_blank" rel="noreferrer">
        <Icon src={icon} />
      </a>
    </Container>
  );
}
