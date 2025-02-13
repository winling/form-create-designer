import uniqueId from "@form-create/utils/lib/unique";
import {
  localeProps,
} from "../../utils/index";

const label = "多选框";
const name = "t-checkbox";

export default {
  menu: "main",
  icon: "icon-checkbox",
  label,
  name,
  event: ["change"],
  rule() {
    return {
      type: name,
      field: uniqueId(),
      title: "多选框",
      info: "",
      effect: {
        fetch: "",
      },
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
        type: "ColorInput",
        field: "textColor",
      },
    ]);
  },
};
