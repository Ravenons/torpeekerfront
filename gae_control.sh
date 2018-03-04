#!/bin/sh

# Stop App Engine app (dev version)

case $1 in
        start)
                gcloud --quiet app versions start dev --service=frontend
                ;;
        stop)
                gcloud --quiet app versions stop dev --service=frontend
                ;;
        *)
                echo "./gae_control.sh <start, stop>"
                ;;
esac
