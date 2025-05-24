import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTS";
import { recentSessions } from "@/constants";

const Homepage = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="language"
          duration={30}
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Homepage;
