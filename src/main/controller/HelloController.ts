import {GET, Path,} from "typescript-rest";
import {Inject,} from "typescript-ioc";
import {HelloService,} from "../service/HelloService";

@Path("/hello")
class HelloController {

  @Inject
  private readonly helloService!: HelloService

  @Path("/me")
  @GET
  public hello(): string {
    return this.helloService.hello();
  }

}