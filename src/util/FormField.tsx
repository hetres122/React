import React from 'react';
import {useFormContext, Controller, FieldErrors} from 'react-hook-form';

interface FormFieldProps {
    name: string;
    label: string;
    type: string;
    rules: object;
    value: string;

    errors: FieldErrors<FormData>;
    trigger: Function;
}

const FormField: React.FC<FormFieldProps> = ({
                                                 name,
                                                 label,
                                                 type,
                                                 rules,
                                                 value,
                                                 errors,
                                                 trigger,
                                             }) => {
    const {control, formState: {touchedFields}} = useFormContext();

    const hasError = !!errors[name as keyof FormData];
    return (
        <div className={`relative  h-20`}>

            <Controller
                control={control}
                name={name}
                rules={rules}
                defaultValue={value}
                render={({field}) => (
                    <>
                        <input
                            type={type}
                            className={`block rounded-t-lg px-2.5 pb-3 pt-5  w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 ${!hasError ? "border-gray-300" : "border-red-500"} appearance-none dark:text-white ${!hasError ? "dark:border-gray-600" : "dark:border-red-500"} ${!hasError ? "dark:focus:border-blue-500" : ""}  focus:outline-none focus:ring-0 ${!hasError ? "focus:border-blue-600" : "focus:border-red-600 dark:focus-border-red-500"}  peer`}
                            placeholder=" "
                            id={name}
                            {...field}
                            onBlur={() => {
                                field.onBlur();
                                trigger(name);
                            }}
                            onChange={(e) => {
                                field.onChange(e.target.value);
                                if (touchedFields[name]) {
                                    trigger(name);
                                }
                            }}
                        />
                        <label htmlFor={name}
                               className={`${field.value && "peer-placeholder-shown:invisible"} absolute  text-sm ${hasError ? " text-red-500" : " text-gray-500"} dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 ${!hasError ? "peer-focus:text-blue-600" : "peer-focus:text-red-600"} peer-focus:text-blue-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}>{label}</label>
                        {<span
                            className="mt-2 text-xs text-red-600 dark:text-red-400">{hasError && errors[name as keyof FormData]?.message}</span>}
                    </>
                )}
            />
        </div>
    );
};

export default FormField;
