import { localeOptions, localeProps } from "../../utils";

const label = "卡片";
const name = "tCard";

export default {
  menu: "layout",
  icon: "icon-card",
  label,
  name,
  drag: true,
  inside: false,
  mask: false,
  rule({ t }) {
    return {
      type: name,
      props: {
        header: t("com.elCard.props.header"),
      },
      style: {
        width: "100%",
      },
      children: [],
    };
  },
  props(_, { t }) {
    return localeProps(t, name + ".props", [
      {
        type: "input",
        field: "title",
      },

      {
        type: "switch",
        field: "shadow",
        value: "false",
      },
    ]);
  },
};
