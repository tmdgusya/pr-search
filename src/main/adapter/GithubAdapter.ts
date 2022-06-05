import axios from "axios";

export class GithubAdapter {
  async getPRListOfReviewedByMe(isOpen: boolean, reviewer: string, org: string, repo: string, branch: string): Promise<PullRequest[]> {
    const {data,} = await axios
      .get<PullRequest[]>(`https://api.github.com/repos/${org}/${repo}/pulls`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        params: {
          state: `${isOpen ? "open" : "closed"}`,
          base: `${branch}`,
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