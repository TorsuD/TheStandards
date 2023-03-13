import React, { useState } from "react";
import { Slider } from "@mantine/core";
import { FiCode } from "react-icons/fi";

function SliderComponent({
  title,
  defaultValue,
  min,
  max,
  step,
  description,
  marks,
}) {
  const [sliderValue, setSliderValue] = useState(1);

  const sliderOnChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 0.2 }}>{title}</div>

      <div style={{ flex: 0.6, marginRight: "20px" }}>
        <Slider
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          onChange={sliderOnChange}
          thumbChildren={<FiCode size="1rem" />}
          marks={marks}
          labelTransition="fade"
          size={5}
          styles={(theme) => ({
            track: {
              height: 5,
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.blue[1],
            },
            mark: {
              borderColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.blue[1],
            },
            markFilled: {
              borderColor: theme.colors.blue[6],
            },
            markLabel: {
              fontSize: theme.fontSizes.lg,
              marginTop: 10,
            },
            thumb: {
              height: 25,
              width: 25,
              backgroundColor: theme.white,
              boxShadow: theme.shadows.sm,
            },
          })}
        />
      </div>

      <div
        style={{
          marginLeft: "30px",
          flex: 0.2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          value={sliderValue}
          disabled
          style={{
            width: "25%",
            borderRadius: "5px",
            // border: "2px solid #e87c32",
          }}
        />
        <div
          style={{
            color: "#e87c32",
            marginLeft: "5px",
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
