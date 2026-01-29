import type { RegionCode } from "../types";
import "./RegionSelector.css";

interface RegionSelectorProps {
  selectedRegion: string;
  onRegionChange: (regionCode: string) => void;
  regions: RegionCode[];
  label: string;
}

export default function RegionSelector({
  selectedRegion,
  onRegionChange,
  regions,
  label,
}: RegionSelectorProps) {
  return (
    <div className="region-selector">
      <label htmlFor={`region-${label}`}>{label}</label>
      <select
        id={`region-${label}`}
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="region-dropdown"
      >
        <option value="">Select a region</option>
        {regions.map((region) => (
          <option key={region.code} value={region.code}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
}
