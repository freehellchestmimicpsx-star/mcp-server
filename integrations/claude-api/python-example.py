# Example of using Code Registry MCP via Claude API
import anthropic

client = anthropic.Anthropic(api_key="your-key")

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=4096,
    tools=[{
        "type": "mcp",
        "server_url": "https://integrator.app.thecoderegistry.com/api/ai/router"
    }],
    messages=[{
        "role": "user",
        "content": "Create a Code Registry account for test@example.com and analyze the repo at github.com/example/app"
    }]
)

print(response)
