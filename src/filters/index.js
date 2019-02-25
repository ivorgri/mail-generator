import Vue from "vue";
import { capitalize } from "lodash";

Vue.filter("capitalize", (value) => {
  if (!value) return "";
  const newValue = value.toString();
  return capitalize(newValue);
});
