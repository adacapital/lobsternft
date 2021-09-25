#!/bin/bash
# loading important environment variables by forcing .bashrc to be reloaded
# useful as this script will be run as a systemd service for which no env variable are preloaded
eval "$(cat ~/.bashrc | tail -n +10)"

NOW=`date +"%Y.%m.%d %H:%M:%S"`
SCRIPT_DIR="$(realpath "$(dirname "$0")")"
DB_DIR="$(realpath "$(dirname "$SCRIPT_DIR")")"
SQL_DIR="$DB_DIR/sql"

echo "DB_DIR: $DB_DIR"

RAW=$($SPOT_PATH/scripts/query_payment_addr.sh addr1w8433zk2shufk42hn4x7zznjjuqwwyfmxffcjszw5l2ulesdt3jff | grep cc7888851f0f5aa64c136e0c8fb251e9702f3f6c9efcf3a60a54f419)
LOBSTER_COUNTER=$(echo $RAW | awk '{ print $9 }')
LOBSTER_VOTES=$(echo $RAW | awk '{ print $12 }')

LOBSTER_COUNTER=24824
LOBSTER_VOTES=500

echo "RAW: $RAW"
echo "LOBSTER_COUNTER: $LOBSTER_COUNTER"
echo "LOBSTER_VOTES: $LOBSTER_VOTES"

if [[ $LOBSTER_VOTES > 500 ]]; then
    NAME_INDEX=$(expr $LOBSTER_COUNTER % 1219)
    NAME_INDEX=$(expr $NAME_INDEX + 1)
    NAME=$(tail +$NAME_INDEX $SCRIPT_DIR/names.txt | head -1 | awk '{print $2}')

    INS_SQL=$(cat $SQL_DIR/lobster_db_insert_new_with_name.sql)
    INS_SQL=$(echo $INS_SQL | sed "s/#TIME/$NOW/g" | sed "s/#LOBSTER_COUNTER/$LOBSTER_COUNTER/g" | sed "s/#LOBSTER_VOTES/$LOBSTER_VOTES/g" | sed "s/#NAME/\"$NAME\"/g")
else
    INS_SQL=$(cat $SQL_DIR/lobster_db_insert_new.sql)
    INS_SQL=$(echo $INS_SQL | sed "s/#TIME/$NOW/g" | sed "s/#LOBSTER_COUNTER/$LOBSTER_COUNTER/g" | sed "s/#LOBSTER_VOTES/$LOBSTER_VOTES/g")
fi

echo "INS_SQL: $INS_SQL" 

echo $INS_SQL | sqlite3 $DB_DIR/lobster.db

