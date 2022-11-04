import Gallery from "../../components/gallery";
import UglaSnip from "../../static/projects/ugla/ugla-snip.png";
import UglaAnim1 from "../../static/projects/ugla/ugla-anim-1.gif";
import UglaAnim2 from "../../static/projects/ugla/ugla-anim-2.gif";
import UglaAnim3 from "../../static/projects/ugla/ugla-anim-3.gif";
import UglaAnim4 from "../../static/projects/ugla/ugla-anim-4.gif";
import GitHubIcon from "../../static/icons/github.png";
import IconLink from "../../components/icon-link";
import CppIcon from "../../static/icons/cpp.png";
import SFMLIcon from "../../static/icons/sfml.png";
import IconGallery from "../../components/icon-gallery";

export const UglaProject = (
  <section>
    <h1>UGLA</h1>
    <h2>Gallery</h2>
    <Gallery images={[UglaSnip, UglaAnim1, UglaAnim2, UglaAnim3, UglaAnim4]} />
    <p>
      I play video games from time to time and I'm obsessed with world
      interactivity as a major game mechanic. Drawing inspiration from the
      interactivity of games like Breath of the Wild and the voxel style of
      Terraria, I wrote a proof of concept game whose primary mechanic is
      manipulating the ground to navigate and attack an enemy.
    </p>
    <p>
      Though it's not a full-fledged game, I refined much of my understanding of
      OOP by writing everything but the graphics library from scratch, all in
      C++. This involved approach let me optimize entity and collision
      management, allowing for upwards of 100,000 voxels to be placed in the
      world with minimal CPU usage. Entities take damage and are sent flying
      when ground tiles are launched at them, and once tiles fall to the ground
      they become apart of the world again. Gameplay is snappy and I've spent
      tons of time just messing with the mechanics to see what the player can
      do.
    </p>
    <p>
      I don't see myself as a game developer but this project taught me
      countless lessons of optimization, writing clean code, user interaction,
      and the importance of building things you really enjoy. Check out the
      latest binary here.
    </p>
    <h2>Github</h2>
    <IconLink
      icon={GitHubIcon}
      link="
        https://github.com/thompson-tyler/UGLA"
    />
    <h2>Technologies</h2>
    <IconGallery icons={[CppIcon, SFMLIcon]} />
  </section>
);
