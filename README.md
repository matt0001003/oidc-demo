## Description

It is a OIDC demo which authenticate users from microsoft, get the user's data from [Microsoft Graph REST API](https://learn.microsoft.com/en-us/graph/api/user-get?view=graph-rest-1.0&tabs=http), and display them on the home page.
I didn't spend too much time on the design, only applied some CSS for basic styling.

## Instruction on how to build and deploy the application.

To build the docker image

```
docker build -t oidc-demo .
```

To deploy the application, we can push the current image to dockerhub, pull the image in an EC2 instance and run the docker container again.

## To run the image in a demo container.

```
docker run -p 3000:3000 oidc-demo
```
