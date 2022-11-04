import styled from "styled-components";

export interface GalleryProps {
  images: string[];
  perRow?: number;
}

const Container = styled.div<{ perRow?: number }>`
  display: grid;
  grid-template-columns: ${(p) =>
    p.perRow
      ? `repeat(${p.perRow}, 1fr)`
      : "repeat(auto-fill, minmax(350px, 1fr))"};
  gap: 20px;
  width: 100%;

  @media (pointer: fine) {
    .big {
      z-index: 100;
      transform: scale(1.8);
      box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Entry = styled.img`
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transition: 0.2s ease-in-out;
  cursor: pointer;
`;

export default function Gallery(props: GalleryProps) {
  let { images, perRow } = props;

  function toggleBig(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    let element = event.currentTarget;
    element.classList.toggle("big");
  }

  function resetBig(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    let element = event.currentTarget;
    element.classList.remove("big");
  }

  return (
    <Container perRow={perRow}>
      {images.map((image, index) => (
        <Entry src={image} onClick={toggleBig} onMouseLeave={resetBig} />
      ))}
    </Container>
  );
}
