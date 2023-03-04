import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link, useParams } from "react-router-dom";
import data from "./../Data.js";

const Schedule = () => {
  const {id} = useParams();
  const {title} = useParams();
  const [value, setValue] = useState(dayjs("2022-04-17"));
  return (
    <div className=' mx-auto relative ' >
      
      <div>
        <img
          className="absolute w-full h-screen"
          src="https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg"
        />
      </div>
      <div className="py-32">
        <div className="flex mx-20 gap-2">
          <div className="mt-1 text-2xl ">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </div>
          <Link to={"/explore"}>
            <div className="text-2xl relative">Back</div>
          </Link>
        </div>

        <div className="relative">
          <p className="font-bold text-5xl mt-10 ml-20 ">{`${title}`}</p>
        </div>
        <div className="relative">
          <p className="ml-20 mt-5">
            Check out our availability and book the date and time that works for
            you
          </p>
        </div>
        <div className="ml-20 mt-10">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker label="From" defaultValue={dayjs("2022-04-17")} />
              <DatePicker
                label="To"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="ml-20 relative">
          <Link to={`/travmates/${id}`}>
            <button class="bg-red-600 text-white py-3 md:py-4 px-7 md:px-10 text-lg  mt-8 hover:bg-red-900 ">
              FIND MATES
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
