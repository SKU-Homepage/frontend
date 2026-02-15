"use client";

import { category, universityToDepartments, departmentToMajors } from "@/constants/userInfo";
import InputContainer from "./InputContainer";
import ButtonSection from "./ButtonSection";
import { useAtom } from "jotai";
import { userInfo } from "@/stores/atoms";
import { useCallback, useEffect, useRef } from "react";

const FormContainer = () => {
  const [userInfoState] = useAtom(userInfo);
  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevVisibleCountRef = useRef(0);

  const checkVisible = useCallback((index: number, el: HTMLDivElement | null) => {
    inputRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const values = Object.values(userInfoState);
    const visibleCount = values.findIndex((val) => val === "" || val === 0);
    const effectiveCount = visibleCount === -1 ? values.length : visibleCount;

    if (effectiveCount > prevVisibleCountRef.current) {
      const targetIndex = effectiveCount;
      // Dialog 닫힘(200ms) + 포커스 복원 완료 후 스크롤 덮어쓰기
      const timer = setTimeout(() => {
        inputRefs.current[targetIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 250);
      prevVisibleCountRef.current = effectiveCount;
      return () => clearTimeout(timer);
    }

    prevVisibleCountRef.current = effectiveCount;
  }, [userInfoState]);

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
