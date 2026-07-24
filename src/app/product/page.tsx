import { permanentRedirect } from "next/navigation";

// The old /product page has been replaced by the /features page.
// Keep this route as a permanent (308) redirect so existing links resolve.
export default function ProductPage() {
  permanentRedirect("/features");
}
