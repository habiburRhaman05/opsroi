import type { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout | OpsROI",
  description: "Complete your OpsROI subscription. Secure checkout powered by Stripe.",
  robots: { index: false, follow: false },
};

type SearchParams = { plan?: string };

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { plan } = await searchParams;
  return <CheckoutClient planKey={plan ?? "pro"} />;
}
