import H from "@/components/home";
import AddWidget from "./AddWidget/AddWidget";
import MyWidgets from "./MyWidgets";

export const WidgetSection = () => {
  return (
    <H.WidgetWrapper>
      <MyWidgets />
      <AddWidget />
    </H.WidgetWrapper>
  );
};
