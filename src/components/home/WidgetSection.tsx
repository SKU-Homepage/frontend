import H from "@/components/home";
import AddWidget from "./AddWidget/AddWidget";

export const WidgetSection = () => {
  return (
    <H.WidgetWrapper>
      <H.Widget />
      <H.Widget />
      <H.Widget />
      <AddWidget />
    </H.WidgetWrapper>
  );
};
