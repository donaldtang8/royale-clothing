import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./WithSpinnerStyles";

// this function takes in a component (WrappedComponent) that we wrap with the spinner loading feature
// and the wrappedComponent gets passed into the newcomponent that wraps around it
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

// it can also be written like this
// const WithSpinner = WrappedComponent => {
//   const spinner = ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...otherProps} />
//     );
//   };
//   return spinner;
// };

export default WithSpinner;
