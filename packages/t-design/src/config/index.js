import radio from "./rule/radio";
import checkbox from "./rule/checkbox";
import input from "./rule/input";
import textarea from "./rule/textarea";
import password from "./rule/password";
import number from "./rule/number";
import select from "./rule/select";
import _switch from "./rule/switch";
import slider from "./rule/slider";
import time from "./rule/time";
import timeRange from "./rule/timeRange";
import date from "./rule/date";
import dateRange from "./rule/dateRange";
// import rate from './rule/rate';
import color from "./rule/color";
import row from "./rule/row";
import singleCheckbox from "./rule/tCheckbox";
import col from "./rule/col";
import divider from "./rule/divider";
import cascader from "./rule/cascader";
import upload from "./rule/upload";
// import transfer from './rule/transfer';
// import tree from './rule/tree';
import alert from "./rule/alert";
import text from "./rule/text";
import space from "./rule/space";
import button from "./rule/button";
import editor from "./rule/editor";
import group from "./rule/group";
import subForm from "./rule/subForm";
import card from "./rule/card";
// import treeSelect from './rule/treeSelect';
import tag from "./rule/tag";
import html from "./rule/html";
import table from "./rule/table";
import tableForm from "./rule/tableForm";
import tableFormColumn from "./rule/tableFormColumn";
// import image from './rule/image';
import tNumberInput from "./rule/tNumberInput";

const ruleList = [
  input,
  textarea,
  password,
  radio,
  checkbox,
  select,
  _switch,
  time,
  timeRange,
  slider,
  date,
  dateRange,
  color,
  cascader,
  upload,
  editor,
  group,
  subForm,
  tableForm,
  tableFormColumn,
  alert,
  button,
  text,
  html,
  divider,
  tag,
  row,
  table,
  space,
  card,
  col,
  singleCheckbox,
  tNumberInput,
];

export default ruleList;

export function defaultDrag(rule) {
  return {
    icon: rule.field ? "icon-input" : "icon-cell",
    label: rule.field || rule.type,
    name: "_",
    mask: true,
    handleBtn: ["delete"],
    rule() {
      return rule;
    },
    props() {
      return [];
    },
  };
}
