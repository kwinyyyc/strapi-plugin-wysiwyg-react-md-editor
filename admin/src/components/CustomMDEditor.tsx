import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

const CustomMDEditor = (props: any) => {
  const [value, setValue] = useState<string | undefined>(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    props.onChange(value);
  }, [value]);

  return (
    <MDEditor
      value={value}
      onChange={setValue}
      hidden={props.hidden}
      commands={props.commands}
    />
  );
};

export default CustomMDEditor;
