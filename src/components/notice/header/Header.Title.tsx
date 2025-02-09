interface HeaderTitleProps {
  title: string;
  mention: string;
}

const HeaderTitle = ({ title, mention }: HeaderTitleProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-xl text-[#143967] font-semibold">{title}</h1>
      <p className="text-xs text-[#75869B] font-normal">{mention}</p>
    </div>
  );
};

export default HeaderTitle;
