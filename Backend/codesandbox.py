import webbrowser

def open_share_link_in_chrome(link):
    """
    Open the provided share link in Google Chrome.
    
    Args:
    link (str): The URL of the share link to open.
    """
    # Path to the Google Chrome executable
    chrome_path = 'C:/Program Files/Google/Chrome/Application/chrome.exe %s'

    # Open the link in Google Chrome
    webbrowser.get(chrome_path).open(link)

# Example usage
share_link = "give share link here"
open_share_link_in_chrome(share_link)
