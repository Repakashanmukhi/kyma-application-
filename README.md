# Kyma Deployment

## Replace `<YOUR_DOCKER_IMAGE>` in deployment.yaml with your actual image path.

Example:
```
docker build -t myuser/nodejs-kyma-app .
docker push myuser/nodejs-kyma-app
```

## Apply to Kyma

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f apirule.yaml
```

Your service will be exposed at:
```
https://nodejs-kyma-app.<your-kyma-domain>
```
# kyma-application-
