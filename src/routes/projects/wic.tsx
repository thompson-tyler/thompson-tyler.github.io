import IconLink from "../../components/icon-link";
import LogoImage from "../../static/projects/wic/logo.jpeg";
import FigmaIcon from "../../static/icons/figma.png";
import ReactIcon from "../../static/icons/react.png";
import TypescriptIcon from "../../static/icons/typescript.png";
import IconGallery from "../../components/icon-gallery";
import ExpressIcon from "../../static/icons/express.png";
import MetaplexIcon from "../../static/icons/metaplex.jpg";

export const WicProject = (
  <section>
    <h1>Women in Cloud</h1>
    <p>
      Women in Cloud is a company which provides access and networking
      opportunities for women in tech. I led the development of a web app which
      allows for large-scale event ticketing built on Web3. I worked closely
      with the founder of the company to design the user experience and
      interface of the app. I also architected the complex data model and built
      a backend to support it. I built a bare-bones frontend to interface with
      the backend based on the user experience I designed.
    </p>
    <h2>Visit</h2>
    <IconLink icon={LogoImage} link={"https://womenincloud.com"} />
    <h2>Technologies</h2>
    <IconGallery
      icons={[FigmaIcon, ReactIcon, ExpressIcon, TypescriptIcon, MetaplexIcon]}
    />
  </section>
);
