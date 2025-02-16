import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";

const Login = ({ children }: ChildrenProp) => {
  return (
    <div className="flex bg-[url('/images/login_background.png')] h-[100vh] items-center px-[7.4%]">
      {children}
    </div>
  );
};

const Content = ({ children }: ChildrenProp) => {
  return (
    <div className="flex flex-col items-center w-full gap-[20px]">
      <Image src="/images/login_logo.svg" width={173} height={112} alt="로그인 로고" />
      {children}
    </div>
  );
};

Login.Content = Content;
export default Login;
