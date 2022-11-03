import Gallery from "../../components/gallery";
import IconLink from "../../components/icon-link";
import IconGallery from "../../components/icon-gallery";
import LogoImage from "../../static/projects/tupit/logo.png";
import ClassSearch from "../../static/projects/tupit/class-search.jpg";
import EditClass from "../../static/projects/tupit/edit-class.jpg";
import StudentSearch from "../../static/projects/tupit/student-search.jpg";
import EditStudent from "../../static/projects/tupit/edit-student.jpg";
import AWSIcon from "../../static/icons/aws.jpg";
import ReactIcon from "../../static/icons/react.png";
import NextIcon from "../../static/icons/next.png";
import DjangoIcon from "../../static/icons/django.png";
import PostgresIcon from "../../static/icons/postgresql.png";
import GithubIcon from "../../static/icons/github.png";

export const TupitProject = (
  <section>
    <h1>TUPIT</h1>
    <p>
      The Tufts University Prison Initiative of the Tisch College of Civic Life
      (TUPIT) is a program which allows incarcerated and formerly incarcerated
      individuals to pursue higher education while behind bars and while
      returning to society. TUPIT runs a number of different programs. Its
      degree program teaches a cohort of students from MCI-Concord and allows
      individuals to pursue a bachelor's degree while behind bars. The MyTERN
      program provides resources and courses to returning citizens which work
      towards a Civic Studies certificate. And the Inside/Out program provides a
      credit-bearing course for incarcerated people at MCI-Shirley,
      Souza-Baranowski Correctional Center, and MCI-Concord.
    </p>
    <p>
      For years, TUPIT kept track of students, their information, schedules,
      past courses, and degree requirements in Google Sheets. This simply was
      not scalable past ~50 students. As much as we wish Google Sheets was the
      ultimate data platform, TUPIT needed software which can manage a large
      number of students and track their potentially complex degree tracts. My
      team built a site which allows the TUPIT staff to store, search, and
      modify student information in a scalable way. The site allows for the
      creation of courses, degrees, and degree requirements which can then be
      effortlessly audited against student progress. The flexible program we
      developed is now being used to track student progress for TUPIT's various
      programs.
    </p>
    <h2>Gallery</h2>
    <Gallery
      images={[ClassSearch, EditClass, StudentSearch, EditStudent]}
      perRow={2}
    />
    <h2>My Impact</h2>
    <p>
      I was the tech lead for this project. I worked closely with the project
      manager to ensure that the project was on track and that the team was
      working effectively. I also worked closely with the client to ensure that
      the project was meeting their needs. I was responsible for reviewing code
      and ensuring that the code was of high quality. I also worked directly on
      both the frontend and backend of the project. I was responsible for
      building the authentication system and building a number of the frontend
      components. I wrote a number of API endpoints and database models. I wrote
      the majority of the degree audit code.
    </p>
    <p>
      Each week I would review the code that my team had written and provide
      feedback on how to improve it. I would also field any technical questions
      that my team had, or reach out to the club's Head of Engineering if I
      didn't know the answer.
    </p>
    <p>
      Throughout the development cycle, my project manager and I would meet with
      the client to discuss the project. We walked them through our progress and
      the anticipated workflow to open up discussion about how to improve the
      site to best meet their needs.
    </p>
    <h2>Visit</h2>
    <IconLink icon={LogoImage} link="http://sites.tufts.edu/tupit/" />
    <h2>Technologies</h2>
    <IconGallery
      icons={[
        ReactIcon,
        NextIcon,
        DjangoIcon,
        PostgresIcon,
        AWSIcon,
        GithubIcon,
      ]}
    />
  </section>
);
