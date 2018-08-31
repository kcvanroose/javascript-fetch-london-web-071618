const app = "I don't do much.";

const token = '5b27c0d09e4d5a042891a3c18dddd6350b057a2b'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
