import uniqueId from "@form-create/utils/lib/unique";
import { localeOptions, localeProps } from "../../utils";

const label = "输入框";
const name = "t-input-number";

export default {
  menu: "main",
  icon: "icon-input",
  label,
  name,
  event: ["blur", "focus", "change", "input", "clear"],
  validate: ["string", "url", "email"],
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t("com.input.name"),
      info: "",
      $required: false,
      props: {},
    };
  },
  props(_, { t }) {
    return localeProps(t, name + ".props", [
      {
        type: "switch",
        field: "disabled",
      },
      {
        type: "switch",
        field: "readonly",
      },
      {
        type: "select",
        field: "theme",
        options: localeOptions(t, [
          { label: "normal", value: "normal" },
          { label: "column", value: "column" },
          { label: "row", value: "row" },
        ]),
      },
      {
        field: "min",
        type: "inputNumber",
        props: {
          min: 0,
        },
      },
      {
        field: "max",
        type: "inputNumber",
        props: {
          min: 0,
        },
      },
      {
        type: "input",
        field: "placeholder",
      },
      {
        type: "switch",
        field: "clearable",
      },
    ]);
  },
};
