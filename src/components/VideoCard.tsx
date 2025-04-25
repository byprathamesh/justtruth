
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, 
  thumbnail, 
  videoUrl,
  description,
  className 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
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
  
  return (
    <div className={cn("rounded-lg overflow-hidden border border-gray-200", className)}>
      <div className="relative aspect-video bg-gray-100">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnail}
          className="w-full h-full object-cover"
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
        <button 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all"
          onClick={handlePlayToggle}
        >
          <div className="w-14 h-14 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="text-black" size={24} />
            ) : (
              <Play className="text-black ml-1" size={24} />
            )}
          </div>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
