interface ColorPickerProps {
  selectedColor: string;
  onChange: (newColor: string, autoClose?: boolean) => void;
}

const DEFAULT_COLORS = ["#F25959", "#F8B6E1", "#85CB03", "#8AB8E7", "#FF9B44", "#D7B6F7"];

const ColorPicker = ({ selectedColor, onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <span className="text-[18px] font-[600] text-[#143967]">라벨 색상 설정하기</span>

      <div className="flex items-center justify-between">
        <span className="text-[14px] font-[400] text-[#143967]">기본</span>
        <div className="flex items-center gap-[8px]">
          {DEFAULT_COLORS.map((color) => (
            <div
              key={color}
              className="h-[32px] w-[32px] rounded-full"
              style={{ background: color }}
              onClick={() => onChange(color, true)}
            ></div>
          ))}
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#d9d9d95c]"></div>
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-[400] text-[#143967]">사용자 지정</span>
        <input
          type="color"
          className="h-[32px] w-[32px] rounded-full bg-[#D9D9D9]"
          value={selectedColor}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default ColorPicker;
