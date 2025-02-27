import TimeTable from "./TimeTable/TimeTable";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/get-query-client";
import { useTimeTable } from "@/hooks/homeHooks";
import TableBody from "./TimeTable/TableBody";

export const TableSection = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(useTimeTable);

  return (
    <TimeTable>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TableBody />
      </HydrationBoundary>
    </TimeTable>
  );
};

export default TableSection;
