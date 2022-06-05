import {Inject,} from "typescript-ioc";
import {GetPrByReviewedByMe,} from "../service/GetPrByReviewedByMe";
import {GET, Param, Path,} from "typescript-rest";
import {Assignee,} from "../adapter/GithubAdapter";

@Path("/pr")
class GithubPullRequestController {

  @Inject
  private readonly getPrByReviewedByMe!: GetPrByReviewedByMe

  @Path("/by-me")
  @GET
  async getPRReviewedByMe(
    @Param("isOpen") isOpen: boolean,
    @Param("reviewer") reviewer: string,
    @Param("org") org: string,
    @Param("repo") repo: string,
    @Param("branches") branches: string,
  ): Promise<PRListOfReviewedByMeRespone[]> {
    return await this.getPrByReviewedByMe.execute(
      isOpen,
      reviewer,
      org,
      repo,
      branches
    )
  }

}

export class PRListOfReviewedByMeRespone {

  url: string
  assignee: string
  title: string
  state: string
  created_at: string
  closed_at: string
  merged_at: string


  constructor(url: string, assignee: Assignee, title: string, state: string, created_at: string, closed_at: string, merged_at: string) {
    this.url = url;
    this.assignee = assignee.login;
    this.title = title;
    this.state = state;
    this.created_at = created_at;
    this.closed_at = closed_at;
    this.merged_at = merged_at;
  }
}