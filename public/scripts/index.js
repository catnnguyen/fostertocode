// DOM elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

const setupUI = (user) => {
    if (user) {
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    }else {
        // toggleUIelements 
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

// setup guides
const setupGuides = (data) => {

if (guideList != null) {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
        const guide = doc.data();
        const li = `
            <li>
            <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
            <div class="collapsible-body white"> ${guide.content}
            Click <a href = ${guide.link}>  here  </a> to learn more!
            </div>
            
            </li>
        `;
        html += li;
        });
        console.log("LIST", guideList)
        guideList.innerHTML = html
    } else {
        guideList.innerHTML = '<h5 class = "center"> Login to Begin </h5>'
    }

}


  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});