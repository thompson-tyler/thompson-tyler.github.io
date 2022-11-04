import styled from "styled-components";
import { Link } from "react-router-dom";

export interface ProjectGalleryProps {
  images: string[];
  links: string[];
  titles?: string[];
  captions?: string[];
  perRow?: number;
  external?: boolean;
}

const Container = styled.div<{ perRow?: number }>`
  display: grid;
  grid-template-columns: ${(p) =>
    p.perRow
      ? `repeat(${(p: { perRow: number }) => p.perRow}, 1fr)`
      : "repeat(auto-fill, minmax(200px, 1fr))"};
  gap: 20px;
  width: 100%;
`;

const Entry = styled.div<{ image: string }>`
  ${(p) => p.image && `background-image: url(${p.image});`}
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  border-radius: 10px;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  transition: 0.2s ease-in-out;

  @media (pointer: fine) {
    &:hover h3 {
      padding-bottom: 15px;
    }
  }
  &:active {
    transform: scale(0.95);
  }
`;

const EntryTitle = styled.h3`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px 0 0;
  margin: 0;
  padding: 0.5rem;
  font-size: 50%;
  text-align: center;
  transition 0.2s ease-out;
`;

const EntryCaption = styled.div`
  font-size: 1rem;
  font-weight: normal;
`;

export default function ProjectGallery(props: ProjectGalleryProps) {
  let { images, titles, captions, links, perRow, external } = props;

  external = external ? external : false;

  return (
    <Container perRow={perRow}>
      {images.map((image, index) =>
        external ? (
          <a href={links[index]} target="_blank" rel="noreferrer">
            <Entry image={image}>
              {titles && (
                <EntryTitle>
                  {titles[index]}
                  {captions && <EntryCaption>{captions[index]}</EntryCaption>}
                </EntryTitle>
              )}
            </Entry>
          </a>
        ) : (
          <Link to={links[index]}>
            <Entry image={image}>
              {titles && (
                <EntryTitle>
                  {titles[index]}
                  {captions && <EntryCaption>{captions[index]}</EntryCaption>}
                </EntryTitle>
              )}
            </Entry>
          </Link>
        )
      )}
    </Container>
  );
}
