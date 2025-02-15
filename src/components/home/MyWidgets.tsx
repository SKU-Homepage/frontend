"use client";
import { WidgetProps } from "@/constants/widgets";
import H from "@/components/home";
import { useAtom } from "jotai";
import { myWidgets } from "@/stores/atoms";

const MyWidgets = () => {
  const [widgets] = useAtom(myWidgets);

  return widgets.map((item: WidgetProps) => (
    <H.Widget
      title={item.title}
      description={item.description}
      src={item.src}
      url={item.url}
      key={item.title}
    />
  ));
};

export default MyWidgets;
