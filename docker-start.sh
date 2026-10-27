#!/bin/sh
# Старт контейнера на Amvera.
# Заявки храним в постоянном хранилище /data: всё остальное стирается при пересборке.
# Контейнер стартует от root только чтобы выдать права на /data, сам сайт работает от nextjs (uid 1001).
# Любой сбой здесь не мешает запуску: сайт поднимется на базе из образа, как раньше.

echo "[db] uid=$(id -u) data: $(ls -ld /data 2>&1)"

if [ -d /data ]; then
    echo "[db] mount: $(grep ' /data ' /proc/mounts 2>&1)"
    chown 1001:1001 /data 2>/dev/null
    # Prisma считает file:./prisma/dev.db от папки схемы, поэтому база образа лежит в prisma/prisma/dev.db
    SEED_DB=./prisma/prisma/dev.db
    [ -f "$SEED_DB" ] || SEED_DB=./prisma/dev.db
    [ -f "$SEED_DB" ] || SEED_DB=$(find ./prisma -name dev.db 2>/dev/null | head -n 1)
    echo "[db] seed db: ${SEED_DB:-not found}"
    if [ ! -f /data/dev.db ]; then
        # сначала от root, если нельзя — от nextjs (на NFS root часто превращается в nobody)
        if cp "$SEED_DB" /data/dev.db 2>/tmp/cp.err; then
            echo "[db] copied seed db to /data (root)"
        elif setpriv --reuid=1001 --regid=1001 --clear-groups cp "$SEED_DB" /data/dev.db 2>>/tmp/cp.err; then
            echo "[db] copied seed db to /data (uid 1001)"
        else
            echo "[db] copy to /data failed: $(cat /tmp/cp.err)"
        fi
    fi
    chown 1001:1001 /data/dev.db 2>/dev/null
    chmod 666 /data/dev.db 2>/dev/null
    echo "[db] file: $(ls -l /data/dev.db 2>&1)"
fi

if [ -f /data/dev.db ] && setpriv --reuid=1001 --regid=1001 --clear-groups test -w /data/dev.db 2>/dev/null; then
    export DATABASE_URL=file:/data/dev.db
    echo "[db] using /data/dev.db"
else
    echo "[db] /data unavailable, using image db"
fi

if command -v setpriv >/dev/null 2>&1; then
    exec setpriv --reuid=1001 --regid=1001 --clear-groups node server.js
fi
echo "[start] setpriv not found, running as $(id -u)"
exec node server.js
