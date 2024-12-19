# TS-Screeps-Template

A lightweight starter pack for Screeps (primarily for private servers)

## Setup

1. Copy `screeps.sample.json` to `screeps.json`
2. Fill in the private credentials
3. Run `npm run build` to build the code (dry run)
4. Run `npm run push-private` to push the code to the private server

**Notes:** your password will need to be first created after logging into the private server.

**IMPORTANT:** Do not change or update the package list unless you know what you're doing. Some of Screeps' dependencies require legacy code to work (as it runs mainly on Node.js 12).
