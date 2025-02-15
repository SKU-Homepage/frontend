import Image from "next/image";

const Widget = ({ index, toggleSelect, selected, title }: WidgetProps) => {
  return (
    <button
      onClick={() => toggleSelect(index)}
      className={`relative flex items-center justify-center aspect-square rounded-[15px]
          bg-[#F1F6FC] bg-linear-[247deg,rgba(222,234,255,0.03)_-8.71%,rgba(154,191,255,0.05)_108.48%,#F1F6FC] border-[2.4px]
          ${selected ? "border-[#143967]" : "border-[#FFF]"}`}
    >
      <span className="text-[12.5px] font-semibold text-[#143967]">{title}</span>
      <div className="absolute top-[-6px] right-[-6px]">
        <Image
          src="/images/blue-check.svg"
          width={18}
          height={18}
          alt="위젯 선택"
          className={`transition duration-300 ${
            selected ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

interface WidgetProps {
  index: number;
  toggleSelect: (index: number) => void;
  selected: boolean; // `boolean`으로 변경
  title: string;
}

export default Widget;
