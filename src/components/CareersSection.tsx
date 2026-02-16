import { motion } from "framer-motion";
import { UserPlus, Shield, Video } from "lucide-react";

const roles = [
  { icon: UserPlus, title: "Competitive Player", description: "Looking for cracked Fortnite players to join our competitive roster. Must have FNCS experience and be ready to grind.", status: "Open" },
  { icon: Shield, title: "Team Manager", description: "Organize scrims, handle scheduling, and manage our tournament entries. Keep the team running smoothly.", status: "Open" },
  { icon: Video, title: "Content Creator", description: "Create highlights, montages, and stream content for our socials. Editing skills required.", status: "Coming Soon" },
];

const CareersSection = () => {
  return (
    <section id="careers" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-display text-sm tracking-[0.3em] text-primary uppercase mb-2">Join Us</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wide text-foreground">
          OPEN <span className="text-primary text-glow">ROLES</span>
        </h2>
      </motion.div>

      <div className="space-y-4">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ x: 8, transition: { duration: 0.2 } }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="gradient-primary p-3 shrink-0">
              <role.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{role.title}</h3>
              <p className="text-sm text-muted-foreground">{role.description}</p>
            </div>
            <span
              className={`font-display text-xs tracking-widest uppercase px-4 py-1.5 shrink-0 ${
                role.status === "Open"
                  ? "gradient-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {role.status}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareersSection;
