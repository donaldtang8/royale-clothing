import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/selectors/Directory";
import MenuItem from "../MenuItem/MenuItem";
import "../../scss/Directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
