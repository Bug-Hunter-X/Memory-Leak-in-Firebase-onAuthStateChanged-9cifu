const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log(user.email);
    const userId = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// Clean up the listener when it's no longer needed
// For example, in a component's cleanup function (React) or before the page unloads
// Or when the user logs out or the app closes
unsubscribe();