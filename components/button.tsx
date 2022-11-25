import { cls } from "../libs/utils";

interface IButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

// props에 onclick있는데 사용처가 오디지?
function Button({ large = false, text, ...rest }: IButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full bg-orange-500 hover:bg-orange-600 text-white px-4 border border-y-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none",
        large ? "py-3 text-base" : "py-2 text-sm "
      )}
    >
      {text}
    </button>
  );
}

export default Button;
