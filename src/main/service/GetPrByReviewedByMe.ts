import {Inject,} from "typescript-ioc";
import {GithubAdapter, PullRequest,} from "../adapter/GithubAdapter";
import {PRListOfReviewedByMeRespone,} from "../controller/GithubPullRequestController";

export class GetPrByReviewedByMe {

  @Inject
  private readonly githubAdapter!: GithubAdapter

  async execute(isOpen: boolean, reviewer: string, org: string, repo: string, branch: string): Promise<PRListOfReviewedByMeRespone[]> {
    let result: PullRequest[] | PRListOfReviewedByMeRespone[] = await this.githubAdapter.getPRListOfReviewedByMe(isOpen, reviewer, org, repo, branch)

    result = result.map((pr) => {
      return new PRListOfReviewedByMeRespone(
        pr.url,
        pr.assignee,
        pr.title,
        pr.state,
        pr.created_at,
        pr.closed_at,
        pr.merged_at
      )
    })

    return result
  }

}