import { merge } from "lodash";
import React from "react";
import { Section, Input } from "@/components/visualizations/editor";
import { EditorPropTypes } from "@/visualizations/prop-types";

export default function Editor({ options, onOptionsChange }: any) {

  return (
    <React.Fragment>
      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Section>
        <Input
          layout="horizontal"
          label="URL template"
          data-test="IFrame.General.URLTemplate"
          defaultValue={options.urlTemplate || ""}
          placeholder={null}
          onChange={(e: any) => onOptionsChange({ urlTemplate: e.target.value })}
        />
      </Section>
    </React.Fragment>
  );
}

Editor.propTypes = EditorPropTypes;
