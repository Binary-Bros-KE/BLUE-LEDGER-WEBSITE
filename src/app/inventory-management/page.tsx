import { SolutionPage } from "@/components/SolutionPage";
import { solutionMetadata } from "@/lib/solutionMetadata";
import { SOLUTIONS } from "@/lib/solutions";

export const metadata = solutionMetadata("inventory-management");

export default function Page() {
  return <SolutionPage page={SOLUTIONS["inventory-management"]} />;
}
