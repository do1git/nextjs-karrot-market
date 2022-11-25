interface ITextarea {
  name?: string;
  label?: string;
  placeholder?: string;
  [key: string]: any;
}
//name label은 종속관계
export default function Textarea({
  label,
  name,
  placeholder,
  ...rest
}: ITextarea) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}

      <textarea
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
        rows={4}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

// interface TextAreaProps {
//     label?: string;
//     name?: string;
//     [key: string]: any;
//   }

//   export default function TextArea({ label, name, ...rest }: TextAreaProps) {
//     return (
//       <div>
//         {label ? (
//           <label
//             htmlFor={name}
//             className="mb-1 block text-sm font-medium text-gray-700"
//           >
//             {label}
//           </label>
//         ) : null}
//         <textarea
//           id={name}
//           className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
//           rows={4}
//           {...rest}
//         />
//       </div>
//     );
//   }
