// src/pages/SignInPage.jsx
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return <SignIn path="/sign-in" routing="path" afterSignInUrl="/dashboard" />;
};

export default SignInPage;
