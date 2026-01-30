import { NextResponse } from "next/server";

export const revalidate = 600; 

export async function GET(req: Request) {

    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
    const state = searchParams.get("state");

    if(!city || !state) {
        return NextResponse.json(
            {error : "Missing city or state"},
            { status: 400 }
        )
    }

    const headers = {
        "User-Agent": "zayd-portfolio (brandon.arriaga@sjsu.edu)",
        Accept: "application/json",
    };

        const q = encodeURIComponent(`${city}, ${state}`)
    const pointsRes = await fetch(`https://nominatim.openstreetmap.org/search?q=${q},${state}&format=json&limit=1`, {
        headers,
        next: { revalidate: 600 },
    });

    if (!pointsRes.ok) {
        return NextResponse.json(
            { error: "Failed to fetch points", status: pointsRes.status},
            { status: 502}
        )
    }

    const values = await pointsRes.json();
    if (!Array.isArray(values) || values.length === 0) {
        return NextResponse.json({ error: "No results found" }, { status: 404 });
    }

    const first = values[0];

    return NextResponse.json({
        lat: first.lat,
        lon: first.lon,
    });
}