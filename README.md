# React Workshop - Onboarding Developers at SDP #

**Preface:** The upstream URL of this repository is:
[github.com/jensneuse/react-workshop][upstream-repo]

This React Workshop has been used to get everyone of our team at
[SDP][sdp-github-orga] up and running with our new tech-stack.

## TOS

- [Requirements](required)
- [Start Minikube](#start-minikube)
- [Setup Environment Variables for Docker Image Compilation](#setup-environment-variables-for-docker-image-compilation)
- [Using helm](#using-helm)
- [NPM Run Script(s)](#npm-run-scripts)
- [Build a Docker Image (locally)](#build-the-docker-image-locally)
- [Screencast](#screencast)

## Required

Base Requirements that need to be installed, before you can continue.

- [Minikube][minikube-website]
- [VirtualBox][virtualbox-website]
- [Helm][helm-website]

## Start Minikube

Start minikube by typing

```bash
minikube start
```

List all active kubernetes nodes

```bash
kubectl get nodes
```

There should ne none, because we haven't launched any node yet.

## Setup Environment Variables for Docker Image Compilation

For Linux/Mac it is this one here

```bash
eval $(minikube docker-env)
```

## Using helm

List all Docker processes

```bash
docker ps
```

Change the current working directory to `content-repository`

```bash
cd content-repository
```

Init helm

```bash
helm init
```

Install helm chart found in the subdirectory `chart` and name it
`backend-database`

```bash
helm install --name backend-database ./chart
```

List all  pods

```bash
kubectl get pods
```

The output should be looking somehow like this

```
NAME                                           READY     STATUS              RESTARTS   AGE
backend-database-postgresql-77455fbb6f-qn7qr   0/1       ContainerCreating   0          4s
```

As you can see, the `STATUS` indicates that the started pod is there, but still
not ready now.

You can keep checking the pod to become ready

```bash
while(kubectl get pods | grep "backend-databae" | awk '{print $2}' | grep "0/1");
        do echo "Pod not ready.."; sleep 5;
done
        echo "Pod is ready"
```

Once the pod has become ready, change the current working directory to
`/content-repository/api`

```bash
cd ../api
```

## Build the Docker Image locally

We have a `Dockerfile` which we will use to build our Docker image (locally).

If you're curious, you can peek into the file's contents

```bash
cat ./Dockerfile
```

### npm run scripts

In this specific example, we have the build command (to build the Docker Image)
included in the `package.json`, so we can run it via `npm run`.

If you happen to know Grunt, Gulp, Bower, or Gradle you might find `npm run`
familiar.

You can run all commands that are part of the `scripts` section in the
`package.json` via `npm run [NAME]`

It's just a very convenient way of storing *scripts* that you need often,
or *scripts* that you want to have out of the developers way,
because they don't need to know exactly what is going on behind the scene.

Let's peek into what options we have in this example

```bash
cat ./package.json | jq .scripts
```

The output should look like this

```json
{
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "docker build --no-cache -t workshop/graphqlapi .",
  "showImages": "docker images",
  "start": "node_modules/.bin/postgraphile -o -c postgresql://postgres@backend-database-postgresql/postgres -s workshop -w"
}
```

That `build` command will come in very handy,
but let's intall all dependencies first

```bash
npm install
```

**Hint:** If you omit the `-g` or `--global` flag,
the dependencies will be installed local to the current directory (inside the
`node_modules`) folder, which is exactly what we want here.

The `postgraphile` module should have been installed, because it's listed
as the only dependency.

```bash
cat package.json | jq .dependencies
```

```json
{
  "postgraphile": "^4.0.0-alpha2.28"
}
```

Now let's get back to the handy build command.
(let's just assume that [@jensneuse][jens-github] put it there to make our life
a whole lot easier)

Let's use it to create a Docker Image

```bash
npm run build
```

Once the build succeeded, let's install the Helm chart for this container and
assign the `api` name to it

```bash
helm install --name api ./chart
```

Let's check if the pod is ready

```bash
kubectl get pods | grep "api-graphqlapi"
```

## Screencast

[Jens][jens-github] recorded a screencast showing each step of the workshop
[here][asciicinema-link]

[upstream-repo]: https://github.com/jensneuse/react-workshop
[sdp-github-orga]: https://github.com/t-online
[asciicinema-link]: https://asciinema.org/a/t55y9ve9kc9oooKqsrOz4wFSB "ASCIICast Screencast"
[minikube-website]: https://github.com/kubernetes/minikube
[virtualbox-website]: https://www.virtualbox.org/
[helm-website]: https://github.com/kubernetes/helm
[jens-github]: https://github.com/jensneuse

