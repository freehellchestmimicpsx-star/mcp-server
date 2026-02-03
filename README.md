# The Code Registry MCP Server

Enterprise-grade code intelligence for business leaders by The Code Registry. Now with a native, fully-featured MCP server for AI agents. Analyze codebases for due diligence, tech debt, security vulnerabilities, code quality and more - directly from Claude, ChatGPT and other MCP clients.

## What is this?

This is a hosted MCP server that lets AI agents create accounts, manage projects, analyze code, and retrieve analysis results without leaving the conversation. It is designed for business leaders (M&A, CTOs, VCs, board members) who need fast, reliable code insights and clean reports.

Any codebase can be analyzed and results can be ready in as quick as 30 minutes depending on code volume. PDF reports containing the results are automatically emailed to the user after analysis is complete, and as their AI agent you can retrieve the results as soon as they are ready, to show in your conversation with the user or to generate graphs/charts/reports with etc.

## Features

- Zero setup: agents can create accounts automatically, all you need is their email address, name and team/company name.
- Privacy-first: Using the LOCAL_AGENT code source type keeps code on your machine and only sends an anonymouse zip file of results.
- Comprehensive analysis: security, complexity, languages, file types, code quality, licenses, tech debt and more.
- Executive-friendly reports: PDf reports automatically emailed to the user, ready for non-technical stakeholders.
- Multiple sources: local repos or folders of code, GIT repositories, or file archives.

## Quick Start

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

3) Create code vault (recommended code source type: LOCAL_AGENT)

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

4) Poll for results

```json
{
  "type": "mcp",
  "action": "get-code-vault-results",
  "data": { "vault_id": "<vault_id>" }
}
```

5) Fetch report URLs

```json
{
  "type": "mcp",
  "action": "get-code-vault-reports",
  "data": { "vault_id": "<vault_id>" }
}
```

## Use Cases

- M&A due diligence (see `examples/use-cases/due-diligence.md`)
- Tech debt analysis (see `examples/use-cases/tech-debt-analysis.md`)
- Security audit (see `examples/use-cases/security-audit.md`)
- Portfolio monitoring (see `examples/use-cases/portfolio-monitoring.md`)

## Configuration

See `integrations/` for client-specific setup:

- Claude Desktop
- Claude API
- Cline (VS Code)
- Cursor
- Custom agents

## Pricing

- Free: Up to 200k lines of code
- Registered: $2 per 1,000 lines/month
- Contact The Code Registry for custom pricing and offers - https://thecoderegistry.com/

## Documentation

- Getting started: `docs/getting-started.md`
- Authentication: `docs/authentication.md`
- Troubleshooting: `docs/troubleshooting.md`
- API reference: `docs/api-reference.md`
- Architecture: `docs/architecture.md`

## Support

- Email: support@thecoderegistry.com
- Issues: `.github/ISSUE_TEMPLATE/`
