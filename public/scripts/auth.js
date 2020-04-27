// // get data 
// db.collection('guides').get().then(snapshot => {
//   setupGuides(snapshot.docs)
// })

// listen for auth status changes 
auth.onAuthStateChanged( user => {
 
    if (user) {
        console.log("user logged in:", user)
        db.collection('guides').onSnapshot(snapshot => {
          setupGuides(snapshot.docs);
          setupUI(user);
        });
      }else {
        console.log("user logged out")
        setupGuides([])
        setupUI(user);
    }
  })
  
  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
  
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user);
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });
  });
  

// create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  console.log("NEBIL")
  e.preventDefault();

  // db.collection('cogSummary').add({
  //   summaryOne: createForm['summaryOne'].value
  }).then(() => {

   
  }).catch(err => {
    console.log(err.message);
  });

  // logout 
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
      console.log("NEBIL")
      e.preventDefault(); 
      auth.signOut();
      
  });
  
  // login
  const loginForm = document.querySelector('#login-form'); 
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
  
    // get user info 
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    auth.signInWithEmailAndPassword(email, password).then(cred => {
      //  console.log(cred.user)
       // close the login modal and reset the form 
       const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset(); 
    })
  
  })