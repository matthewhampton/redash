import { merge } from "lodash";

import Renderer from "./Renderer";
import Editor from "./Editor";

const DEFAULT_OPTIONS = {
  urlTemplate: null
};

export default {
  type: "IFRAME",
  name: "IFrame",
  getOptions: (options: any) => merge({}, DEFAULT_OPTIONS, options),
  Renderer,
  Editor,

  defaultRows: 6,
  defaultColumns: 6,
  minColumns: 2,
};
