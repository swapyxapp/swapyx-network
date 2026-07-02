import { createPublicClient, http } from "viem";

export const client = createPublicClient({
  transport: http(process.env.NEXT_PUBLIC_RPC_URL)
});
