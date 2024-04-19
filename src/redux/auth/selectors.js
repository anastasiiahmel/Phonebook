export const selectLogIn = state => state.auth.isLoggedIn;  
export const selectUserToken = state =>  state.auth.token;
export const selectUserName = state => state.auth.profile ? state.auth.profile.name : null;
export const selectIsLoading = state => state.auth.isLoading;
