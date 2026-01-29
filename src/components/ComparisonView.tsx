import { useState, useEffect } from 'react';
import { VideoData, REGION_CODES } from '../types';
import { fetchTopVideos } from '../services/api';
import RegionSelector from './RegionSelector';
import VideoCard from './VideoCard';
import './ComparisonView.css';

export default function ComparisonView() {
  const [region1, setRegion1] = useState('US');
  const [region2, setRegion2] = useState('GB');
  const [videos1, setVideos1] = useState<VideoData[]>([]);
  const [videos2, setVideos2] = useState<VideoData[]>([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error1, setError1] = useState<string | null>(null);
  const [error2, setError2] = useState<string | null>(null);

  useEffect(() => {
    if (region1) {
      loadVideos(region1, 1);
    }
  }, [region1]);

  useEffect(() => {
    if (region2) {
      loadVideos(region2, 2);
    }
  }, [region2]);

  const loadVideos = async (regionCode: string, panel: number) => {
    const setLoading = panel === 1 ? setLoading1 : setLoading2;
    const setVideos = panel === 1 ? setVideos1 : setVideos2;
    const setError = panel === 1 ? setError1 : setError2;

    setLoading(true);
    setError(null);

    try {
      const response = await fetchTopVideos(regionCode);
      setVideos(response.videos);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load videos');
    } finally {
      setLoading(false);
    }
  };

  const renderPanel = (
    regionCode: string,
    setRegionCode: (code: string) => void,
    videos: VideoData[],
    loading: boolean,
    error: string | null,
    label: string
  ) => {
    const regionName = REGION_CODES.find((r) => r.code === regionCode)?.name || regionCode;

    return (
      <div className="comparison-panel">
        <RegionSelector
          selectedRegion={regionCode}
          onRegionChange={setRegionCode}
          regions={REGION_CODES}
          label={label}
        />

        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading videos...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <p>❌ {error}</p>
          </div>
        )}

        {!loading && !error && videos.length > 0 && (
          <>
            <h2 className="region-title">Top 10 Music Videos - {regionName}</h2>
            <div className="video-grid">
              {videos.map((video, index) => (
                <VideoCard key={video.id} video={video} rank={index + 1} />
              ))}
            </div>
          </>
        )}

        {!loading && !error && videos.length === 0 && regionCode && (
          <div className="empty-state">
            <p>No videos found for this region.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="comparison-view">
      {renderPanel(region1, setRegion1, videos1, loading1, error1, 'Region 1')}
      {renderPanel(region2, setRegion2, videos2, loading2, error2, 'Region 2')}
    </div>
  );
}
