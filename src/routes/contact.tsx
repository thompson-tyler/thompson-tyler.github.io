import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const ContactButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  text-decoration: underline;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: verdana;
  border: 1px solid white;
  color: white;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <ButtonContainer>
        <ContactButton href="mailto:tyler.thompson@tufts.edu">
          tyler.thompson@tufts.edu
        </ContactButton>
        <ContactButton href="tel:425-281-4006">425-281-4006</ContactButton>
        <ContactButton
          href="https://www.linkedin.com/in/tyler-t/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </ContactButton>
        <ContactButton
          href="https://github.com/thompson-tyler"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </ContactButton>
      </ButtonContainer>
    </section>
  );
}
