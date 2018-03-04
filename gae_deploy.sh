#!/bin/sh

# Mostly a script which executes normal deploy

read -p 'Write "deploy" to continue: ' INPUT
if [ "$INPUT" != "deploy" ]; then
    exit 0
fi

gcloud app deploy --version dev
