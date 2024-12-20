# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: memory leaks due to a missing unsubscribe function. 
The `authBug.js` file shows the incorrect implementation where the listener is attached but never detached. 
The solution is provided in `authBugSolution.js` which shows how to properly unsubscribe from the listener to prevent memory leaks.