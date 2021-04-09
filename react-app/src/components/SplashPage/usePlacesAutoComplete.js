import React, { useEffect } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const PlacesAutocomplete = ({setAddress, address}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 29.760427, lng: () => -95.369804 },
      radius: 200000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
    setAddress(e.target.value)
  };

  useEffect(()=>{
    if(address){
      setValue(address)
    }

  },[setValue])

  const handleSelect = (val) => {
    setValue(val, false);
    setAddress(val)
  };

  return (
    <Combobox onSelect={handleSelect} style={{display: "flex", width: "80%"}} aria-labelledby="demo">
      <ComboboxInput
        style={{
          borderRadius: "2rem",
          padding: "0.4rem 1rem 0.4rem 1rem",
          fontWeight: "bold",
          width: "100%",
          justifyContent: "center"
        }}
        value={value}
        onChange={handleInput}
        disabled={!ready}
      />
      <ComboboxPopover style={{ zIndex: 1 }}>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
export default PlacesAutocomplete;
