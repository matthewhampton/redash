import React, { useState, useEffect, useMemo } from "react";
import { get, find, pick, map, mapValues } from "lodash";
import { RendererPropTypes } from "@/visualizations/prop-types";
import { formatColumnValue } from "@/lib/utils";


const VALID_OPTIONS = [
  "urlTemplate"
]

import "./renderer.less";

function formatRows({ rows, columns }: any) {
  return map(rows, row => mapValues(row, (value, key) => formatColumnValue(value, find(columns, { name: key }).type)));
}

export default function Renderer({ data, options, onOptionsChange }: any) {
  const [config, setConfig] = useState({ ...options });
  const dataRows = useMemo(() => formatRows(data), [data]);

  useEffect(() => {
    setConfig({ ...options });
  }, [options]);

  const onChange = (updatedOptions: any) => {
    const validOptions = pick(updatedOptions, VALID_OPTIONS);
    setConfig({ ...validOptions });
    onOptionsChange(validOptions);
  };

  const urlTemplate = get(options, "urlTemplate");
  return (
    <iframe className="iframe-viz" src={urlTemplate} >

    </iframe>
  );
}

Renderer.propTypes = RendererPropTypes;
Renderer.defaultProps = { onOptionsChange: () => {} };
