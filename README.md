[![moveit](https://moveit-diegopatriota.vercel.app/logo-full.png)](moveit-diegopatriota.vercel.app)

[![](https://moveit-diegopatriota.vercel.app/moveit-1.gif)](moveit-diegopatriota.vercel.app)

#### Main

Service to receive.

## Infrastructure

This repository is part of a bigger project, running multiple services
[Git](https://github.com/DIEGOPATRIOTA/react-moveit.git).

## Development

To run or debug this service.

> docker-compose up -d && npm run dev

## App

### Health Check

```json
{
  "amqp": "CONSUMING",
  "database": "UP",
  "movements": {
    "unit": "movements/minute",
    "value": 15
  },
  "status": "UP"
}
```
