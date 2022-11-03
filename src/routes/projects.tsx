import ProjectGallery from "../components/project-gallery";
import SwarmImg from "../static/projects/swarms/swarm.webp";
import UGLASnip from "../static/projects/ugla/ugla-snip.png";
import AnimalAidHome from "../static/projects/animal-aid/home.png";
import TupitImage from "../static/projects/tupit/public-site.jpg";
import WicImage from "../static/projects/wic/logo.png";
import ActonLogo from "../static/volunteering/acton-logo.jpg";
import ClassLogo from "../static/volunteering/3d-class-flier.png";

export default function Projects() {
  return (
    <section>
      <h2>Experience</h2>
      <ProjectGallery
        images={[WicImage, TupitImage, AnimalAidHome]}
        titles={["Women in Cloud", "TUPIT", "Animal Aid"]}
        captions={[
          "",
          "A Tufts organization helping those affected by the criminal justice system to earn their college degree.",
          "A Tufts organization that connects students and local dogs that need to be walked",
        ]}
        links={["wic", "tupit", "animal-aid"]}
      />
      <h2>Projects</h2>
      <ProjectGallery
        images={[UGLASnip, SwarmImg]}
        titles={["UGLA", "Swarms"]}
        captions={[
          "Avatar-inspired proof of concept game written in C++",
          "Simulated swarms in C++",
        ]}
        links={["ugla", "swarms"]}
      />
      <h2>Volunteering</h2>
      <ProjectGallery
        images={[ActonLogo, ClassLogo]}
        titles={["Acton", "3D Printing Classes"]}
        captions={[
          "A youth-led platform for students to become entrepreneurs for a day",
          "Youth-led classes on CAD and 3D printing for high school and middle school students",
        ]}
        links={[
          "https://www.3cyouth.com/acton-children-business-fair-1",
          "https://www.3cyouth.com/summer-steam3d-classes",
        ]}
        external={true}
      />
    </section>
  );
}
