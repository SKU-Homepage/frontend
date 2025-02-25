"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Lectures from "./Lectures";
import TableHeader from "./TableHeader";
import { useTimeTable } from "@/hooks/homeHooks";

const TableBody = () => {
  const { data } = useSuspenseQuery(useTimeTable);

  return (
    <>
      <TableHeader number={data.length} />
      <Lectures lectures={data} />
    </>
  );
};

export default TableBody;
