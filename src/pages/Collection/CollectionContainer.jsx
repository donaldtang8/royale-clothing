import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/selectors/Shop";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

// here we will pass the isLoading props from the isLoading selector into the WithSpinner component along with the Collection component
// we are essentially passing two things into WithSpinner: the isLoading props as well as the Collection component so that if the collection is still loading,
// we render a spinner, else, we render the component that's passed in
// ******************* The only purpose of this "container" file is to pass the props into WithSpinner from the redux state *******************
const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
