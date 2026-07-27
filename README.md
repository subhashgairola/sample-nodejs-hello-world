# sample-nodejs-hello-world

Minimal Node.js "Hello, World!" app used to generate real GitHub Actions
build + deploy run history for testing the DevOps Specialist's live
GitHub tools (`github_list_workflow_runs`, `github_get_workflow_run_logs`,
`github_list_recent_commits`).

## Run locally

```
npm start
npm test
```

## CI/CD

`.github/workflows/build-deploy.yml` runs on every push to `main` (or via
manual dispatch): a `build` job (checkout, install Node, build check, test)
followed by a `deploy` job that simulates a deployment step.
