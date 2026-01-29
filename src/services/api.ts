import type { ApiResponse } from "../types";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export async function fetchTopVideos(regionCode: string): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/videos/top?regionCode=${regionCode}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch videos: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
}
