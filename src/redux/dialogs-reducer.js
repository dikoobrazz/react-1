const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 3,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case CHANGE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.dialogMessage;
      return state;
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
