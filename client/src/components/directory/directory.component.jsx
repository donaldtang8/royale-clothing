import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  DirectoryMenuContainer,
  JumbotronContainer,
  HeadingContainer,
  DescriptionContainer,
  CategoryContainer
} from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    <JumbotronContainer className="jumbotron">
      <HeadingContainer className="display-4">FW19 Collection</HeadingContainer>
      <DescriptionContainer className="display-2">
        Just Released
      </DescriptionContainer>
      <Link to="/shop">
        <CustomButton>Shop Now</CustomButton>
      </Link>
    </JumbotronContainer>
    <CategoryContainer className="row">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </CategoryContainer>
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
