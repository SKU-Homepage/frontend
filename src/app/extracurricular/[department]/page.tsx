import { getExtraCurricularPostsServer } from "@/api/extracurricular-service";
import ExtraCurricularContent from "@/components/extraCurricular/post/ExtraCurricularContent";

export const dynamic = "force-dynamic";

type Department = "ALL" | "GYOSU-HAKSEUB" | "JINLO_CHWIEOB" | "DAEHAK_HYEOKSIN";

export default async function ExtraCurricularByDepartmentPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department } = await params;
  const dept = department as Department;
  const posts = await getExtraCurricularPostsServer(0, dept);

  return <ExtraCurricularContent initialData={posts} department={dept} />;
}
