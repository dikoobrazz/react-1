const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT= "SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   name: "John",
    //   photos: {
    //     small: "https://img.icons8.com/bubbles/50/000000/user.png",
    //     large: "https://img.icons8.com/bubbles/100/000000/user.png",
    //   },
    //   status: "I am a boss",
    //   location: { country: "USA", city: "NY" },
    //   followed: false,
    // },
    // {
    //   id: 2,
    //   name: "Mike",
    //   photos: {
    //     small: "https://img.icons8.com/bubbles/50/000000/user-male.png",
    //     large: "https://img.icons8.com/bubbles/100/000000/user-male.png",
    //   },
    //   status: "I am a boss too",
    //   location: { country: "Russia", city: "Moscow" },
    //   followed: true,
    // },
    // {
    //   id: 3,
    //   name: "Dik",
    //   photos: {
    //     small: "https://img.icons8.com/bubbles/50/000000/lock-male-user.png",
    //     large: "https://img.icons8.com/bubbles/100/000000/lock-male-user.png",
    //   },
    //   status: "hello every one",
    //   location: { country: "Belarus", city: "Minsk" },
    //   followed: true,
    // },
    // {
    //   id: 4,
    //   name: "Jessica",
    //   photos: {
    //     small: "https://img.icons8.com/bubbles/50/000000/add-female-user.png",
    //     large: "https://img.icons8.com/bubbles/100/000000/add-female-user.png",
    //   },
    //   status: "Look at me, I am MADAM!",
    //   location: { country: "Russia", city: "S.Peterburg" },
    //   followed: false,
    // },
  ],
  pageSize: 5,
  totalUsersCount: 50,
  currentPage: 4,
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
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
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

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setUsersTotalCountAC = (totalUsersCount) =>({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount

})

export default usersReducer;
