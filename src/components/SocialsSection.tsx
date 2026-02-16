import { motion } from "framer-motion";

const socials = [
  { name: "Twitter / X", handle: "@RupertGEsports", url: "#", icon: "𝕏" },
  { name: "YouTube", handle: "RupertG Esports", url: "#", icon: "▶" },
  { name: "Discord", handle: "Join the Community", url: "#", icon: "💬" },
  { name: "Twitch", handle: "RupertGTV", url: "#", icon: "📺" },
];

const SocialsSection = () => {
  return (
    <section id="socials" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="font-display text-sm tracking-[0.3em] text-primary uppercase mb-2">Connect</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wide text-foreground">
            FOLLOW <span className="text-primary text-glow">US</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card border border-border hover:border-glow p-6 text-center transition-all duration-300 group block"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {social.icon}
              </span>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{social.name}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{social.handle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
