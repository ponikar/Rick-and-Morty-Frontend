/*
  Since we are having multiple properties we have used object
 */
const InitialState = {
  cards: [],
  alertMessage: "",
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...state, cards: action.payload };
    case "CREATE":
      return { ...state, cards: [...state.cards, action.payload] };
    case "DELETE":
      return {
        ...state,
        cards: state.cards.filter((card) => card._id !== action.payload),
      };
    case "ALERT":
      // you can edit this one later
      return { ...state, alertMessage: "Card already saved" };
    default:
      return state;
  }
};
