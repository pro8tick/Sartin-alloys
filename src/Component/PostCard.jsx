import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
export default function PostCard({ post, height = "300px", width = "20vw" }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      className={`group relative w-[${width}] mx-auto   h-[${height}] overflow-hidden rounded-lg sm:w-[430px] transition-all `}
    >
      <Link to={`/post/${post.slug}`} className="block">
        <img
          src={post.image}
          alt="post cover"
          className="h-[350px] w-[95vw] mx-auto sm:w-full object-cover  transition-all duration-300 z-20"
        />
      </Link>
      <div className="py-3 flex flex-col gap-1">
        <p className="text-lg text-black font-semibold line-clamp-2">
          {post.title}
        </p>
        <p className="text-sm mt-4 dark:text-green-100 line-clamp-4">
          {post.content}
        </p>
      </div>
    </motion.div>
  );
}
