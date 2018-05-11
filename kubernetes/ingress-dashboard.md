# Serve dashboard through Ingress

If you want to server HTTPS version of Dashboard, which is recommended, you need to create secret with `tls.crt` and `tls.key` data.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: certs-dashboard
  namespace: kube-system
type: Opaque
data:
  tls.crt: <base64_cert_here>
  tls.key: <base64_private_key_here>
```

If you want to secure your dashboard with Nginx basic auth you need to create secret:
```bash
sh -c "echo -n '<username>:' >> basic_auth"
sh -c "openssl passwd -apr1 >> basic_auth"
kubectl create secret generic basic-auth --from-file=auth --namespace=kube-system
```

After that you could create an `Ingress` object:
```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: dashboard-ingress
  namespace: kube-system
  annotations:
    nginx.ingress.kubernetes.io/secure-backends: "true"
    nginx.ingress.kubernetes.io/auth-type: basic
    nginx.ingress.kubernetes.io/auth-secret: basic-auth-dashboard
    nginx.ingress.kubernetes.io/auth-realm: "Authentication Required"
spec:
  tls:
    - hosts:
      - <subdomain_for_dashboard>
      secretName: certs-dashboard
  rules:
    - host: <subdomain_for_dashboard>
      http:
        paths:
        - path: /
          backend:
            serviceName: kubernetes-dashboard
            servicePort: 443
```
