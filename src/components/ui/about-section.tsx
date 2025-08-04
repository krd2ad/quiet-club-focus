import { useEffect } from "react";
import { InfoIcon, Sparkles, Users, QuoteIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Kiernan DiMeglio",
    title: "Remote Project Manager",
    quote:
      "QuietClub helps me get more done in one morning than I used to accomplish in an entire day.",
  },
  {
    name: "Taylor Chen",
    title: "Freelance Designer",
    quote:
      "I never realized how powerful quiet focus could be until QuietClub. It's now a core part of my daily workflow.",
  },
  {
    name: "Alex Rivera",
    title: "Startup Founder",
    quote:
      "Our team adopted QuietClub for solo deep work hours — and productivity soared.",
  },
  {
    name: "Jordan Patel",
    title: "Data Analyst",
    quote:
      "I’ve tried every productivity hack. QuietClub is the only one that’s stuck.",
  },
  {
    name: "Emily Nakamura",
    title: "Remote Educator",
    quote:
      "It feels like studying in a quiet library with friends — but online. I love it.",
  },
  {
    name: "Chris Osei",
    title: "Marketing Consultant",
    quote:
      "I get my hardest work done in QuietClub sessions. Game changer for my freelance business.",
  },
  {
    name: "Isabella Rossi",
    title: "Product Manager",
    quote:
      "QuietClub is my antidote to Zoom fatigue. It's structured, silent, and just enough social.",
  },
  {
    name: "Miguel Torres",
    title: "Graduate Student",
    quote:
      "My academic focus improved drastically since using QuietClub. Highly recommend to students.",
  },
  {
    name: "Priya Nair",
    title: "Content Strategist",
    quote:
      "I no longer dread writing days. QuietClub gives me the space and accountability I need.",
  },
  {
    name: "Evan Brooks",
    title: "AI Researcher",
    quote:
      "Structured silence has never felt this powerful. QuietClub helps me do my best thinking.",
  },
  {
    name: "Sofia Alvarez",
    title: "Customer Success Lead",
    quote:
      "Every time I join a QuietClub room, I leave with a sense of progress and peace.",
  },
  {
    name: "Nico Zhang",
    title: "Front-End Developer",
    quote:
      "I use QuietClub every day for deep coding sprints. It's become essential.",
  },
  {
    name: "Tasha Boone",
    title: "Startup Operations",
    quote:
      "QuietClub gave our remote team structure without micromanagement. Brilliant concept.",
  },
  {
    name: "Omar Khoury",
    title: "Language Coach",
    quote:
      "My clients benefit when I focus better. QuietClub helps me show up sharp and prepared.",
  },
  {
    name: "Zara Fields",
    title: "UX Researcher",
    quote:
      "QuietClub gives me the mental space I need to do complex research and analysis.",
  },
  {
    name: "Logan Banks",
    title: "iOS Developer",
    quote:
      "There’s nothing else like it. QuietClub is a productivity ritual now.",
  },
  {
    name: "Yara Benali",
    title: "Illustrator",
    quote:
      "It’s helped me carve out serious focus time for my art without burnout.",
  },
  {
    name: "Tomás Silva",
    title: "Financial Analyst",
    quote:
      "I use QuietClub before earnings season. It helps me tune out and dive deep into reports.",
  },
  {
    name: "Naomi Blake",
    title: "Academic Coach",
    quote:
      "My students and I both use QuietClub — it’s a shared focus tool we love.",
  },
  {
    name: "Isaac Moon",
    title: "DevOps Engineer",
    quote:
      "I’ve replaced morning meetings with quiet sessions. The impact on focus is unreal.",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section id="about" className="py-24 bg-muted text-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Intro */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary text-white p-3 rounded-full">
              <InfoIcon className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold mb-4">About QuietClub</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            QuietClub is your digital coworking space — thoughtfully designed for remote
            professionals who thrive in focused, silent environments.
          </p>
        </motion.div>

        {/* Mission + Story */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="grid md:grid-cols-2 gap-10 text-left mb-16"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 text-primary p-2 rounded-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Our Mission</h3>
              <p className="text-muted-foreground">
                We’re here to make deep work easier. By creating silent, distraction-free
                spaces for focused sessions, we help remote workers reclaim their time,
                energy, and momentum.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 text-primary p-2 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Our Story</h3>
              <p className="text-muted-foreground">
                QuietClub was born from a simple idea: focused work is better together. Built by a
                fully remote team, we wanted to capture the power of shared silence — without
                meetings, noise, or burnout.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-center mb-4">What Our Members Say</h3>
          <div className="overflow-x-auto whitespace-nowrap snap-x snap-mandatory flex space-x-6 pb-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-80 bg-background border border-border rounded-lg p-6 shadow-sm text-left"
              >
                <QuoteIcon className="w-5 h-5 text-muted-foreground mb-2" />
                <p className="text-muted-foreground italic mb-4">“{t.quote}”</p>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
