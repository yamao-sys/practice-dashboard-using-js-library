import "@typespec/http";
import "@typespec/openapi";
import "@typespec/openapi3";

@summary("User SignIn Input")
model UserSignInInput {
  email: string;
  password: string;
}

@summary("User SignIn Response")
model UserSignInResponse {
  token: string;
  error: string;
}
