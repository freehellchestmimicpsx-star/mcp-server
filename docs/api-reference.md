# MCP API Reference

Base URL:
`https://integrator.app.thecoderegistry.com/api/ai/router`

All requests are JSON:
```json
{ "type": "mcp", "action": "<action>", "data": { ... } }
```

## create_account
Creates a new account. No API key required.

## create_project
Requires `data.user_id` and `data.name`.

## create-code-vault
Requires `project_id`, `user_id`, `name`, `source_type`.
Optional: `source_url`, `username`, `password`, `branch`, `description`.

## list_vaults
Requires `project_id`.

## delete-code-vault
Requires `vault_id`.

## get-code-vault-summary
Requires `vault_id`.

## get-code-vault-results
Requires `vault_id`.

## get-code-vault-reports
Requires `vault_id`.

## get_account
Returns team and user metadata.

## delete_account
Requires `data.confirm: true`.

## rotate_api_key
Issues a new key for the same team.

## Error codes
- `VALIDATION_ERROR`: missing or invalid fields
- `NOT_FOUND`: resource not found
- `FORBIDDEN`: not authorized for team
- `LIMIT_EXCEEDED`: plan/line limits exceeded
- `CONFIG_ERROR`: server misconfiguration
