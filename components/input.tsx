interface IInput {
  name: string;
  label: string;
  kind?: "text" | "phone" | "price" | "email";
  placeholder?: string;
  [key: string]: any;
}

export default function Input({
  name,
  label,
  placeholder,
  kind = "text",
  ...rest
}: IInput) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {kind === "text" ? (
        <input
          id={name}
          type="text"
          {...rest}
          placeholder={placeholder}
          className="w-full rounded-md text-gray-400 border-gray-300 focus:border-orange-500 appearance-none focus:ring-2 focus:ring-orange-500"
        />
      ) : null}

      {kind === "price" ? (
        <div className="relative flex justify-between">
          <div className="absolute left-0 pl-3 pt-2 text-gray-500">
            <span>$</span>
          </div>
          <input
            id={name}
            type="text"
            placeholder={placeholder ? placeholder : "0.00"}
            className="px-7 w-full rounded-md text-gray-400 border-gray-300 focus:border-orange-500 appearance-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="flex items-center pl-2">
            <span className="text-gray-600">USD</span>
          </div>
        </div>
      ) : null}

      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center text-sm px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none">
            +82
          </span>
          <input
            id={name}
            type="number"
            required
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      ) : null}

      {kind === "email" ? (
        <input
          id={name}
          type="email"
          required
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      ) : null}
    </div>
  );
}
