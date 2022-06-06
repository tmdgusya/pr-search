import {Inject,} from "typescript-ioc";
import {ApiClient,} from "./Client/ApiClient";

export class GithubAdapter {

  @Inject
  private readonly apiClient!: ApiClient

  async getPRListOfReviewedByMe(isOpen: boolean, reviewer: string, org: string, repo: string, branch: string): Promise<PullRequest[]> {
    const {data,} = await this.apiClient
      .get<PullRequest[]>(`https://api.github.com/repos/${org}/${repo}/pulls`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        params: {
          state: `${isOpen ? "open" : "closed"}`,
          head: `${branch}`,
        },
      })

    if (data.length == 0) return []

    return data
  }
}

export type PullRequest = {
  url: string,
  assignee: Assignee,
  title: string,
  state: string,
  created_at: string,
  closed_at: string,
  merged_at: string,
}

export type Assignee = {
  login: string,
  url: string
}