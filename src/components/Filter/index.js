import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";

const Filters = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { dropdownState, data } = props;
  const { title = "", slug = "", type = "checkbox", filtersData = [] } = data;

  const [inptState, setInptState] = useState({
    name: "",
    value: [],
    event: "",
  });
  const [toggleDropdown, setToggleDropdown] = useState(dropdownState);

  useEffect(() => {
    const urlValues = searchParams.getAll(slug);
    setInptState({
      value: urlValues,
      name: slug,
      event: "",
    });
  }, []);

  const onChangeFunc = (e) => {
    if (e.target.checked && type === "radio") {
      searchParams.set(slug, e.target.value);
    } else if (e.target.checked) {
      searchParams.append(slug, e.target.value);
    } else {
      const values = searchParams.getAll(slug);
      if (values.length > 0) {
        const index = values.indexOf(e.target.value);
        values.splice(index, 1);
        searchParams.set(slug, values);
      }
    }

    setSearchParams(searchParams);
    setInptState((prev) => {
      return {
        value: [...prev.value, e.target.value],
        name: prev.name,
        event: e,
      };
    });
  };

  return (
    <div
      className={[
        "w-full bg-white overflow-hidden",
        toggleDropdown ? "max-h-full bg-white" : "h-8",
      ].join(" ")}
    >
      <div
        className="flex justify-between items-baseline"
        onClick={() => setToggleDropdown((prev) => !prev)}
      >
        <div className="title">{title}</div>
        <div className="arrowBox">
          <MdKeyboardArrowUp
            className={[
              "w-full h-full ease-in duration-300",
              toggleDropdown ? "origin-center rotate-180" : null,
            ].join(" ")}
          ></MdKeyboardArrowUp>
        </div>
      </div>

      <div>
        <div className="relative my-2">
          {filtersData?.map((filterItem, id) => {
            return (
              <div
                className="w-full text-xs px-1 py-1 text-black flex items-center gap-2"
                key={"fdm" + id}
                // onChange={(e) => onChangeFunc(e)}
              >
                <input
                  className={[
                    type === "radio"
                      ? "w-2.5 h-2.5 rounded-full border-1 appearance-none border-opacity-500 border-black ring-1 ring-black p-0.1 cursor-pointer focus:ring-offset-2 focus:ring-opacity-500 focus:ring-black checked:ring-offset-1 checked:bg-black"
                      : "cursor-pointer w-2.5 h-2.5 border-1 appearance-none border-black ring-1 ring-black p-0.1 focus:ring-offset-1 focus:ring-opacity-50 focus:ring-black checked:bg-black checked:bg-no-repeat checked:bg-center checked:w-2.5 checked:h-2.5 checked:ring-offset-1 checked:ring-black checked:bg-contain",
                  ]}
                  type={type}
                  name={type === "radio" ? "radio" : filterItem?.ttl}
                  id={filterItem?.txt}
                  value={filterItem.value}
                  checked={inptState.value?.includes(filterItem.value)}
                  onChange={(e) => onChangeFunc(e)}
                />
                <label
                  htmlFor={filterItem?.txt}
                  className="cursor-pointer flex gap-0.5 text-black"
                >
                  {filterItem?.stars ? <span>stars</span> : null}
                  <span>{filterItem?.txt}</span>
                  <span>({filterItem?.count})</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
