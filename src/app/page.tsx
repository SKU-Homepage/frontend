import H from "@/components/home";
import Table from "@/components/home/TableSection";
import { WidgetSection } from "@/components/home/WidgetSection";

export default function Home() {
  return (
    <H>
      <H.Header />
      <Table />
      <H.Tip />
      <WidgetSection />
    </H>
  );
}
