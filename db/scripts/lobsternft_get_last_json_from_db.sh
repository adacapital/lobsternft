#!/bin/bash

SCRIPT_DIR="$(realpath "$(dirname "$0")")"
DB_DIR="$(realpath "$(dirname "$SCRIPT_DIR")")"
SQL_DIR="$DB_DIR/sql"

LAST=$(cat $SQL_DIR/lobster_db_select_last.sql | sqlite3 $DB_DIR/lobster.db)

ID=$(echo $LAST | awk -F"|" '{print $1}')
TIME=$(echo $LAST | awk -F"|" '{print $2}')
LOBSTER_COUNTER=$(echo $LAST | awk -F"|" '{print $3}')
LOBSTER_VOTES=$(echo $LAST | awk -F"|" '{print $4}')

LOBSTER_COUNTER=24824
LOBSTER_VOTES=501

if [[ $LOBSTER_VOTES > 500 ]]; then
    echo "here"
    NAME_INDEX=$($LOBSTER_COUNTER % 1219)
    NAME_INDEX=$(expr $NAME_INDEX + 1)
    NAME=$(tail +$NAME_INDEX $SCRIPT_DIR/names.txt | head -1)

    $(cat <<-END > ./tmp.json
{
    "id": "${ID}", 
    "time": "${TIME}", 
    "lobster_counter": ${LOBSTER_COUNTER},
    "lobster_votes": ${LOBSTER_VOTES},
    "name": ${NAME}
}
END
)
else
    $(cat <<-END > ./tmp.json
{
    "id": "${ID}", 
    "time": "${TIME}", 
    "lobster_counter": ${LOBSTER_COUNTER},
    "lobster_votes": ${LOBSTER_VOTES}
}
END
)
fi

cat ./tmp.json
rm -f ./tmp.json