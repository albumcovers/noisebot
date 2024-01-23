import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">NOISEBOT</h1>
        <h2 className="showcase-header-text h-color">
          The Solution to your AI needs
        </h2>
        <p className="showcase-para p-color">
          Noisebot is an amazing AI bot that can simulate almost any character / tone.
        </p>

        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/api/oauth2/authorize?client_id=1198131586080706672&permissions=8&scope=bot">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/HuFHCvMMWC">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
