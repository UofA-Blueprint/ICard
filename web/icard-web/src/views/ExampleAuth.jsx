import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Image, StyleSheet } from "react-native";

const ExampleAuth = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  console.log(user);
  console.log(profile);

  return (
    <div>
      <h2>React Google Login</h2>
      {profile?.name ? (
        <div>
          <Image
            source={{ uri: profile.picture }}
            alt="User Picture"
            style={styles.image}
          />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>
          Sign in with Google 🚀{" "}
        </button>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "24px",
    height: "24px",
    borderWidth: 1,
  },
});

export default ExampleAuth;
