# Code Squad 리뷰 파악용 Express Server

## Setup

```shell
yarn install

npm run start # 잘 켜지는지 확인

```

## 자신에게 할당된 리뷰 확인

### 파라미터 설명
- **reviewer** : 리뷰어 이름
- **org** : organization
- **repo** : repository
- **branch** : 자신이 맡는 브랜치 이름 (후에 복수개 업로드 가능하게 SPEC 변경 예정)

```shell
curl localhost:3000/pr/by-me?isOpen=false&reviewer=tmdgusya&org=codesquad-members-2022&repo=airbnb&branches=team-23
```

```shell
[
    {
        "url": "https://api.github.com/repos/codesquad-members-2022/airbnb/pulls/222",
        "assignee": "ttasjwi",
        "title": "[Team23 땃쥐] airbnb 4차 PR",
        "state": "closed",
        "created_at": "2022-06-03T12:08:25Z",
        "closed_at": "2022-06-04T06:41:40Z",
        "merged_at": "2022-06-04T06:41:40Z"
    },
    {
        "url": "https://api.github.com/repos/codesquad-members-2022/airbnb/pulls/216",
        "assignee": "damilog",
        "title": "[FE][Team23][Millie & Oliver] 네 번째 PR",
        "state": "closed",
        "created_at": "2022-06-03T06:58:38Z",
        "closed_at": "2022-06-04T14:56:34Z",
        "merged_at": "2022-06-04T14:56:33Z"
    },
]
```

## Contribution
- **Contribution 해주실때 반드시 Lint** 를 사용해주세요.
- ISSUE 로 만들어야 할 기능을 먼저 정의합니다.
- ISSUE 가 FEATURE 로 올라오고 assign 되었다면 자신의 repository 로 fork 한 후 PR 을 보냅니다.
  - Commit 앞에 Prefix 로 [#ISSUE_NUMBER] 를 붙여주세요.
  - 기능 명세에 대한 TEST 와 README 문서를 작성해주세요.
  - TEST 가 전부 통과하는지 확인해주세요
