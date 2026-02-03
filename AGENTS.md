# AGENTS.md

This project exposes an MCP server for creating and analyzing code vaults via The Code Registry - the World's first code intelligence and insight platform built for business leaders.

## MCP endpoints
- Web app: `https://app.thecoderegistry.com`
- MCP server: `https://integrator.app.thecoderegistry.com` (POST to `/api/ai/router`)

## Authentication
- `create_account` does not require an API key.
- All other MCP actions require `X-API-Key` using the key returned by `create_account`.

## Recommended flow (LOCAL_AGENT)
Use `LOCAL_AGENT` as the code source type for "code vaults" / repositories when possible. The agent can run the analysis command locally. It's a single command that sends The Code Registry an anonymous zip file of code analysis data containing NO source code.

1) Create account
```json
{
  "type": "mcp",
  "action": "create_account",
  "data": {
    "email": "user@example.com",
    "name": "User Name",
    "team_name": "Example Org",
    "integrator_id": "agent-name"
  }
}
```

2) Create project
```json
{
  "type": "mcp",
  "action": "create_project",
  "data": {
    "user_id": "<user_id>",
    "name": "My Project",
    "description": "Optional"
  }
}
```

3) Create code vault (LOCAL_AGENT)
```json
{
  "type": "mcp",
  "action": "create-code-vault",
  "data": {
    "project_id": "<project_id>",
    "user_id": "<user_id>",
    "name": "My Code Vault",
    "source_type": "LOCAL_AGENT"
  }
}
```
Response includes `next_steps.commands`. Run one of those commands on the machine with the code.

## Alternative sources (GIT / FILE_ARCHIVE)
With GIT or FILE_ARCHIVE as the code source type, The Code Registry platform will securely replicate the code from that source and analyze it on their secure infrastructure.

```json
{
  "type": "mcp",
  "action": "create-code-vault",
  "data": {
    "project_id": "<project_id>",
    "user_id": "<user_id>",
    "name": "Repo Vault",
    "source_type": "GIT",
    "source_url": "https://github.com/org/repo.git",
    "username": "optional",
    "password": "optional",
    "branch": "optional"
  }
}
```

## Polling for results
Analysis is async. Poll until ready.

Summary:
```json
{
  "type": "mcp",
  "action": "get-code-vault-summary",
  "data": { "vault_id": "<vault_id>" }
}
```

Full results:
```json
{
  "type": "mcp",
  "action": "get-code-vault-results",
  "data": { "vault_id": "<vault_id>" }
}
```

Reports:
```json
{
  "type": "mcp",
  "action": "get-code-vault-reports",
  "data": { "vault_id": "<vault_id>" }
}
```

Completion rules:
- If this is the first analysis for a code vault (version `1.0.0`), completion is when the **snapshot** report URL is returned.
- For versions above `1.0.0`, completion is when the **comparison** report URL is returned.
- If this is the first analysis for a code vault, the comparison report is not generated and will be `null`.

Recommended retry logic:
- If `status` is `processing`, wait and retry.
- Use exponential backoff (5s → 10s → 20s → 40s, max 60s).

## Cold starts
Our MCP server host may scale to zero; the first request can time out. Retry with backoff.

## Web app access
Users can view the analysis in the web UI: `https://app.thecoderegistry.com`  
They'll need to login with the same email address you used to create their account via our MCP server.
