# Deploy dashboard

If you want to deploy dashboard with your custom SSL certificates, you need to create secret `kubernetes-dashboard-certs` before deploy the dashboard.
The secret must contain `dashboard.crt` and `dashboard.key` data.
```bash
kubectl create secret generic kubernetes-dashboard-certs --from-file=<path_to_folder_with_crt_and_key> -n kube-system
```
After that you can deploy the dashboard:
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
```
