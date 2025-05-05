import { auth ,signInWithPopup,GoogleAuthProvider} from "./firebase.js";
const provider = new GoogleAuthProvider();
document.getElementById('googleLogin').addEventListener('click', async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token)
    const user = result.user;

    alert(`Welcome ${user.displayName}!`);
    console.log("User Info:", user);

    // Optional: Redirect after successful login
    // window.location.href = "/dashboard.html";
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    alert(`Google Sign-In failed: ${error.message}`);
  }
});



export default user;

