import "@typespec/http";
import "@typespec/openapi";
import "@typespec/openapi3";

using Http;

@service
@doc("request form app APIs")
@OpenAPI.info(#{
  version: "1.0",
  title: "Request Form App Service",
})
@server("https://localhost:4000")
namespace RequestFormAppService {};
