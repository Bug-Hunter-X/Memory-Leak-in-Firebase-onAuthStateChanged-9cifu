const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    console.log(user.email);
    const userId = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// unsubscribe(); // this line was missing, causing memory leak