# Architecture - Source Code Types

## LOCAL_AGENT
- Source code stays on the user's machine.
- MCP returns Docker commands to run a local analysis agent.
- Results are uploaded in a .zip file from the local agent to the server.
- The .zip file contains no source code (only small snippets where required - e.g. to show a security vulnerability)
- If the user is still unsure, you can use the --dry-run flag in the Docker command to only create the .zip file, and not upload it
- Then later, once they're happy with the .zip file contents, you can use the --only-upload FILENAME (from the folder containing the .zip file) to just upload the .zip file created previously

## GIT
- MCP stores encrypted repository credentials.
- Backend clones and analyzes the repo remotely.

## FILE_ARCHIVE
- MCP stores encrypted archive URLs.
- Backend downloads and analyzes the archive.

## Analysis pipeline
1) Code ingestion (LOCAL_AGENT/GIT/FILE_ARCHIVE)
2) Facet extraction (security, complexity, languages, file types, code quality, tech debt etc)
3) Report generation (snapshot and comparison)
