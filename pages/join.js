import Button from "../components/Button";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import Image from "next/image";
import InfoCard from "../components/landing/InfoCard";

export default function Team() {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="Get Involved" />
      <Nav />
      <main className="container-copy">
        <h1 className="font-bold headline font-montserrat">Get Involved</h1>
        <p>
          Thanks for your interest in Command Tech, we are so excited to get to
          know you! If you're interested in partnering up, email us at
          team@commandtech.dev! From collabing on events and workshops to cross
          promotion, we're open to anything and would love to hear from you :))
        </p>
        <h2 className="pt-8 font-semibold subheadline font-montserrat">
          Are you a teenager?
        </h2>
        <section>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              destination="https://learn.commandtech.dev"
              heading="👩🏽‍💻 Learn a new skill"
              copy="Want to further your skills or discover something new? Our team, with the help of the community, has compiled a resource guide for tech, design, and productivity!"
            />
            <InfoCard
              destination="https://connect.commandtech.dev"
              heading="🔎 Find a tech mentor"
              copy="Learn a new skill, build that project you've been thinking about, or delve into careers you've never heard of with your mentor."
            />
            <InfoCard
              destination="/"
              heading="COMING SOON ⚠️ : Find the perfect speaker, workshop host, judge "
              copy="We have a network of tech professionals that are enthusiastic about helping the next generation of female and nonbinary tech students!"
            />
          </div>
        </section>
        <br />
        <br />
        <h2 className="pt-8 font-semibold subheadline font-montserrat">
          Are you an adult?
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <InfoCard
            destination="https://connect.commandtech.dev"
            heading="💖 Volunteer as a mentor"
            copy="Guide a female or non-binary student on their tech journey! Each mentorship cycle is only 2-months-long and an average total commitment of 4 hours :)"
          />
          <InfoCard
            destination="https://connect.commandtech.dev"
            heading="COMING SOON ⚠️ : Volunteer at High School Events"
            copy="If you're interested in giving back to the next generation of makers, join our network of tech professionals interested in speaking, hosting a workshop, or judging etc. at high school based events. We're especially looking for female or non-binary identifying tech professionals!"
          />
        </div>
        <br />
        <br />
        <h2 className="pt-8 font-semibold text-lg font-montserrat">
          🦄 Interested in joining our team?{" "}
          <a href="https://bit.ly/ct-fam" target="_blank" noref>
            Learn&nbsp;More&nbsp;&rarr;
          </a>
        </h2>
        {/* <Button href="https://bit.ly/ct-fam">
          Learn&nbsp;More&nbsp;&rarr;
        </Button> */}
      </main>
      <Footer />
    </div>
  );
}

function Description({ wc, children }) {
  return (
    <div>
      <span className="text-sm font-light lowercase">
        {wc} word description
      </span>
      <br />
      <span className="text-lg">{children}</span>
    </div>
  );
}
