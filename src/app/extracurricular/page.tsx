import { ExtraCurricularPostSection } from "@/components/extraCurricular";
import SearchAndSortSection from "@/components/extraCurricular/searchMenu/SearchAndSortSection";

export const dynamic = "force-dynamic";

export default function ExtraCurricularPage() {
  return (
    <>
      <SearchAndSortSection />
      <ExtraCurricularPostSection />
    </>
  );
}
