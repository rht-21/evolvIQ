import { IconBookmark, IconClock } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type CompanionCardProps = {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
};

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <IconBookmark size={20} stroke={1.5} className="text-white" />
        </button>
      </div>
      <h2 className="text-2xl font-semibold text-secondary">{name}</h2>
      <p className="text-sm text-secondary">{topic}</p>
      <div className="flex items-center gap-2 text-secondary">
        <IconClock size={16} stroke={1.5} />
        <p className="text-sm">{duration} mins duration</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
