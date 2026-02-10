import { NextResponse } from "next/server";
import "process/env";

export const revalidate = 600; // caching for 10 minutes


export async function GET(req: Request) {
  const headers = {
    "User-Agent": "zayd-portfolio (brandon.arriaga@sjsu.edu)",
    Accept: "application/json",
  };

  const resultRes = await fetch()
}
