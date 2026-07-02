import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "success",
    txHash: "0xabc123456789",
    route: ["RHUSD", "WETH", "WBTC"]
  });
}
