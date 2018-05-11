# Continuous integration

To deliver your project to Kubernetes you need to have the next steps in your CI configuration:

- Setup environment variables:
  - `KUBERNETES_CLUSTER` - cluster name
  - `KUBERNETES_API_SERVER` - IP address or domain name of the master node(with installed API server) with HTTPS(!) protocol
  - `KUBERNETES_TOKEN` - get it by execute the `kubectl get secret` (search for `default-token-xxxxx`) and `kubectl describe secret default-token-xxxxx` (search for `token`)


- [Install Kubectl](/kubernetes/setup-machine-for-cluster-management.html#kubectl)
- Run next commands:
```bash
sudo kubectl config set-cluster $KUBERNETES_CLUSTER --insecure-skip-tls-verify=true --server=$KUBERNETES_API_SERVER

sudo kubectl config set-credentials admin --token=$KUBERNETES_TOKEN

sudo kubectl config set-context $KUBERNETES_CLUSTER --cluster=$KUBERNETES_CLUSTER --user=admin

sudo kubectl config use-context $KUBERNETES_CLUSTER

sudo kubectl cluster-info

sudo kubectl get pods

sudo kubectl set image deployment/<deployment_name> $CIRCLE_PROJECT_REPONAME=$DOCKER_CLOUD_USERNAME/$CIRCLE_PROJECT_REPONAME:$CIRCLE_BRANCH-$CIRCLE_BUILD_NUM
```
