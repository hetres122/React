interface FormFieldProps {
  name: string;
  label: string;
  type: string;
  value: string;
}

const Input: React.FC<FormFieldProps> = ({ name, label, type, value }) => {
  return (
    <>
      <label htmlFor={name} className=" text-lg text-gray-700">
        {label}
      </label>
      <input
        id={name}
        defaultValue={value}
        type={type}
        name={name}
        className="row-end h-10 w-full rounded-md border-2 border-gray-300 bg-gray-50 p-2.5 tracking-wider text-gray-900 focus:border-2 focus:border-blue-700 focus:outline-none "
      />
    </>
  );
};

export default Input;
