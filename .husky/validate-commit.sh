#!/usr/bin/env sh

# Get the commit message from the file passed by Git
COMMIT_MSG_FILE=$1
COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")

# Define valid commit types
VALID_TYPES="feat|fix|docs|style|refactor|perf|test|chore|revert|ci|build"

# Regular expression for Conventional Commits format
# Matches: <type>(<scope>): <subject> or <type>: <subject>
REGEX="^($VALID_TYPES)(\([a-zA-Z0-9-]+\))?: .+$"

# Check if the commit message matches the regex
if ! echo "$COMMIT_MSG" | grep -E "$REGEX" > /dev/null; then
  echo "ERROR: Commit message does not follow Conventional Commits format!"
  echo "Expected format: <type>(<scope>): <subject> or <type>: <subject>"
  echo "Valid types: $VALID_TYPES"
  echo "✅ Example: feat: add user login functionality"
  echo "⭕ Your commit message: $COMMIT_MSG"
  exit 1
fi

# Check for subject length (max 50 characters)
SUBJECT=$(echo "$COMMIT_MSG" | sed -E 's/^[^:]+: //')
if [ ${#SUBJECT} -gt 50 ]; then
  echo "ERROR: Commit message subject exceeds 50 characters!"
  echo "Your commit message: $COMMIT_MSG"
  exit 1
fi

exit 0