import jsonPlaceholder from "../apis/jsonPlaceholder";

export const getUserList = () => (dispatch: any) => {
  jsonPlaceholder.get(`/users/`).then(response =>
    dispatch({
      type: "GET_USERLIST",
      payload: response.data
    })
  );
};

export const getUserPost = (userId: number) => (dispatch: any) => {
  jsonPlaceholder.get(`/posts?userId=${userId}`).then(response =>
    dispatch({
      type: "GET_USERPOST",
      payload: response.data
    })
  );
};
