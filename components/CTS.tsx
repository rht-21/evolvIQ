import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-secondary text-white rounded-4xl px-7 py-10 flex flex-col items-center text-center gap-5 w-1/3 max-lg:w-1/2 max-md:w-full">
      <div className="bg-secondary-foreground rounded-4xl px-3 py-1.5 text-black">
        Start your learning journey.
      </div>
      <h2 className="text-3xl font-bold">Build and Personalize AI Companion</h2>
      <p>
        Get started with your personalized AI companion. Build your own AI
        companion and personalize it to your learning style.
      </p>
      <Image src="/images/cta.svg" alt="CTA" width={362} height={232} />
      <Link href="/companion/new">
        <button className="btn-primary">
          <IconPlus size={20} stroke={1.5} />
          <p>Create New Companion</p>
        </button>
      </Link>
    </section>
  );
};

export default CTA;
