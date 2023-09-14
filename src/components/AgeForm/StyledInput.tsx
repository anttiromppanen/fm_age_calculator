/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

type StyledInputProps = InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string> & {
    label: string;
    isError: boolean;
    showError?: boolean;
    setIsError: (arg0: boolean) => void;
  };

function StyledInput({
  label,
  showError,
  isError,
  setIsError,
  ...props
}: StyledInputProps) {
  const [field, meta] = useField(props);

  return (
    <div className="w-[88px] sm:w-[160px]">
      <label htmlFor={props.id || props.name}>
        <div className="mb-2 sm:mb-3">
          <p
            className={`text-xs text-userSmokeyGrey ${
              meta.touched && meta.error && "!text-userLightRed"
            }`}
          >
            {label}
          </p>
        </div>
      </label>
      <input
        onKeyUp={() => isError && setIsError && setIsError(false)}
        className={`w-full rounded-lg border border-userLightGrey p-4 text-xl hover:border-userPurple focus:outline-userPurple sm:px-6 sm:py-4 sm:text-3xl ${
          meta.touched &&
          meta.error &&
          "!border-userLightRed !outline-userLightRed"
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className="mt-2 text-xs text-userLightRed">{meta.error}</p>
      )}
      {isError && showError && (
        <p className="mt-2 text-xs text-userLightRed">Must be a valid date</p>
      )}
    </div>
  );
}

export default StyledInput;
