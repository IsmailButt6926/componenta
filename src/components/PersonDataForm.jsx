import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Switch } from "@headlessui/react";
import {
  carOptions,
  colorOptions,
  countriesOptions,
  dishOptions,
  genderOptions,
} from "../services/option";

const PersonDataForm = () => {
  const [personData, setPersonData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    favouriteCountries: [],
    favouriteDish: "",
    favouriteColor: "Red",
    favouriteCars: [],
    enabled: true,
  });
  useEffect(() => {
    console.log("personData", personData);
  }, [personData]);

  // const [isSubmited, setIsSubmited] = useState(false);

  //   useEffect(() => {
  //     console.log("Data", personData);
  //   }, [personData]);

  const submitData = () => {
    console.log("personData", personData);
    // setIsSubmited(true);
  };

  return (
    <form class="max-w-sm ml-5 mt-5">
      <div className="flex w-[100vw] gap-4">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your name"
            required
            type="text"
            value={personData.name}
            onChange={(e) =>
              setPersonData({ ...personData, name: e.target.value })
            }
          />
        </div>
        {/* {isSubmited && !personData.name && <h2>Please fill this field</h2>} */}

        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your email"
            required
            type="email"
            value={personData.email}
            onChange={(e) =>
              setPersonData({ ...personData, email: e.target.value })
            }
          />
        </div>

        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your phone number"
            required
            type="number"
            value={personData.phone}
            onChange={(e) =>
              setPersonData({ ...personData, phone: e.target.value })
            }
          />
        </div>

        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date of Birth
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your dob"
            required
            type="date"
            value={personData.dateOfBirth}
            onChange={(e) =>
              setPersonData({ ...personData, dateOfBirth: e.target.value })
            }
          />
        </div>
      </div>

      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Gender
        </label>
        <Select
          options={genderOptions}
          onChange={(selected) =>
            setPersonData({ ...personData, gender: selected.value })
          }
        />
      </div>

      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select your favourite countries
        </label>
        <Select
          options={countriesOptions}
          onChange={(selected) => {
            const newValue = selected?.map((item) => item.value);
            setPersonData({
              ...personData,
              favouriteCountries: [newValue],
            });
          }}
          isMulti
        />
      </div>

      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select your favourite dish
        </label>
        <Select
          options={dishOptions}
          onChange={(selected) =>
            setPersonData({
              ...personData,
              favouriteDish: selected.value,
            })
          }
        />
      </div>

      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select your favourite color
        </label>
        <Select
          options={colorOptions}
          onChange={(selected) =>
            setPersonData({
              ...personData,
              favouriteColor: selected.value,
            })
          }
          value={{
            value: personData?.favouriteColor,
            label: personData?.favouriteColor,
          }}
        />
      </div>

      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select your favourite cars
        </label>
        <Select
          options={carOptions}
          onChange={(selected) => {
            const newValue = selected.map((item) => {
              return item?.value;
            });
            setPersonData({
              ...personData,
              favouriteCars: [newValue],
            });
          }}
          isMulti
        />
      </div>

      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Do you want to submit this data
        </label>
        <Switch
          checked={personData?.enabled}
          onChange={(selected) =>
            setPersonData({ ...personData, enabled: selected })
          }
          className={`${
            personData?.enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              personData?.enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={submitData()}
        disabled={!personData?.enabled}
      >
        Submit
      </button>
    </form>
  );
};

export default PersonDataForm;
