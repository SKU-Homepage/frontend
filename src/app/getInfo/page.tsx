import FormContainer from "@/components/getInfo/FormContainer";
import G from "@/components/getInfo";

export default function GetInfo() {
  return (
    <G>
      <G.Header
        msg="먼저 "
        msg2="학과 정보"
        msg3="를 입력해 주세요"
        description="학과 정보를 입력해주시면 더 편리하게 앱을 이용하실 수 있어요!"
      />
      <FormContainer />
    </G>
  );
}
