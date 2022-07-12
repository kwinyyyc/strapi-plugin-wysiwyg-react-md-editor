import React from "react";
import {
  Button,
  Flex,
  Field,
  Stack,
  FieldLabel,
  FieldInput,
} from "@strapi/design-system";

export default {
  name: "table",
  groupName: "table",
  buttonProps: { "aria-label": "Insert table" },
  icon: (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.875 1.875H1.125C0.917578 1.875 0.75 2.04258 0.75 2.25V9.75C0.75 9.95742 0.917578 10.125 1.125 10.125H10.875C11.0824 10.125 11.25 9.95742 11.25 9.75V2.25C11.25 2.04258 11.0824 1.875 10.875 1.875ZM10.4062 4.3125H7.92188V2.71875H10.4062V4.3125ZM10.4062 6.9375H7.92188V5.0625H10.4062V6.9375ZM4.82812 5.0625H7.17188V6.9375H4.82812V5.0625ZM7.17188 4.3125H4.82812V2.71875H7.17188V4.3125ZM1.59375 5.0625H4.07812V6.9375H1.59375V5.0625ZM1.59375 2.71875H4.07812V4.3125H1.59375V2.71875ZM1.59375 7.6875H4.07812V9.28125H1.59375V7.6875ZM4.82812 7.6875H7.17188V9.28125H4.82812V7.6875ZM10.4062 9.28125H7.92188V7.6875H10.4062V9.28125Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  children: ({ close, getState, textApi }) => {
    const rowsInput = React.useRef(null);
    const columnsInput = React.useRef(null);
    const addTable = React.useCallback(
      ({ selection }) => {
        const rows = rowsInput.current.value;
        const columns = columnsInput.current.value;

        if (rows && columns && (rows < 1 || columns < 1)) {
          return;
        }

        const { end } = selection;
        const row = `| text `
          .concat(`| text `.repeat(+columns - 1))
          .concat(`|\n`);
        const seperatingRow = `|------`
          .concat(`|------`.repeat(+columns - 1))
          .concat(`|\n`);
        const result =
          rows === 1
            ? row
            : `\n\n${row}${seperatingRow}`
                .concat(row.repeat(rows - 1))
                .concat(`\n`);

        textApi.setSelectionRange({ start: end, end });
        textApi.replaceSelection(result);
      },
      [rowsInput, columnsInput, textApi]
    );

    React.useEffect(() => {
      if (rowsInput.current && columnsInput.current) {
        rowsInput.current.value = "2";
        columnsInput.current.value = "2";
      }
    }, []);

    const handleAddTable = () => {
      addTable(getState());
      close();
    };

    return (
      <div
        style={{
          padding: 10,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
        }}
      >
        <Field name="rows">
          <Stack spacing={1}>
            <FieldLabel>Rows</FieldLabel>
            <FieldInput ref={rowsInput} type="number" />
          </Stack>
        </Field>
        <Field name="columns">
          <Stack spacing={1}>
            <FieldLabel>Columns</FieldLabel>
            <FieldInput ref={columnsInput} type="number" />
          </Stack>
        </Field>
        <Flex justifyContent="flex-end" style={{ gridColumn: "1 / -1" }}>
          <Button onClick={handleAddTable}>Add</Button>
        </Flex>
      </div>
    );
  },
};
