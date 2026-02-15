import { getExtraCurricularPostsServer } from "@/api/extracurricular-service";
import ExtraCurricularContent from "@/components/extraCurricular/post/ExtraCurricularContent";

export const dynamic = "force-dynamic";

export default async function ExtraCurricularPage() {
  const posts = await getExtraCurricularPostsServer(0, "ALL");

  return <ExtraCurricularContent initialData={posts} department="ALL" />;
}
