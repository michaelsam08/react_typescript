// __tests__/userPost.test.js
import React from "react";
import { shallow } from "enzyme";
import { Table } from "semantic-ui-react";

const posts = [
  {
    userId: 1,
    id: 1,
    title: "Happy Birthday",
    body: "people with birthdays just keep getting older"
  },
  {
    userId: 1,
    id: 2,
    title: "Nice Weather",
    body: "its really hot today"
  },
  {
    userId: 1,
    id: 3,
    title: "Horrible Traffic",
    body: "There are too many cars in Austin"
  }
];

describe("User Post Component", () => {
  it("Should return the counter of Header Cells", () => {
    const testHTML = shallow(<UserPostTest />);
    const headerRow = testHTML.find(".userPostTestHeaderRow");
    const headerCellCount = headerRow.children().length;
    expect(headerCellCount).toEqual(2);
  });
  it("number of rows should equal number of posts per user", () => {
    const component = shallow(<UserPostTest />);
    const tableBody = component.find(".tableInfo");
    const rowCount = tableBody.children().length;
    expect(rowCount).toEqual(posts.length);
  });
});

export default class UserPostTest extends React.Component {
  render() {
    if (!posts || posts.length < 1) {
      return null;
    }
    // const firstPost = posts[0];
    const rows = posts.map((post, idx) => {
      return (
        <Table.Row className={`tableInfoRow-${idx}`} key={post.id}>
          <Table.Cell>{post.title}</Table.Cell>
          <Table.Cell>{post.body}</Table.Cell>
        </Table.Row>
      );
    });
    return (
      <Table className="userPostTestComponent" celled>
        <Table.Header>
          <Table.Row className="userPostTestHeaderRow">
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Body</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="tableInfo" id="posts">
          {rows}
        </Table.Body>
      </Table>
    );
  }
}
