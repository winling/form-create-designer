import { localeOptions, localeProps } from "../../utils";

const label = "标签";
const name = "tTag";

export default {
  menu: "aide",
  icon: "icon-tag",
  label,
  name,
  mask: true,
  event: ["click", "close"],
  rule({ t }) {
    return {
      type: name,
      props: {
        content: "标签",
      },
      native: true,
    };
  },
  watch: {
    formCreateNative({ value, rule }) {
      if (value) {
        rule.title = "";
      }
    },
  },
  props(_, { t }) {
    return localeProps(t, name + ".props", [
      {
        type: "input",
        field: "content",
      },
      {
        type: "select",
        field: "shape",
        options: [
          { label: "square", value: "square" },
          {
            label: "round",
            value: "round",
          },
          { label: "mark", value: "mark" },
        ],
      },
      {
        type: "select",
        field: "theme",
        options: [
          { label: "primary", value: "primary" },
          {
            label: "success",
            value: "success",
          },
          { label: "warning", value: "warning" },
          { label: "danger", value: "danger" },
          {
            label: "default",
            value: "default",
          },
        ],
      },
      {
        type: "select",
        field: "size",
        options: localeOptions(t, [
          { label: "large", value: "large" },
          {
            label: "medium",
            value: "medium",
          },
          { label: "small", value: "small" },
        ]),
      },

      {
        type: "switch",
        field: "closable",
      },
    ]);
  },
};
