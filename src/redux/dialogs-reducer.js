const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

let initialState = {
  messages: [
    { id: 1, message: "Hello!" },
    { id: 2, message: "How are you?" },
  ],
  newMessageText: "",
  dialogs: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Sacha" },
    { id: 4, name: "Dima" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newText = state.newMessageText;

      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 3, message: newText }],
      };
    }
    case CHANGE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.dialogMessage,
      };
    }
    default:
      return state;
  }
};

export const sendNewMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const changeNewMessageTextActionCreator = (text) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  dialogMessage: text,
});

export default dialogsReducer;
