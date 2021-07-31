const currentPageReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PAGE':
      return {
        ...state,
        current_page: action.page,
      };

    default:
      return state;
  }
};

export default currentPageReducer;
