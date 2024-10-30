class Github {
  constructor(){
    this.client_id = 'Ov23licYhGe8tABov67j';
    this.client_secret = '8c21b394945fea8d3db9c9475f08beb98b2096f2';
  }

  //get user method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }

  }
}