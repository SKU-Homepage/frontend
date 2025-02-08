import { useState } from "react";
import Widget from "./Widget";

const NewWidgets = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const data = [
    {
      title: "공지사항",
      description: "공지사항을 빠르게 확인해보세요.",
    },
    {
      title: "공지사항",
      description: "공지사항을 빠르게 확인해보세요.",
    },
    {
      title: "공지사항",
      description: "공지사항을 빠르게 확인해보세요.",
    },
    {
      title: "공지사항",
      description: "공지사항을 빠르게 확인해보세요.",
    },
    {
      title: "공지사항",
      description: "공지사항을 빠르게 확인해보세요.",
    },
    {
      title: "공지사항",
      description: "공지사항을 빠르게 확인해보세요.",
    },
    {
      title: "공지사항",
      description: "공지사항을 빠르게 확인해보세요.",
    },
    {
      title: "공지사항",
      description: "공지사항을 빠르게 확인해보세요.",
    },
    {
      title: "공지사항",
      description: "공지사항을 빠르게 확인해보세요.",
    },
  ];

  const toggleSelect = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full grid grid-cols-3 mt-[28px] gap-2">
      {data.map((item: Dataprops, index: number) => (
        <Widget
          key={index}
          index={index}
          toggleSelect={toggleSelect}
          title={item.title}
          selected={selected}
        />
      ))}
    </div>
  );
};

interface Dataprops {
  title: string;
  description: string;
}

export default NewWidgets;
