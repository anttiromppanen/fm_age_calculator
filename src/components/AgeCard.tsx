import { useState } from "react";
import AgeForm from "./AgeForm/AgeForm";
import ViewAge from "./ViewAge";

function AgeCard() {
  const [years, setYears] = useState("- -");
  const [months, setMonths] = useState("- -");
  const [days, setDays] = useState("- -");

  return (
    <div className="mx-4 w-full max-w-[840px] rounded-3xl rounded-br-[30%_15%] bg-userWhite px-6 py-12 shadow-lg sm:h-[650px] md:mx-0 md:rounded-br-[30%] md:px-14 md:py-14">
      <AgeForm setYears={setYears} setMonths={setMonths} setDays={setDays} />
      <ViewAge years={years} months={months} days={days} />
    </div>
  );
}

export default AgeCard;
