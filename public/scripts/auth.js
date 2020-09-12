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
  if (signupForm != null ) {
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
}

// COG Question 1 answer 
const createForm = document.querySelector('#create-form');
if (createForm != null) {

  createForm.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('cogSummary').add({
      summaryOne: createForm['summaryOne'].value
    }).then(() => {
      console.log('db function done');
    }).catch(err => {
      console.log(err.message);
    })

  });
}

// COG Question 2 answer 
const createForm2 = document.querySelector('#Cog-create-form2');
if (createForm2 != null) {

  createForm2.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('cogSummary').add({
      summaryTwo: createForm2['summaryTwo'].value
    }).then(() => {
      console.log('db function done');
    }).catch(err => {
      console.log(err.message);
    })

  });
}

// COG Learner Quiz 1 
const createFormLearnerQuiz = document.querySelector('#Cog-learner-quiz');
if (createFormLearnerQuiz!= null) {

  createFormLearnerQuiz.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('mindsets').add({
      learnResult1: createFormLearnerQuiz['learner1'].value
    }).then(() => {
      console.log('db function done');
    }).catch(err => {
      console.log(err.message);
    })

  });
}

// COG Learner Quiz 2
const createFormLearnerQuiz2 = document.querySelector('#Cog-learner-quiz2');
if (createFormLearnerQuiz2!= null) {

  createFormLearnerQuiz2.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('mindsets').add({
      learnResult2: createFormLearnerQuiz2['learner2'].value
    }).then(() => {
      console.log('db function done');
    }).catch(err => {
      console.log(err.message);
    })

  });
}

// MOT Question 1 answer 
const motiForm = document.querySelector('#Mot-create-form1');
if (motiForm != null) {

  motiForm.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('motSummary').add({
      sum1: motiForm['sum1'].value
    }).then(() => {
      console.log('db function done');
    }).catch(err => {
      console.log(err.message);
    })

  });
}

// MOT Question 2 answer 
const motiForm2 = document.querySelector('#Mot-create-form2');
if (motiForm2 != null) {

  motiForm2.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('motSummary').add({
      sum2: motiForm2['sum2'].value
    }).then(() => {
      console.log('db function done');
    }).catch(err => {
      console.log(err.message);
    })

  });
}


// MOT Survey1 
const surveyForm1 = document.querySelector('#survey1');
if (surveyForm1 != null) {

  surveyForm1.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('surveyAnswers').add({
      interest: surveyForm1['interest'].value,
      enjoy: surveyForm1['enjoy'].value,
      likelihood: surveyForm1['likelihood'].value
    }).then(() => {
      console.log('db function done');
    }).catch(err => {
      console.log(err.message);
    })

  });
}

// MOT Survey2
const surveyForm2 = document.querySelector('#survey2');
if (surveyForm2 != null) {

  surveyForm2.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('surveyAnswers2').add({
      interest2: surveyForm2['interest2'].value,
      enjoy2: surveyForm2['enjoy2'].value,
      likelihood2: surveyForm2['likelihood2'].value
    }).then(() => {
      console.log('db function done');
    }).catch(err => {
      console.log(err.message);
    })

  });
}


  // logout 
  const logout = document.querySelector('#logout');
  if (logout != null) {
    logout.addEventListener('click', (e) => {
        e.preventDefault(); 
        auth.signOut();
        
    });
}
  
  // login
  const loginForm = document.querySelector('#login-form'); 
  if (loginForm != null ){
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
}