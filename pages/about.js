import Philosophy from "../components/about/Philosophy";
import Button from "../components/Button";
import TeamCard from "../components/team/TeamCard";
import roster from "../lib/team.json";
import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import Image from "next/image";
import AdvisorsCard from "../components/team/AdvisorsCard";

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="About" />
      <Nav />
      <main className="max-w-xs md:max-w-2xl lg:max-w-4xl">
        <h1 className="font-bold headline font-montserrat">About</h1>
        <br />
        <p className="text-2xl font-semibold font-montserrat">
          <Highlight>
            <span className="font-semibold">Command Tech</span>
          </Highlight>{" "}
          is here to make sure anyone that has an interest in tech has the
          resources and opportunities to pursue that interest!
        </p>
        <br />
        <div className="flex flex-col items-center justify-center md:flex-row pb-10">
          <div className="w-full text-xl pr-4">
            <h3 className="font-semibold">MISSION</h3>
            <p>
              Creating opportunities for female and non-binary high school students in Asia to explore their interests in technology
            </p>
          </div>
          <div className="w-full text-xl pl-4">
            <h3 className="font-semibold">VISION</h3>
            <p>
              Normalising the participation in the tech industry by female and nonbinary students in Asia
            </p>
          </div>
        </div>
        <img
            src="/images/hc-flagship.jpg"
            alt="Students in a circle raising their hands"
            className="w-full pt-8 shadow-lg rounded-xl md:pt-0 mb-10"
        />
        {/* <h2 className="pt-4 font-bold headline font-montserrat">
          Our Philosophy
        </h2>
        <Philosophy />
        <h2>Our Annual Reports</h2> */}
         <h1 className="font-bold headline font-montserrat">Our Team</h1>
        <h2 className="subheadline mx-auto text-left text-2xl leading-normal font-semibold font-montserrat">
          United by the mission and with{" "}
          <Highlight>
            trust,&nbsp;communication&nbsp;and&nbsp;will&nbsp;to&nbsp;learn,
          </Highlight>{" "}
          <br />
          our volunteer team works together and builds to achieve our
          mission!
        </h2>
        <br />
        <span className="flex justify-center">
          <Button href="https://bit.ly/ct-fam">Join&nbsp;our&nbsp;team&nbsp;&rarr;</Button>
        </span>
        <div>
          <h2 className="subheadline font-montserrat font-bold py-4">
            Our Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-16">
            <AdvisorsCard
              src="/advisors/ashley.png"
              name="Ashley"
              position="Lead Director"
            />
            <AdvisorsCard
              src="/advisors/carolina.png"
              name="Carolina"
              position="Lead Director"
            />
            <AdvisorsCard
              src="/advisors/craig.jpeg"
              name="Craig"
              position="Lead Director"
            />
            <AdvisorsCard
              src="/advisors/ofonime.png"
              name="Ofonime"
              position="Lead Director"
            />
            <AdvisorsCard
              src="/advisors/veronika.jpg"
              name="Veronika"
              position="Lead Director"
            />
          </div>

          <h2 className="subheadline font-montserrat font-bold py-4">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-16">
            {roster.map((person) => (
              <TeamCard
                src={person.image}
                name={person.name}
                position={person.role}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
