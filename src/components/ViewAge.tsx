import CountUp from "react-countup";

/* eslint-disable react/jsx-props-no-spreading */
interface ViewAgeProps {
  years: string;
  months: string;
  days: string;
}

interface AgeFieldProps {
  value: string;
  text: string;
}

function AgeField({ value, text }: AgeFieldProps) {
  return (
    <p className="select-none text-[3.25rem] font-bold italic text-userPurple sm:text-8xl">
      {value === "- -" ? (
        `${value} `
      ) : (
        <CountUp end={Number(value)} suffix={` `} duration={6} />
      )}
      <span className="text-userOffBlack">{text}</span>
    </p>
  );
}

function ViewAge({ years, months, days }: ViewAgeProps) {
  return (
    <div className="mt-10 sm:mt-0">
      <AgeField value={years} text="years" />
      <AgeField value={months} text="months" />
      <AgeField value={days} text="days" />
    </div>
  );
}

export default ViewAge;
