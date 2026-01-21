import "@typespec/http";
import "@typespec/openapi";

using Http;

// 認証スキーマの定義
model BearerAuth {
  type: "apiKey"; // APIキー認証を使う（header指定可）
  name: "Authorization"; // ヘッダー名
  in: "header"; // ヘッダーに入れる
}

model SuccessResponse<T> {
  @statusCode status: 200;
  @bodyRoot body: T
}

model SuccessResponseWithHeader<T> {
  @statusCode status: 200;
  @bodyRoot body: T;
  @header("Set-Cookie") token: string;
}

model BadRequestErrorResponse<T> {
  @statusCode status: 400;
  @bodyRoot body: T
}

model ForBiddenErrorResponse {
  @statusCode status: 403;
}

model NotFoundErrorResponse {
  @statusCode status: 404;
}

model InternalServerErrorResponse {
  @statusCode status: 500;
}
