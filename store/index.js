export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },
  loggedInUser(state) {
    return state.auth.user;
  },
  isUnConfirmed(state) {
    if (state.auth.loggedIn) {
      return state.auth.user.status === "UNCONFIRMED";
    }
    return false;
  },
};
export const mutations = {
  UPDATE_LOGGED_USER(state, user) {
    if (user.id === state.auth.user.id) {
      state.auth.user.name = user.name;
      state.auth.user.username = user.username;
      state.auth.user.email = user.email;
    }
  },
};
export const strict = process.env.NODE_ENV !== "production";
