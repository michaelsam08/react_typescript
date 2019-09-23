import React from "react";
import { connect } from "react-redux";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface AppState {
  users: Object[];
  posts: Post[];
}

interface Props {
  posts: Post[];
}

const tableInfo = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  border: "2px solid blue",
  cursor: "pointer"
} as React.CSSProperties;

class UserPost extends React.Component<Props> {
  render() {
    const { posts } = this.props;
    if (!posts || posts.length < 1) {
      return null;
    }
    const firstPost = posts[0];
    return (
      <table id="posts">
        <tr style={tableInfo} key={firstPost.id}>
          <td style={tableInfo}>{firstPost.title}</td>
          <td style={tableInfo}>{firstPost.body}</td>
        </tr>
      </table>
    );
  }
}

const mapStateToProps = (appState: AppState) => {
  return {
    posts: appState.posts
  };
};

export default connect(mapStateToProps)(UserPost);
