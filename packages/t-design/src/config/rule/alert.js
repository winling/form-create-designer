import { localeProps } from "../../utils";

const label = "提示";
const name = "tAlert";

export default {
  menu: "aide",
  icon: "icon-alert",
  label,
  name,
  event: ["close"],
  rule({ t }) {
    return {
      type: name,
      props: {
        title: "提示",
        description: "这是一条成功的消息提示",
        theme: "success",
      },
      children: [],
    };
  },
  props(_, { t }) {
    return localeProps(t, name + ".props", [
      { type: "input", field: "message" },
      {
        type: "select",
        field: "theme",
        options: [
          { label: "success", value: "success" },
          { label: "warning", value: "warning" },
          {
            label: "info",
            value: "info",
          },
          { label: "error", value: "error" },
        ],
      },
      {
        type: "switch",
        field: "close",
        value: true,
      },
      {
        type: "input",
        field: "title",
      },
      { type: "switch", field: "showIcon" },
    ]);
  },
};
