import { NextResponse } from "next/server";

export const revalidate = 600; // cache for 10 minutes (nice for recruiter demo)

// responds to GET requests
// equivalent to GET /api/forecast?lat=...&lon=...
export async function GET(req: Request) {
    // reads query parameters
    // parses request url and gets lat and lon
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  // if lat or lon are missing
  if (!lat || !lon) {
    return NextResponse.json(
      { error: "Missing lat or lon" },
      { status: 400 }
    );
  }


  // user agent header required
  const headers = {
    "User-Agent": "brandon-portfolio (brandon.arriaga@sjsu.edu)",
    Accept: "application/geo+json",
  };

  // 1) points -> get forecast URL
  // using api weather gov URL, headers, next with revalidtion of 600 secs or 10 minutes
  const pointsRes = await fetch(`https://api.weather.gov/points/${lat},${lon}`, {
    headers,
    next: { revalidate: 600 },
  });

  // if not ok (status code 200), return NextResponse.json with a failure for point fetching
  if (!pointsRes.ok) {
    return NextResponse.json(
      { error: "Failed to fetch points", status: pointsRes.status },
      { status: 502 }
    );
  }


  // optional chaining used (if the thing on the left exists, keep going)
  // 
  const points = await pointsRes.json();
  const forecastUrl = points?.properties?.forecast; // daily forecast

  // if forecastUrl not valid, return error
  if (!forecastUrl) {
    return NextResponse.json(
      { error: "No forecast URL returned from points endpoint" },
      { status: 502 }
    );
  }

  // 2nd fetch of actual forecast
  const forecastRes = await fetch(forecastUrl, {
    headers,
    next: { revalidate: 600 },
  });

  if (!forecastRes.ok) {
    return NextResponse.json(
      { error: "Failed to fetch forecast", status: forecastRes.status },
      { status: 502 }
    );
  }

  // get forecast
  const forecast = await forecastRes.json();
  const periods = forecast?.properties?.periods ?? [];

  // Return a small, recruiter-friendly payload
  // return location, state, updated, and periods
  return NextResponse.json({
    location: points?.properties?.relativeLocation?.properties?.city,
    state: points?.properties?.relativeLocation?.properties?.state,
    updated: forecast?.properties?.updated,
    periods: periods.slice(0, 3), // keep it simple: today/tonight/tomorrow
  });
}
