#!/usr/bin/env bash
# Build locally and mirror dist/ to Hostinger public_html over FTP.
# Requires: lftp   (apt install lftp / brew install lftp)
# Credentials come from .env — never commit that file.
set -euo pipefail

source .env

npm run build

lftp -c "
  set ftp:ssl-allow true;
  set ssl:verify-certificate no;
  open -u ${FTP_USER},${FTP_PASS} ftp://${FTP_HOST};
  mirror -R --delete --verbose --parallel=4 \
    --exclude-glob .well-known/ \
    dist/ /public_html/
"
echo "Deployed."
