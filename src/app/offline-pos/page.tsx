import { SolutionPage } from "@/components/SolutionPage";
import { solutionMetadata } from "@/lib/solutionMetadata";
import { SOLUTIONS } from "@/lib/solutions";

export const metadata = solutionMetadata("offline-pos");

export default function Page() {
  return <SolutionPage page={SOLUTIONS["offline-pos"]} />;
}
