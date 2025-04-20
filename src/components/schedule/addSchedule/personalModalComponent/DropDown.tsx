import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import BelowDirection from "../../../../../public/images/below-direction.svg";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/utils/cn";

interface DropDownProps {
  name: string;
  menus: string[];
  selectedMenu: string | null;
  setSelectedMenu: Dispatch<SetStateAction<string | null>>;
}

const DropDown = ({ name, menus, selectedMenu, setSelectedMenu }: DropDownProps) => {
  return (
    <Menu>
      <MenuButton
        as="button"
        className={cn(
          "flex flex-1 items-center justify-between rounded-[10px] border-[0.5px] border-[#75869b0f] bg-[#EEF0F1] p-[14px] text-[14px] font-[400] text-[#14396769] data-[open]:[&_svg]:rotate-180",
          selectedMenu !== null && "text-[#143967]"
        )}
      >
        {(selectedMenu as string) ?? name}
        <BelowDirection />
      </MenuButton>
      <MenuItems
        anchor={{ to: "bottom", gap: 4 }}
        className="w-[var(--button-width)] origin-top !overflow-hidden rounded-[10px] border-[0.5px] border-[#75869b0f] bg-[#EEF0F1] text-[14px] font-[400] text-[#14396769] transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        transition
      >
        <div className="!max-h-64 overflow-y-auto">
          {menus.map((menu) => (
            <MenuItem
              as="div"
              key={menu}
              onClick={() => setSelectedMenu(menu)}
              className={cn(
                "cursor-pointer p-[14px] data-[focus]:bg-neutral-100",
                menu === selectedMenu && "text-[#143967]"
              )}
            >
              {menu}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
