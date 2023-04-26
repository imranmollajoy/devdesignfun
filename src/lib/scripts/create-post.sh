#!/bin/bash

# Define the default values
SLUG=""
CATEGORY=""
AUTHOR=""

# Parse the flags
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -s|--slug)
    SLUG="$2"
    shift
    shift
    ;;
    -c|--category)
    CATEGORY="$2"
    shift
    shift
    ;;
    -a|--author)
    AUTHOR="$2"
    shift
    shift
    ;;
    *)    # unknown option
    echo "Unknown option: $key"
    exit 1
    ;;
esac
done

# Check if the required flags are present
if [[ -z $SLUG ]]
then
    echo "Slug is required!"
    exit 1
fi

# Convert the slug to title case
TITLE=$(echo $SLUG | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) substr($i,2) }}1')

# Get the current date
DATE=$(date +%Y-%m-%d)
YEAR=$(date +%Y)
MONTH=$(date +%m)
DAY=$(date +%d)

# Set the directory where the folder and file should be created
DIRECTORY="src/routes/post//$YEAR/$MONTH/$DAY/$SLUG"

# Create the folder if it doesn't exist
if [ ! -d "$DIRECTORY" ]; then
  mkdir -p "$DIRECTORY"
fi

# Set the filename
FILENAME="+page.svx"

# Create the file with the specified parameters
echo "---" >> "$DIRECTORY/$FILENAME"
echo "title: $TITLE" >> "$DIRECTORY/$FILENAME"
echo "slug: $SLUG" >> "$DIRECTORY/$FILENAME"
echo "date: $DATE" >> "$DIRECTORY/$FILENAME"
echo "category: $CATEGORY" >> "$DIRECTORY/$FILENAME"
echo "author: $AUTHOR" >> "$DIRECTORY/$FILENAME"
echo "description: um " >> "$DIRECTORY/$FILENAME"
echo "tags: []" >> "$DIRECTORY/$FILENAME"
echo "---" >> "$DIRECTORY/$FILENAME"
