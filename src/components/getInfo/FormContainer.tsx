"use client";

import { category, universityToDepartments, departmentToMajors } from "@/constants/userInfo";
import InputContainer from "./InputContainer";
import ButtonSection from "./ButtonSection";
import { useAtom } from "jotai";
import { userInfo } from "@/stores/atoms";
import { useCallback, useRef } from "react";

const FormContainer = () => {
  const [userInfoState] = useAtom(userInfo);
  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);

  const checkVisible = useCallback(
    (index: number, el: HTMLDivElement | null) => {
      inputRefs.current[index] = el;
      const visibleIndex = Object.values(userInfoState).findIndex((val) => val === "" || val === 0);

      if (visibleIndex > 0 && inputRefs.current[visibleIndex]) {
        inputRefs.current[visibleIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    [userInfoState]
  );

  return (
    <div className="mt-[42px] flex w-full flex-col gap-[35px]">
      {category.map((item, index) => {
        const isVisible =
          index === 0 ||
          Object.values(userInfoState)
            .slice(0, index)
            .every((val) => val !== "" && val !== 0);

        let options = item.options;
        if (index === 1 && userInfoState.college) {
          options =
            universityToDepartments[
              userInfoState.college as keyof typeof universityToDepartments
            ] || [];
        } else if (index === 2 && userInfoState.department) {
          options =
            departmentToMajors[userInfoState.department as keyof typeof departmentToMajors] || [];
        }

        return isVisible ? (
          <div key={item.title} ref={(el) => checkVisible(index, el)}>
            <InputContainer
              label={item.title}
              options={options}
              title={item.msg}
              placeholder={item.placeholder}
            />
          </div>
        ) : null;
      })}
      <ButtonSection />
    </div>
  );
};

export default FormContainer;
