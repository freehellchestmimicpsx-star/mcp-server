// Example of using Code Registry MCP via Claude API
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

async function main() {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4096,
    tools: [
      {
        type: 'mcp',
        server_url: 'https://integrator.app.thecoderegistry.com/api/ai/router'
      }
    ],
    messages: [
      {
        role: 'user',
        content: 'Create a Code Registry account for test@example.com and analyze the repo at github.com/example/app'
      }
    ]
  })

  console.log(response)
}

main().catch(console.error)
