import IconGallery from "../../components/icon-gallery";
import GithubIcon from "../../static/icons/github.png";
import DevpostLogo from "../../static/icons/devpost.svg";
import PythonLogo from "../../static/icons/python.png";
import assemblyaiLogo from "../../static/icons/assemblyai.png";
import gcloudLogo from "../../static/icons/gcloud.png";
import openaiLogo from "../../static/icons/openai.png";
import raspiLogo from "../../static/icons/raspi.png";

export const TheraboxProject = (
  <section>
    <h1>Therabox</h1>
    <p>
      A couple of friends and I attended the HackHarvard hackathon in 2022. We
      had the goal of creating a conversational AI that would help ease people
      into therapy. We used the AssemblyAI API to transcribe audio and the
      OpenAI API to generate responses. We also used Google Cloud to produce
      human-like voices. We used a Raspberry Pi to run the program in a
      freestanding box.
    </p>
    <iframe
      src="https://www.youtube.com/embed/One_W1ERMgI"
      title="Therabox Demo for HackHarvard 2022"
      style={{
        width: "90%",
        aspectRatio: "16/9",
        border: "none",
      }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <h2>Inspiration</h2>
    <p>
      We noticed that many people feel anxious about starting therapy or don't
      know where to get started. We wanted to create something that could
      naturally converse with the user in a comfortable way that could ease them
      into therapy.
    </p>
    <h2>What it does</h2>
    <p>
      The Therabox is capable of having a natural conversation in a therapeutic
      setting; this means it requires no typing and will specifically respond to
      your concerns brought up. It works best in a Q&A session, and you can
      converse with it as you would a friend.
    </p>
    <h2>How we built it</h2>
    <p>
      Our project has three main components: GPT-3, Assembly.Ai, and Google
      Cloud. When a user speaks to Therabox, it will detect a question and it
      will then keeps listening until the user finishes talking about their
      concerns/questions. First, we use Assembly.Ai to turn that voice input
      into text. Then we take that question and feed it into a GPT-3 model that
      we've fine-tuned to get a therapist-esque response. During the process,
      the question and response are saved into a chat log file so GPT-3 will
      remember prior conversations. Lastly, after saving the chat log, we use
      Google Cloud text-to-speech to make Therabox "talk" out loud with the
      user. This back-and-forth is repeated indefinitely until the user decides
      to end the conversation (or we run out of API credits).
    </p>
    <h2>Challenges</h2>
    <p>
      While building Therabox we learned just how challenging it can be to
      integrate with some APIs. The Google Cloud API values security incredibly
      highly so it took a lot of effort to properly authenticate and integrate
      the service into our script. But once everything was set up, the
      integration was solid.
    </p>
    <p>
      Interacting with the microphone and speaker connected to the Raspberry Pi
      also proved to be challenging. The raw data received from microphones is
      tough to process, so we spend a great deal of time converting it to a
      standard format.
    </p>
    <h2>Accomplishments</h2>
    <p>
      Since GPT-3 is a general language synthesis AI, it can generate any sort
      of text in any context, and from any perspective. Getting its parameters
      just right to reliably produce realistic and helpful therapist-like
      responses was challenging but we're very proud of what we achieved. Our
      script almost always nails the context provided by the user and gives
      helpful, creative advice.
    </p>
    <p>
      Coming into the project we were concerned we wouldn't be able to achieve a
      natural back-and-forth conversation with our bot since we didn't know if
      we would be able to reliably detect when the user begins and finishes
      speaking. However, we managed with an algorithm that works with
      AssemblyAI's stream endpoint to very reliably detect the beginning and end
      of speech without too much delay. We're very proud of the result.
    </p>
    <h2>What we learned</h2>
    <p>
      We learned more about working with a partially trained model when using
      GPT-3. Although it's already trained as a natural language processing
      model, we needed to add additional data to make it specifically acclimated
      to therapeutic conversations. Besides working with the model, we gained
      experience with both text-to-voice and voice-to-text translations. After
      completing the basic program, we ended up learning about the hardware
      limitations of different devices. Since we wanted the final product to run
      independently, we needed the software to match the Rasp-Pi hardware
      limitations.
    </p>
    <h2>Visit</h2>
    <IconGallery
      icons={[GithubIcon, DevpostLogo]}
      links={[
        "https://github.com/20dzhong/TheraBox",
        "https://devpost.com/software/therabox",
      ]}
    />
    <h2>Technologies</h2>
    <IconGallery
      icons={[PythonLogo, assemblyaiLogo, gcloudLogo, openaiLogo, raspiLogo]}
    />
  </section>
);
