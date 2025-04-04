"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Lectures from "./Lectures";
import TableHeader from "./TableHeader";
import { useTimeTable } from "@/hooks/homeHooks";
import TableLoader from "./TableLoader";

const TableBody = () => {
  const { data, isLoading } = useSuspenseQuery(useTimeTable);

  if (isLoading) return <TableLoader />;

  return (
    <>
      <TableHeader number={data?.length || 0} />
      <Lectures lectures={data || null} />
    </>
  );
};

export default TableBody;
