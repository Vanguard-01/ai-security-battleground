import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { logEvent } from "../utils/analytics";

export default function MissionCard({ mission, index }) {
  const nav = useNavigate();

  const handleResourceClick = () => {
    logEvent("mission_resource_click", {
      mission_id: mission.id || index + 1,
      mission_title: mission.title,
      resource_url: mission.resourceUrl,
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gray-850 border border-gray-700 rounded-2xl p-6 cursor-pointer"
    >
      <div
        onClick={() => nav(`/mission/${index + 1}`)}
        className="flex justify-between items-start"
      >
        <div className="text-2xl">{mission.icon}</div>
        <div className="text-xs text-gray-400">+{mission.xp} XP</div>
      </div>

      <h3
        onClick={() => nav(`/mission/${index + 1}`)}
        className="mt-3 text-lg font-semibold"
      >
        {mission.title}
      </h3>
      <p className="text-sm text-gray-400 mt-2">{mission.desc}</p>

      {/* Progress bar */}
      <div className="mt-4 bg-gray-700 rounded-full h-2">
        <motion.div
          style={{ width: `${mission.progress}%` }}
          className="h-2 bg-gradient-to-r from-indigo-400 to-purple-500"
        />
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Progress: {mission.progress}%
      </p>

      {/* External resource link */}
      {mission.resourceUrl && (
        <div className="mt-4 flex justify-end">
          <Link
            to={`/linkout?url=${encodeURIComponent(mission.resourceUrl)}`}
            onClick={handleResourceClick}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Access Resource →
          </Link>
        </div>
      )}
    </motion.div>
  );
}

