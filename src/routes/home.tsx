import { Link } from "react-router-dom";
import styled from "styled-components";
import TylerCandid from "../static/tyler-candid.jpg";
import { colors, fonts } from "../css-vars";

const MainImage = styled.div`
  width: 65vw;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  img {
    width: 100%;
    border-radius: 0 0 0 60px;
  }
`;

const GreetingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Greeting = styled.div`
  width: 55%;
  font-family: "Roboto", sans-serif;
  font-size: 14vw;
  font-weight: bold;
  text-align: right;
  color: white;
  margin-bottom: 80px;
`;

const BigButton = styled.div`
  @import "../scss-vars.scss";
  width: 100%;
  background-color: ${colors.accentColor};
  border-radius: 10px;
  text-align: center;
  font-size: 3rem;
  font-family: ${fonts.titleFont};
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.textColor};
  cursor: pointer;
  padding: 15px;
  transition: all 0.1s;

  @media (pointer: fine) {
    &:hover {
      background-color: ${colors.accentColorLight};
    }
  }
  &:active {
    transform: translateY(2px);
  }
`;

export default function Home() {
  return (
    <section>
      <MainImage>
        <img src={TylerCandid} />
      </MainImage>
      <GreetingContainer>
        <Greeting>Hi, I'm Tyler</Greeting>
      </GreetingContainer>
      <h2>Computer Science Major at Tufts University</h2>
      <p>
        I'm passionate about bringing a lasting impact to my community through
        computer science. I've achieved this by building software for local
        non-profits, hosting 3D printing classes for underprivileged youth,
        organizing youth business fairs, and more. I have ample experience
        working on teams, and have worked everywhere on the stack. Whether it be
        Assembly, C, Python, HTML/CSS, or anything in between, I've probably
        built something with it. I look forward to connecting with you!
      </p>
      <Link to="/projects">
        <BigButton>My Projects</BigButton>
      </Link>
    </section>
  );
}
