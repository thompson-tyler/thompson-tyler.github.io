import styled from "styled-components";

export interface IconGalleryProps {
  icons: string[];
  links?: string[];
  perRow?: number;
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const Entry = styled.img`
  height: 100px !important;
  width: auto !important;
  border-radius: 10px;
`;

export default function IconGallery(props: IconGalleryProps) {
  const { icons, links } = props;

  return (
    <Container>
      {links
        ? icons.map((icon, index) => (
            <a href={links[index]} target="_blank" rel="noreferrer">
              <Entry src={icon} />
            </a>
          ))
        : icons.map((icon, index) => <Entry src={icon} />)}
    </Container>
  );
}
