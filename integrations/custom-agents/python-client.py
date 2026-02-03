import json
import urllib.request

BASE_URL = "https://integrator.app.thecoderegistry.com/api/ai/router"
API_KEY = "your-api-key"

payload = {
    "type": "mcp",
    "action": "list_projects",
    "data": {}
}

req = urllib.request.Request(
    BASE_URL,
    data=json.dumps(payload).encode("utf-8"),
    headers={
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
    },
    method="POST",
)

with urllib.request.urlopen(req) as resp:
    print(resp.read().decode("utf-8"))
