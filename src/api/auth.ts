import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut as signOutUser,
} from "firebase/auth";

import * as utils from "@/utils";

export const auth = getAuth(utils.fb.app);
const actionSetting = {
  url: `${process.env.VUE_APP_LOCAL_URL}/verify`,
  handleCodeInApp: true,
};

export const signInLinkToEmail = (email: string) => {
  return sendSignInLinkToEmail(auth, email, actionSetting);
};

export const isCheckSignInWithEmailLink = (href: string) => {
  return isSignInWithEmailLink(auth, href);
};

export const signIn = (email: string, href: string) => {
  return signInWithEmailLink(auth, email, href);
};

export const signOut = () => {
  return signOutUser(auth);
};
