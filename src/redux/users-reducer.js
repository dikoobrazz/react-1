const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      username: "John",
      status: "I am a boss",
      location: { country: "USA", city: "NY" },
      followed: false,
    },
    {
      id: 2,
      username: "Mike",
      status: "I am a boss too",
      location: { country: "Russia", city: "Moscow" },
      followed: true,
    },
    {
      id: 3,
      username: "Dik",
      status: "hello every one",
      location: { country: "Belarus", city: "Minsk" },
      followed: true,
    },
    {
      id: 4,
      username: "Jessica",
      status: "Look at me, I am MADAM!",
      location: { country: "Russia", city: "S.Peterburg" },
      followed: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const toggleFollowActionCreator = (userId) => ({
  type: FOLLOW_TOGGLE,
  userId,
});

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
