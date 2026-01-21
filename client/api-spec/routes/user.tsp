import "@typespec/http";
import "@typespec/openapi";
import "@typespec/openapi3";

import "../models/user.tsp";

using Http;
using OpenAPI;

@tag("users")
@route("/users")
namespace RequestFormAppService.UserRoutes {
  interface SignIn {
    @route("/sign-in")
    @operationId("post-user-sign-in")
    @summary("User Sign In")
    @post
    post(
      @body body: UserSignInInput,
    ): SuccessResponseWithHeader<UserSignInResponse>
      | BadRequestErrorResponse<UserSignInResponse>
      | InternalServerErrorResponse;
  }
}
