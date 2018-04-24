# Content
- Docker orchestration tools
- Docker Cloud infrastructure
- Kubernetes
- Minikube
- Init Kubernetes cluster
- Kubernetes components
- Containerization overview
- Kubernetes infrastructure - 1
- Kubernetes UI
- Kubernetes infrastructure - 2
- Ingress ?
- Volumes ?
- PetSets ?
- HTTPS for the UI dashboard

# Docker orchestration tools
- Docker Cloud
- Docker Swarm
- Docker Compose
- Kubernetes

# Docker Cloud infrastructure
- Repositories
- Cluster
- Nodes
- Stacks
- Services
- Containers

# Kubernetes
Google Borg ~2007
- hundreds of thousands jobs
- hundreds of clusters
- 10 thousands machines in each cluster
- task-packing
- machine sharing
- process-level performance isolation
- runtime features that minimize fault-recovery time
- declarative job specification language
- real-time job monitoring
- tools to analyze and simulate system behavior

Kubernetes or k8s - 2014
- production grade
- open source
- scaling
- package manager - [Helm](https://helm.sh)
- dashboard UI
- cloud platform support
- modular

# Minikube
[Minikube](https://github.com/kubernetes/minikube)

# Init Kubernetes cluster
[readme.md](https://github.com/4doge/cheatsheets/blob/master/kubernetes.md)

# Kubernetes components
#### Master components
###### etcd
Storing master state and overall configuration. Notify other components about changes/updates of the state.

###### API Server
REST API. CRUD for the objects in etcd.

###### Scheduler
Binding API for the pods. Choose node for the new created pod.

###### Controller Manager Server
Discover and manage different controllers.

**Node Controller**: Responsible for noticing and responding when nodes go down.

**Replication Controller**: Responsible for maintaining the correct number of pods for every replication controller object in the system.

**Endpoints Controller**: Populates the Endpoints object (that is, joins Services & Pods).

**Service Account & Token Controllers**: Create default accounts and API access tokens for new namespaces.

#### Node components
###### kubelet
It makes sure that containers are running in a pod.

###### kube-proxy
Networking and port forwarding.

###### Container Runtime
Software that is responsible for running containers (docker, rkt, runc)

# Containerization overview
- virtual machine vs container
- containers on cloud

# Kubernetes infrastructure - 1
###### pods
- describe app in yaml or json
- 1 or more containers
- communication between containers by local port numbers
```
kubectl create -f example.yml
kubectl get pod
kubectl describe pod <pod_name>
kubectl attach <pod_name> -i
kubectl exec <pod_name> -- <command>
kubectl delete pod <pod_name>
```
https://kubernetes.io/docs/reference/generated/federation/v1/definitions/


###### services
- access app outside the cluster
- run ELB on AWS
- route traffic to the correct pod
- haproxy/nginx
- domain name point to ELB (alias)
- types: LoadBalancer / ClusterIP(default, reach only from the cluster) / NodePort(reachable externally)

# Kubernetes UI
[Dashboard](https://github.com/kubernetes/dashboard)

# Kubernetes infrastructure - 2
###### replication controllers
- stateless vs stateful
- session management
- localfiles management
- scaling
- ALWAYS USE replication controller instead of pod definition
- can be specify only 1 replica
`kubectl scale --replicas=5 rc/helloworld-controller`

###### replica set
- next-generation replication controller
- new selector(multiple)
- used by deployment object

###### deployments
- definition of state(e.g. state = "run app 5 times")
- replication controller or replica set = hard to manage, a lot of manual work
- create/update application
- rolling-updates (zero downtime)
- rollbacks
- pause/resume deployment
```
kubectl get deployments
kubectl get rs
kubectl set image deployment/helloworld-deployment k8s-demo=k8s-demo:2
kubectl rollout undo deployment/helloworld-deployment
```

###### labels
- label any object (pod/svc/rc/deployment)
- key/value
- multiple
- nodeSelector

###### healthchecks
- types: periodical commands, periodical check over http

###### secrets
- "secret" data
- key/value
- use as env vars or file(via volume)

###### config map
- credentials storing
- key/value
- use as env vars or file(via volume) or container commandline args
```
username=test
password=example
```

```
kubectl create configmap app-config --from-file=example.txt
```
