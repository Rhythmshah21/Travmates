import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link, useParams } from "react-router-dom";
import data from "./../Data.js";

const Schedule = () => {
  // const {id} = useParams();
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
          <div className="mt-1 text-2xl text-secondary">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </div>
          <Link to={"/explore"}>
            <div className="text-2xl relative text-secondary font-montserrat">Back</div>
          </Link>
        </div>

        <div className="relative">
          <p className="font-bold text-5xl mt-10 ml-20 text-dark font-playfair ">{`${title}`}</p>
        </div>
        <div className="relative max-w-1/2">
          <p className="ml-20 mt-5 text-secondary font-montserrat text-2xl font-medium">
            Check out our availability and book the date and time that works for
            you
          </p>
        </div>
        <div className="ml-20 mt-10">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker label="From" defaultValue={dayjs("2023-03-05")}/>
              <DatePicker
                label="To"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="ml-20 relative">
          <Link to={`/travmates/${title}`}>
            <button class="my-5 hover:text-secondary text-2xl bg-mint border-0 py-3 px-8 focus:outline-none bg-secondary/60 text-mint font-medium rounded">
              FIND MATES
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
