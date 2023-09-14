import { Form, Formik } from "formik";
import * as Yup from "yup";

import { isValid, parseISO } from "date-fns";
import { useState } from "react";
import arrowIcon from "../../assets/images/icon-arrow.svg";
import StyledInput from "./StyledInput";
import calculateAge from "../../helpers/calculateAge";

interface Date {
  day: string;
  month: string;
  year: string;
}

interface Props {
  setYears: (arg0: string) => void;
  setMonths: (arg0: string) => void;
  setDays: (arg0: string) => void;
}

function AgeForm({ setYears, setMonths, setDays }: Props) {
  const [isError, setIsError] = useState(false);
  const isValidDate = (date: string) => isValid(parseISO(date));

  const handleSubmit = (values: Date) => {
    const dayFormatted = values.day.toString().padStart(2, "0");
    const monthFormatted = values.month.toString().padStart(2, "0");
    const YYYY_MM_DD = `${values.year}-${monthFormatted}-${dayFormatted}`;

    if (!isValidDate(YYYY_MM_DD)) {
      setIsError(true);
      return;
    }

    const age = calculateAge(YYYY_MM_DD);
    setYears(age.years.toString());
    setMonths(age.months.toString());
    setDays(age.days.toString());
  };

  return (
    <Formik
      initialValues={{
        day: "",
        month: "",
        year: "",
      }}
      validationSchema={Yup.object({
        day: Yup.number().required("This field is required").positive().max(31),
        month: Yup.number()
          .required("This field is required")
          .positive()
          .max(12),
        year: Yup.number()
          .required("This field is required")
          .positive()
          .max(new Date().getFullYear()),
      })}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form>
        <div className="mb-24 flex justify-center gap-x-4 sm:mb-12 sm:justify-start sm:gap-x-8">
          <StyledInput
            label="DAY"
            placeholder="DD"
            name="day"
            id="day"
            showError
            isError={isError}
            setIsError={setIsError}
          />
          <StyledInput
            label="MONTH"
            placeholder="MM"
            name="month"
            id="month"
            isError={isError}
            setIsError={setIsError}
          />
          <StyledInput
            label="YEAR"
            placeholder="YY"
            name="year"
            id="year"
            isError={isError}
            setIsError={setIsError}
          />
        </div>
        <div className="flex items-center justify-center border-t border-t-userLightGrey sm:justify-end">
          <button type="submit">
            <img
              src={arrowIcon}
              alt="Arrow button"
              className="-mt-9 h-16 w-16 rounded-full bg-userPurple p-4 sm:-mt-12 sm:h-24 sm:w-24 sm:p-6"
            />
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default AgeForm;
