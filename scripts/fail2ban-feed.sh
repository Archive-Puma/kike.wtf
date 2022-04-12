#!/bin/sh
set -e

# Variables
outdir="$(/usr/bin/dirname "$(/usr/bin/readlink -f "${0}")")/../www/kike.wtf/dl/"
output="${outdir}/feed.txt"

# Check output directory
test -d "${outdir}" || mkdir -p "${outdir}"

# Create the header
cat << EOF > "${output}"
# --------------------------------------------------------------------
# IP addresses launching SSH dictionary attacks against this server.
# Last modified: $(/usr/bin/date "+%Y-%m-%d %H:%M")
# --------------------------------------------------------------------
EOF

# Check fail2ban installation
test -f "/usr/bin/fail2ban-client" || exit 1

# Create the script
/usr/bin/fail2ban-client status sshd | \
    /usr/bin/grep 'Banned' | \
    /usr/bin/sed -e 's/^.*list:\s*//g' -e 's/\s\+/\n/g' | /usr/bin/sort -t . -k 1,1n -k 2,2n -k 3,3n -k 4,4n >> "${output}"