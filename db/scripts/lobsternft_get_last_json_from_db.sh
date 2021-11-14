#!/bin/bash

SCRIPT_DIR="$(realpath "$(dirname "$0")")"
DB_DIR="$(realpath "$(dirname "$SCRIPT_DIR")")"
SQL_DIR="$DB_DIR/sql"

LAST=$(cat $SQL_DIR/lobster_db_select_last.sql | sqlite3 $DB_DIR/lobster.db)

ID=$(echo $LAST | awk -F"|" '{print $1}')
TIME=$(echo $LAST | awk -F"|" '{print $2}')
LOBSTER_COUNTER=$(echo $LAST | awk -F"|" '{print $3}')
LOBSTER_VOTES=$(echo $LAST | awk -F"|" '{print $4}')
NAME=$(echo $LAST | awk -F"|" '{print $5}')

$(cat <<-END > ./tmp.json
{
    "id": "${ID}", 
    "time": "${TIME}", 
    "lobster_counter": ${LOBSTER_COUNTER},
    "lobster_votes": ${LOBSTER_VOTES},
    "name": "${NAME}"
}
END
)

cat ./tmp.json
rm -f ./tmp.json