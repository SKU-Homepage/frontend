import { data, WidgetProps } from "@/constants/widgets";
import Widget from "./Widget";

const NewWidgets = ({ selected, setSelected }: NewWidgetsProps) => {
  const toggleSelect = (index: number) => {
    const selectedWidget = data[index];

    setSelected((prev) => {
      const exists = prev.some((widget) => widget.title === selectedWidget.title);
      return exists
        ? prev.filter((widget) => widget.title !== selectedWidget.title) // 이미 있으면 제거
        : [...prev, selectedWidget]; // 없으면 추가
    });
  };

  return (
    <div className="w-full grid grid-cols-3 mt-[28px] gap-2">
      {data.map((item, index) => (
        <Widget
          key={index}
          index={index}
          toggleSelect={toggleSelect}
          title={item.title}
          selected={selected.some((widget) => widget.title === item.title)}
        />
      ))}
    </div>
  );
};

interface NewWidgetsProps {
  selected: WidgetProps[];
  setSelected: React.Dispatch<React.SetStateAction<WidgetProps[]>>;
}

export default NewWidgets;
