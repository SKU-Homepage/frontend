import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";

const Login = ({ children }: ChildrenProp) => {
  return <div className="flex bg-[#F6F6F6] h-[100vh] items-center px-[7.4%]">{children}</div>;
};

const Content = ({ children }: ChildrenProp) => {
  return (
    <div className="flex flex-col items-end w-full gap-[20px]">
      <Image src="/images/login_logo.svg" width={242} height={60} alt="로그인 로고" />
      {children}
    </div>
  );
};

Login.Content = Content;
export default Login;
