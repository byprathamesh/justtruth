
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, 
  thumbnail, 
  videoUrl,
  description,
  className,
  style
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play()
          .catch(error => {
            console.error("Error playing video:", error);
            setIsPlaying(false);
          });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  
  return (
    <div className={cn("rounded-lg overflow-hidden border border-gray-200", className)} style={style}>
      <div className="relative aspect-video bg-gray-100">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnail}
          className="w-full h-full object-cover"
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          muted={isMuted}
          loop
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all">
          <button 
            className="w-14 h-14 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
            onClick={handlePlayToggle}
          >
            {isPlaying ? (
              <Pause className="text-black" size={24} />
            ) : (
              <Play className="text-black ml-1" size={24} />
            )}
          </button>
        </div>
        {isPlaying && (
          <button 
            className="absolute bottom-4 right-4 px-3 py-1 bg-black bg-opacity-70 rounded text-white text-xs"
            onClick={toggleMute}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
