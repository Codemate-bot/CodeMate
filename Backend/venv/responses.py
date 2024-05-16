def get_response(user_input:str) -> str:
    lowered : str = user_input.lower()
    
    if lowered == '':
        return 'I am not sure what you are saying'
        
    elif "hello" in lowered:
        return "Hello! How can I help you today?"

    else:
        return 'I am not sure what you are saying'