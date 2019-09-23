// __tests__/user-test.js
import { getUserList } from "../actions";

describe("actions", () => {
  it("should create an action to retrieve the list of users", () => {
    // const expectedAction = {
    //   // type: "GET_USERLIST",
    //   payload: []
    // };
    const weExpect = getUserList();
    console.log("weExpect", weExpect);
    const expectedAction = [];
    expect(weExpect).toEqual(expectedAction);
  });
});
