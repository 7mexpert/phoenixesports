import { motion } from "framer-motion";
import { Trophy, Target, Flame } from "lucide-react";

const competitions = [
  { icon: Trophy, title: "FNCS Grand Finals", result: "Top 10 Finish", season: "Chapter 5 Season 3", highlight: true },
  { icon: Target, title: "Cash Cup Weekly", result: "1st Place", season: "Multiple Wins", highlight: false },
  { icon: Flame, title: "Elite Scrims", result: "Consistent Champions", season: "Ongoing", highlight: false },
  { icon: Trophy, title: "Community Tournament", result: "Winners", season: "RupertG Invitational", highlight: true },
];

const CompetitionsSection = () => {
  return (
    <section id="competitions" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-display text-sm tracking-[0.3em] text-primary uppercase mb-2">Achievements</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wide text-foreground">
            COMPE<span className="text-primary text-glow">TITIONS</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {competitions.map((comp, i) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className={`flex items-center gap-6 p-5 border transition-all duration-300 ${
                comp.highlight
                  ? "bg-primary/5 border-primary/30 hover:border-primary/60"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <div className={`p-3 ${comp.highlight ? "gradient-primary" : "bg-secondary"}`}>
                <comp.icon className={`w-6 h-6 ${comp.highlight ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-bold text-foreground">{comp.title}</h3>
                <p className="text-sm text-muted-foreground">{comp.season}</p>
              </div>
              <div className="text-right">
                <p className={`font-display text-sm font-bold tracking-wider ${comp.highlight ? "text-primary text-glow" : "text-foreground"}`}>
                  {comp.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
