import type { VideoData } from "../types";
import "./VideoCard.css";

interface VideoCardProps {
  video: VideoData;
  rank: number;
}

export default function VideoCard({ video, rank }: VideoCardProps) {
  const formatViewCount = (count: string): string => {
    const num = parseInt(count);
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return count;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="video-card">
      <div className="rank-badge">{rank}</div>
      <a
        href={video.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="thumbnail-link"
      >
        <img src={video.thumbnailUrl} alt={video.title} className="thumbnail" />
        <div className="play-overlay">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </a>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="channel-name">{video.channelTitle}</p>
        <div className="video-stats">
          <span className="views">
            {formatViewCount(video.viewCount)} views
          </span>
          <span className="separator">•</span>
          <span className="date">{formatDate(video.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
}
