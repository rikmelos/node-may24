#!/usr/bin/env sh


./../rancher-compose --project-name BackArquitectura \
    --url http://192.168.99.100:8080/v1/projects/1a5 \
    --access-key 9BDC97F718BEE5BF5FAB \
    --secret-key uXm7UYVn4tj3Z5sy7d9n7iaspG54JTr47r62m1Zf \
    -f docker-compose.yml \
    --verbose up \
    -d --force-upgrade \
    --confirm-upgrade
