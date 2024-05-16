import webbrowser
import requests

def create_collaborative_session():
    response = requests.post('https://codesandbox.io/api/v1/sandboxes/define', json={
        "files": {
            "index.js": {
                "content": "console.log('Hello World');"
            }
        }
    })
    sandbox_id = response.json()['sandboxid']
    return f'https://codesandbox.io/s/{sandboid}'

# Call this function from Flask's /start endpoint when mode is 'team'
share_link = create_collaborative_session()
open_share_link_in_chrome(share_link)
# test2.py

def open_share_link_in_chrome(link):

    # Path to the Google Chrome executable
    chrome_path = 'C:/Program Files/Google/Chrome/Application/chrome.exe %s'

    # Open the link in Google Chrome
    webbrowser.get(chrome_path).open(link)
    
# Example usage: open_share_link_in_chrome("https://codesandbox.io/s/sandboxid")

