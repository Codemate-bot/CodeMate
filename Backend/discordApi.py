import requests
import json

# CodeSandbox API token
API_TOKEN = 'api_token'

# Create a new sandbox
def create_sandbox():
    url = "https://codesandbox.io/api/v1/sandboxes/define"
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_TOKEN}"
    }

    payload = {
        "parameters": {
            "files": {
                "index.js": {
                    "content": "console.log('Hello CodeSandbox!')"
                },
                "package.json": {
                    "content": json.dumps({
                        "name": "my-sandbox",
                        "version": "1.0.0",
                        "main": "index.js",
                        "dependencies": {}
                    })
                }
            }
        }
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code == 200:
        sandbox_info = response.json()
        print("Sandbox created successfully!")
        print("Sandbox URL:", f"https://codesandbox.io/s/{sandbox_info['sandbox_id']}")
    else:
        print("Failed to create sandbox:", response.text)

if __name__ == "__main__":
    create_sandbox()