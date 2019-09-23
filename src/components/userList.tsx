import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { getUserPost, getUserList } from "../actions";
import Search from "./search";

const pageCont = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "5px solid gray"
} as React.CSSProperties;
const tableLabels = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  border: "2px solid green",
  minWidth: "500"
} as React.CSSProperties;
const tableInfo = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  border: "1px solid blue",
  cursor: "pointer"
} as React.CSSProperties;

interface User {
  id: number;
  email: string;
  name: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface AppState {
  users: User[];
  posts: Post[];
}

interface DispatchProps {
  getUsers: () => void;
  getPost: (userId: number) => void;
}

interface OwnProps {
  users: User[];
}

type Props = DispatchProps & OwnProps;

interface State {
  searchInput: string;
}

class UserList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  componentDidMount = () => {
    this.props.getUsers();
  };

  private renderTableData = () => {
    const { users, getPost } = this.props;
    const { searchInput } = this.state;
    const userArray =
      searchInput.length > 0
        ? users.filter(user => user.name.toLowerCase().includes(searchInput))
        : users;
    return userArray.map(user => (
      <a
        id={user.id.toString()}
        onClick={e => getPost(Number(e.currentTarget.id))}
      >
        <tr style={tableInfo}>
          <td style={tableInfo}>{user.name}</td>
          <td style={tableInfo}>{user.email}</td>
          <td style={tableInfo}>{user.address.city}</td>
          <td style={tableInfo}>{user.company.name}</td>
        </tr>
      </a>
    ));
  };
  public render() {
    return (
      <div>
        <div style={pageCont}>
          <div>
            <Search
              handleSearchInput={(input: string) =>
                this.setState({ searchInput: input })
              }
            />
          </div>
          <table id="users">
            <thead>
              <tr style={tableLabels}>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (appState: AppState): OwnProps => {
  return {
    users: appState.users
  };
};

const mapDispatchToProps = {
  getUsers: getUserList,
  getPost: getUserPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
