import { Fragment } from "react";
import Select from "react-select";

import { colors } from "../shared/colors";

interface OptionType {
  map(
    arg0: (item: string) => { value: string; label: string }
  ):
    | import("react-select").OptionsOrGroups<
        string,
        import("react-select").GroupBase<string>
      >
    | undefined;
  label: string;
  value: string;
}

type DropdownProps = {
  value?: string;
  options: OptionType;
  onChange?: () => void;
  placeholder?: string;
};

const Dropdown = ({ options, value, onChange, placeholder }: DropdownProps) => {
  return (
    <Fragment>
      <Select
        placeholder={placeholder}
        styles={{
          container: (styles) => ({
            ...styles,
            marginLeft: -2,
          }),
          control: (styles) => ({
            ...styles,
            boxShadow: "none",
            fontSize: "1rem",
            height: 48,
            borderRadius: "8px",
            backgroundColor: "#fafafa",
            border: `1px solid ${colors.grey} !important`,
          }),
          valueContainer: (styles) => ({
            ...styles,
            paddingLeft: "1rem",
          }),
          placeholder: (styles) => ({
            ...styles,
            fontSize: "1rem",
            fontWeight: 400,
            color: "#000",
          }),
          menu: (styles) => ({
            ...styles,
            borderRadius: "8px",
            marginTop: -47,
            boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15); !important",
          }),
          menuList: (styles) => ({
            ...styles,
            margin: "0.5rem",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }),
          option: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor:
              (isFocused && "#f5f5f5 !important") || "#fff!important",

            "&:hover": {
              borderColor: "red !important",
            },
            borderRadius: "8px",
            outline: "none",
            padding: "0.75rem",
            fontSize: "1rem",
            cursor: "pointer",
            color: "#000",
          }),
          singleValue: (styles) => ({
            ...styles,
            lineHeight: 1.4,
          }),
        }}
        value={value}
        onChange={onChange}
        options={options?.map((item) => ({
          value: item,
          label: item,
        }))}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </Fragment>
  );
};

export default Dropdown;
