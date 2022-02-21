import React, { useEffect, useRef, useState } from "react";
const country = require("../jsondata/country.json");
import "react-bootstrap-typeahead/css/Typeahead.css";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

const api = "https://geo.vedicrishi.in/places";

export default function Sample(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState();
  const [error, seterror] = useState("");
  const typeahead = useRef(null);
  const [selectedcountry, setcountry] = useState("India");

  const handleSearch = (query) => {
    setIsLoading(true);
    fetch(api, {
      method: "POST",
      headers: {
        Authorization:
          "Basic NjAxMjgwOjgxNjAwODk5YzkzOTA4N2Q5YTFjMjYxMDhkZjg2Mzk5",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country: selectedcountry, name: query }),
    })
      .then((res) => res.json())
      .then((item) => {
        if (Array.isArray(item)) {
          const options = item.map((item) => ({
            country: item.country,
            lat: item.latitude,
            lon: item.longitude,
            place: item.place,
            id: item.place,
          }));
          setOptions(options);
          setIsLoading(false);
        } else {
          seterror("no match found");
        }
      });
  };
  const handdleChange = (input) => {
    props.passdata(input[0]);
  };
  const handlecountry = (e) => {
    const { value } = e.target;
    setcountry(value);
  };
  useEffect(() => {
    if (props.clear) {
      typeahead.current.clear();
    }
  }, [props.clear]);

  const filterBy = () => true;
  return (
    <div className="flex flex-col gap-5 sm:gap-6 ">
      <div className="w-full  flex gap-6 md:gap-7 sm:flex-row flex-col items-end">
        <div className=" w-full sm:max-w-max">
          <select
            id="country"
            onChange={handlecountry}
            name="country"
            defaultValue={selectedcountry}
            className="w-full sm:w-[170px] truncate pr-3 focus:ring-4 focus:ring-green-100  selectCountry text-zinc-800  bg-transparent border rounded px-2 border-zinc-400 focus:border-green-400  py-2  "
          >
            {country.map((item, i) => (
              <option value={item.country_name} key={i}>
                {item.country_name}
              </option>
            ))}
          </select>
        </div>
        <div className=" w-full">
          <div className="w-full">
            <AsyncTypeahead
              className=" w-full text-zinc-800  bg-white"
              ref={typeahead}
              filterBy={filterBy}
              id="place"
              isLoading={Boolean(isLoading)}
              labelKey="place"
              minLength={3}
              onChange={handdleChange}
              onSearch={handleSearch}
              options={options}
              placeholder="Type Birth City/District*"
              renderMenuItemChildren={(option, props) => (
                <div className="bg-white border dark:bg-zinc-800 border-t-0   w-full  hover:border-green-400 ">
                  <p className="text-sm cursor-pointer text-zinc-800 dark:text-zinc-100 py-2.5 px-2 items-center hover:bg-green-500 hover:text-white ">
                    {option.place}
                  </p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
