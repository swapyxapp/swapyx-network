import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    from: "RHUSD",
    to: "WBTC",
    amountIn: "100",
    amountOut: "0.0018",
    priceImpact: "0.12%"
  });
}
