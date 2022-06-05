import {GET, Path,} from "typescript-rest";

@Path("/hello")
class HelloService {

  @Path("/me")
  @GET
  public hello(): string {
    return "Hello";
  }

}