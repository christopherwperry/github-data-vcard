fetch('https://api.github.com/users/christopherwperry')
  .then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

    response.json().then(function(data) {
      let yourName = data.name;
      let gitURL = data.html_url;
      let login = data.login;
      let email = data.email;
      let company = data.company;
      let website = data.blog;
      let bio = data.bio;
      let pic = data.avatar_url;
      let template = `
      <header id="main-head">${yourName}</header>
      <div class="main-content">
        <div class="the-basics">
          <h1>The Basics</h1>
          <div class="basics-text">
            <p id="name">Name: ${yourName}</p>
            <p id="giturl">Github URL <a href="${gitURL}">${login}</a></p>
            <p id="email">Email: christopherwperry@gmail.com</p>
            <p id="company">Company: ${company}</p>
            <p id="website">Website: <a href="${website}">linkedIn</a></p>
          </div>
        </div>
        <div class="the-story">
          <h1>The Story</h1>
          <p id="bio">${bio}</p>
        </div>
        <div class="picture">
          <img src="${pic}" id="pic">
        </div>
      </div>
      `;

      let content = document.getElementById("body-content");
      content.innerHTML = template;
      })
    });
