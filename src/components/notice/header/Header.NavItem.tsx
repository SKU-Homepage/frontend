interface HeaderNavItemProps {
  pathName: string;
  isClicked: boolean;
  onClick: () => void;
}

const HeaderNavItem = ({ pathName, isClicked, onClick }: HeaderNavItemProps) => {
  const colorVariants = {
    clickedItem:
      "flex-1 text-center text-base text-[#143967] font-medium border-b-[3px] rounded-xs cursor-pointer",
    nonClickedItem:
      "flex-1 text-center text-base text-[#143967] opacity-50 font-medium border-b-[3px] rounded-xs cursor-pointer",
  };

  return (
    <li
      className={isClicked ? colorVariants.clickedItem : colorVariants.nonClickedItem}
      onClick={() => {
        onClick();
      }}
    >
      {pathName}
    </li>
  );
};

export default HeaderNavItem;
