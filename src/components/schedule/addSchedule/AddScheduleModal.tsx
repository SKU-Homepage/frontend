import { cn } from "@/utils/cn";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

export default function AddScheduleBtn({ setShowModal }: AddScheduleBtnProps) {
  return (
    <Menu as="div">
      {({ open }) => (
        <>
          {/* 오버레이: MenuItems가 아닌 배경만 흐리게 만듦 */}
          {open && <div className="fixed inset-0 z-40 bg-black/70" onClick={() => {}} />}
          <div className="fixed right-[24px] bottom-[83px] z-50 sm:bottom-[30px]">
            <MenuButton
              className={cn(
                `flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#143967] text-2xl font-bold text-white transition-all duration-500`,
                {
                  "rotate-405 bg-white text-[#143967]": open,
                  "rotate-0": !open,
                }
              )}
            >
              +
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="fixed top-auto! right-[24px]! bottom-[147px] left-auto! z-50 w-[50%] max-w-[300px]! origin-top-right justify-between rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-[14px] font-semibold text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 sm:bottom-[94px]"
            >
              <MenuItem>
                <button
                  onClick={() => setShowModal(true)}
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-200"
                >
                  <Image
                    src="/images/black-school.png"
                    width={25}
                    height={25}
                    alt="학교 수업 추가"
                    className="size-4 fill-white/30"
                  />
                  <span className="text-[#143967]">학교 일정 추가하기</span>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-200">
                  <Image
                    src="/images/black-memo.png"
                    width={25}
                    height={25}
                    alt="학교 수업 추가"
                    className="size-4 fill-white/30"
                  />
                  <span className="text-[#143967]">개인 일정 추가하기</span>
                </button>
              </MenuItem>
            </MenuItems>
          </div>
        </>
      )}
    </Menu>
  );
}

interface AddScheduleBtnProps {
  setShowModal: (show: boolean) => void;
}
