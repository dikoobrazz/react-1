const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      name: "John",
      photos: {
        small: "https://img.icons8.com/bubbles/50/000000/user.png",
        large: "https://img.icons8.com/bubbles/100/000000/user.png",
      },
      status: "I am a boss",
      location: { country: "USA", city: "NY" },
      followed: false,
    },
    {
      id: 2,
      name: "Mike",
      photos: {
        small: "https://img.icons8.com/bubbles/50/000000/user-male.png",
        large: "https://img.icons8.com/bubbles/100/000000/user-male.png",
      },
      status: "I am a boss too",
      location: { country: "Russia", city: "Moscow" },
      followed: true,
    },
    {
      id: 3,
      name: "Dik",
      photos: {
        small: "https://img.icons8.com/bubbles/50/000000/lock-male-user.png",
        large: "https://img.icons8.com/bubbles/100/000000/lock-male-user.png",
      },
      status: "hello every one",
      location: { country: "Belarus", city: "Minsk" },
      followed: true,
    },
    {
      id: 4,
      name: "Jessica",
      photos: {
        small: "https://img.icons8.com/bubbles/50/000000/add-female-user.png",
        large: "https://img.icons8.com/bubbles/100/000000/add-female-user.png",
      },
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
