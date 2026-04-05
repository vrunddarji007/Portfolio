import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors"
        >
          Go Back Home
        </a>
      </motion.div>
    </div>
  );
}
