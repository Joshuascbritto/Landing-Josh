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

# Favicons: Google Search needs a crawlable icon file (a data: URI is ignored),
# square and a multiple of 48px. favicon.ico covers clients that only probe
# /favicon.ico, which would otherwise get index.html from the SPA rewrite.
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --virtual-time-budget=5000 --window-size=512,512 \
  --screenshot="$PWD/favicon-512.png" "file://$PWD/favicon.html"
magick favicon-512.png -resize 192x192 "$OUT/favicon-192.png"
magick favicon-512.png -resize 180x180 "$OUT/apple-touch-icon.png"
magick favicon-512.png -define icon:auto-resize=48,32,16 "$OUT/favicon.ico"
rm favicon-512.png
