"use client";
import { WidgetProps } from "@/constants/widgets";
import H from "@/components/home";
import { useAtom } from "jotai";
import { myWidgets } from "@/stores/atoms";
import { useEffect } from "react";

const MyWidgets = () => {
  const [widgets, setWidgets] = useAtom(myWidgets);
  useEffect(() => {
    if (!widgets.length) {
      const storedData = localStorage.getItem("selectedWidgets");
      const widgets = storedData ? JSON.parse(storedData) : [];
      setWidgets(widgets);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widgets]);

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
