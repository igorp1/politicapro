# =====
# define API endpoints for MiniDocs
api_endpoints = [
    {
        'name':'Test',
        'description':'Tests the API is up an running',
        'url':'/twitter/test',
        'verb':'GET',
        'protected':False
    },
    {
        'name':'Stream',
        'description':'Triggers the twitter stream to begin',
        'url':'/twitter/stream/start',
        'verb':'GET',
        'protected':True
    },
    {
        'name':'Todays tracker',
        'description':'Gets the trakers counts for today',
        'url':'/twitter/count/today',
        'verb':'GET',
        'protected':False
    }
]
