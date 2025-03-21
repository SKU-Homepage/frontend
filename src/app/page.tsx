import Tip from "@/components/common/tip/Tip";
import H from "@/components/home";
import Header from "@/components/home/header/Header";
import Table from "@/components/home/TableSection";
import { WidgetSection } from "@/components/home/widgets/WidgetSection";

export default function Home() {
  return (
    <H>
      <Header />
      <H.Header />
      <Table />
      <Tip msg="위젯을 자유롭게 설정해보세요." editMode />
      <WidgetSection />
    </H>
  );
}
