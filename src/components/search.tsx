import React from "react";
// import { connect } from "react-redux";
//import { Input } from "semantic-ui-react";

interface Props {
  handleSearchInput: (input: string) => void;
}

export default class Search extends React.Component<Props> {
  render() {
    return (
      <>
        <br />
        <input
          name="searchInput"
          onChange={e =>
            this.props.handleSearchInput(e.currentTarget.value.toLowerCase())
          }
          placeholder="Search by name...."
        />
        <br />
        <br />
      </>
    );
  }
}

// const mapStateToProps = (ownProps: Props) => {
//   return {
//     handleSearchInput: ownProps.handleSearchInput
//   };
// };

// export default connect(mapStateToProps)(Search);
