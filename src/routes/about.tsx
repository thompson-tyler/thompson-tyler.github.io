import SideBySide from "../components/side-by-side";
import PCTWithNicole from "../static/pct-with-nicole.png";
import Skiing from "../static/skiing.png";
import Dancing from "../static/dancing.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export default function About() {
  return (
    <section>
      <h1>About</h1>
      <h3>"Who is this Tyler guy, anyways?"</h3>
      <p>
        I'm a dedicated Computer Science student at Tufts University. Along with
        my rigorous studies, I've seen a wide variety of projects through from
        their initial conception to their final deployment. Most of my work lies
        in the web development space, but I have a deep passion for venturing
        into new areas of software development. My side projects touch areas
        such as machine learning, networking, security, mathematical modeling,
        and more.
      </p>
      <p>
        I believe computer science is more than just an interesting field of
        study. It's a tool that can be used to solve some of the most pressing
        problems in our community. Creating solutions to better the lives of
        others is what drives me to continue learning and growing as a
        developer.
      </p>
      <p>
        Now that you know the innerworkings of my brain, here are some fun facts
        about me.
      </p>
      <SideBySide
        left={<Image src={PCTWithNicole} />}
        right={
          <h3>My mom and I love to go backpacking! Here's us on the PCT</h3>
        }
      />
      <SideBySide
        left={
          <h3>Tyler also likes to ski! Look at those silly little mini skis</h3>
        }
        right={<Image src={Skiing} />}
      />
      <SideBySide
        left={<Image src={Dancing} />}
        right={<h3>Tyler dances ballroom with the Tufts Ballroom Team!</h3>}
      />
    </section>
  );
}
