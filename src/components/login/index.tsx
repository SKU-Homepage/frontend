import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";

const Login = ({ children }: ChildrenProp) => {
  return (
    <div className="relative flex h-[100dvh] w-full max-w-[600px] items-center justify-center px-[7.4%]">
      <Image
        src="/images/login_background.png"
        width={600}
        height={100}
        alt="로그인 배경"
        quality={100}
        className="fixed z-[-1] h-full object-fill"
      />
      {children}
    </div>
  );
};

const Content = ({ children }: ChildrenProp) => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center gap-[20px]">
      <Image src="/images/login_logo.svg" width={173} height={112} alt="로그인 로고" />
      {children}
    </div>
  );
};

Login.Content = Content;
export default Login;
