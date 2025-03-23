import G from "@/components/getInfo";
import CheckSection from "@/components/getInfo/policy/CheckSection";

export default function Policy() {
  return (
    <G>
      <G.Header
        msg=""
        msg2="약관 내용에 동의"
        msg3="해 주세요"
        description="서비스 시점에서 꼭 필요한 최소한의 권한만 받아요!"
      />
      <CheckSection />
    </G>
  );
}
