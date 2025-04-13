import { cn } from "@/utils/cn";

interface ToastProps {
  message: string;
  error?: boolean;
}

const Toast = ({ message, error }: ToastProps) => (
  <div
    className={cn(
      "flex w-full items-center justify-center !rounded-[8px] !bg-[#14396778] !px-[0] !py-[8px]",
      error && "!bg-[#f0848478]"
    )}
  >
    {message}
  </div>
);

export default Toast;
