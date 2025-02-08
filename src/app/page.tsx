import Tip from "@/components/common/Tip";
import H from "@/components/home";
import Table from "@/components/home/TableSection";
import { WidgetSection } from "@/components/home/WidgetSection";

export default function Home() {
  return (
    <H>
      <H.Header />
      <Table />
      <Tip msg="위젯을 자유롭게 설정해보세요." />
      <WidgetSection />
    </H>
  );
}
