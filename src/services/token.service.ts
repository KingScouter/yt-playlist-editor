class TokenService {
  getLocalAccessToken() {
    return this.getUser()?.accessToken;
  }

  updateLocalAccesToken(token: string) {
    let user = this.getUser();
    if (!user) {
      user = {};
    }
    user.accessToken = token;
    this.setUser(user);
  }

  getUser() {
    const user = localStorage.getItem('user');
    if (user)
      return JSON.parse(user);
    else
      return null;
  }

  setUser(user: any) {
    console.log(JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}

export default new TokenService();