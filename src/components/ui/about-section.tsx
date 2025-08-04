import { InfoIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted text-gray-900">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-primary text-white p-3 rounded-full">
            <InfoIcon className="w-6 h-6" />
          </div>
        </div>
        <h2 className="text-4xl font-extrabold mb-4">About QuietClub</h2>
        <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          QuietClub is your digital coworking space — thoughtfully designed for remote
          professionals who thrive in focused, silent environments. 
          We use Pomodoro-style timing and virtual presence to help you stay productive,
          accountable, and connected — all without distractions.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
