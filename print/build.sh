#!/usr/bin/env bash
# Regenerates the résumé PDFs and the Open Graph image from the HTML in this
# folder. Needs Google Chrome and network access (Google Fonts).
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-google-chrome}"
OUT=../public
mkdir -p "$OUT/resume"

pdf() {
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=5000 --print-to-pdf="$2" "file://$PWD/$1"
}

pdf resume-en.html "$OUT/resume/Joshua_Strauch_Resume.pdf"
pdf resume-pt.html "$OUT/resume/Joshua_Strauch_Curriculo.pdf"

"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --virtual-time-budget=5000 --window-size=1200,630 \
  --screenshot="$OUT/og.png" "file://$PWD/og.html"
