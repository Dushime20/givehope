
const VideoCard = ({ title, description, thumbnailUrl, onPlay }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col w-full max-w-xs">
      <img src={thumbnailUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-between p-4 h-44">
        <div>
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
        <button
          onClick={onPlay}
          className="mt-4 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
        >
          Play Video
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
