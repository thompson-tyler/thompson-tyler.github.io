import styled from "styled-components";

export interface GalleryProps {
  images: string[];
  perRow?: number;
}

const Container = styled.div<{ perRow?: number }>`
  display: grid;
  grid-template-columns: ${(p) =>
    p.perRow ? `repeat(${p.perRow}, 1fr)` : "repeat(auto-fill, 250px)"};
  gap: 20px;
  width: 100%;
`;

const Entry = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export default function Gallery(props: GalleryProps) {
  let { images, perRow } = props;

  return (
    <Container perRow={perRow}>
      {images.map((image, index) => (
        <Entry src={image} />
      ))}
    </Container>
  );
}
