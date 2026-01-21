#!/bin/bash

pnpm i
pnpm gen:api-spec:watch &
pnpm dev