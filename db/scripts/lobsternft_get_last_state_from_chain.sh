#!/bin/bash

SCRIPT_DIR="$(realpath "$(dirname "$0")")"
DB_DIR="$(realpath "$(dirname "$SCRIPT_DIR")")"
SQL_DIR="$DB_DIR/sql"

RAW=$($SPOT_PATH/scripts/query_payment_addr.sh addr1w8433zk2shufk42hn4x7zznjjuqwwyfmxffcjszw5l2ulesdt3jff | grep cc7888851f0f5aa64c136e0c8fb251e9702f3f6c9efcf3a60a54f419)

echo "RAW: $RAW"