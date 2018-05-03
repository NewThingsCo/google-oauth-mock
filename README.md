# google-oauth-mock

Simple REST API for simulating/mocking Google OAuth service.

Published in [Docker Hub](https://hub.docker.com/r/newthings/google-oauth-mock/)

### Make file targets

```
make run                starts mock server (optional AUTHORIZED_REDIRECT_URL)
make docker-build       builds Docker image out of mock server
make docker-run         starts mock server as a Docker container (optional AUTHORIZED_REDIRECT_URL) 
make docker-stop        stops mock server Docker container
make docker-tag         creates Docker image tag based on package.json version
make docker-push        pushes Docker image into Docker Hub
make docker-publish     builds, tags and pushes Docker image (you'll be prompted for Docker Hub credentials)
``` 

**NOTE!** To modify the default authorized redirect URI that gets called when you make a request to **/mock-auth** endpoint, use the **AUTHORIZED_REDIRECT_URL** argument like 

```
make AUTHORIZED_REDIRECT_URL=http://my.callback.uri run
```

### Exposed endpoints
```
GET  /mock-auth  - Simulates https://accounts.google.com/o/oauth2/auth
POST /mock-token - Simulates https://accounts.google.com/o/oauth2/token
GET  /mock-user  - Simulates https://www.googleapis.com/oauth2/v3/userinfo
``` 


