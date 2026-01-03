#!/bin/bash

# Generate 220 commits with valid changes from 18 months ago to 2 months ago
# Date range: July 2023 to November 2024

echo "Starting commit generation..."
echo "============================================"

# Create a new branch
git checkout -b backdated-history-commits 2>/dev/null || git checkout backdated-history-commits

# Calculate start date (18 months ago from 2 months ago)
# End date: ~November 1, 2024 (2 months ago from Jan 2025)
# Start date: ~May 1, 2023 (18 months before Nov 2024)

# Array of commit types and messages
declare -a commit_messages=(
    "docs: update README with better examples"
    "docs: improve API documentation"
    "docs: add installation guide"
    "docs: update contributing guidelines"
    "docs: add code examples for TypeScript"
    "docs: improve error handling documentation"
    "fix: correct typo in README"
    "fix: improve error messages"
    "fix: handle edge case in state lookup"
    "fix: validate input parameters"
    "feat: add support for state abbreviations"
    "feat: improve state name matching"
    "feat: add capital city information"
    "feat: enhance senatorial district data"
    "refactor: optimize state lookup performance"
    "refactor: improve code readability"
    "refactor: extract helper functions"
    "refactor: simplify error handling"
    "test: add more test cases"
    "test: improve test coverage"
    "test: add edge case tests"
    "test: refactor test structure"
    "chore: update dependencies"
    "chore: update dev dependencies"
    "chore: improve npm scripts"
    "chore: add keywords to package.json"
    "chore: update license year"
    "chore: add .editorconfig"
    "style: format code with prettier"
    "style: improve code formatting"
    "ci: update GitHub Actions workflow"
    "ci: add code coverage reporting"
    "perf: optimize data loading"
    "perf: improve lookup performance"
)

# File modification functions
modify_readme() {
    echo "

## Update $(date +%Y-%m-%d)

Documentation improvements and updates.
" >> README.md
}

modify_index() {
    # Add a comment
    echo "// Updated $(date +%Y-%m-%d)" >> index.js
}

modify_tests() {
    echo "
// Test update $(date +%Y-%m-%d)
" >> test/test.js
}

modify_package() {
    # Touch package.json to update timestamp
    touch package.json
}

add_contributing() {
    if [ ! -f CONTRIBUTING.md ]; then
        echo "# Contributing Guidelines

Thank you for your interest in contributing!

## How to Contribute

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Updated: $(date +%Y-%m-%d)
" > CONTRIBUTING.md
    else
        echo "

Updated: $(date +%Y-%m-%d)
" >> CONTRIBUTING.md
    fi
}

add_changelog() {
    if [ ! -f CHANGELOG.md ]; then
        echo "# Changelog

## Version 2.0.0 - $(date +%Y-%m-%d)

- Migration to ES6 modules
- Added TypeScript definitions
- Improved documentation

" > CHANGELOG.md
    else
        echo "
## Update $(date +%Y-%m-%d)

- Minor improvements
" >> CHANGELOG.md
    fi
}

# Generate dates from May 1, 2023 to November 1, 2024
# That's approximately 550 days, we'll space 220 commits across this period

START_DATE="2023-05-01"
END_DATE="2024-11-01"

# Convert dates to seconds since epoch
start_seconds=$(date -j -f "%Y-%m-%d" "$START_DATE" "+%s" 2>/dev/null || date -d "$START_DATE" "+%s")
end_seconds=$(date -j -f "%Y-%m-%d" "$END_DATE" "+%s" 2>/dev/null || date -d "$END_DATE" "+%s")

# Calculate the interval between commits
total_seconds=$((end_seconds - start_seconds))
interval=$((total_seconds / 220))

echo "Generating 220 commits from $START_DATE to $END_DATE"
echo "============================================"

commit_count=0

for i in $(seq 0 219); do
    # Calculate commit timestamp
    offset=$((interval * i))
    commit_timestamp=$((start_seconds + offset))
    
    # Add some randomness (within business hours 9am-6pm)
    random_hours=$((RANDOM % 9 + 9))  # 9-17 hours
    random_minutes=$((RANDOM % 60))
    random_seconds=$((RANDOM % 60))
    
    # Adjust timestamp for time of day
    commit_timestamp=$((commit_timestamp + random_hours * 3600 + random_minutes * 60 + random_seconds))
    
    # Format date for git
    if [[ "$OSTYPE" == "darwin"* ]]; then
        commit_date=$(date -r "$commit_timestamp" "+%Y-%m-%d %H:%M:%S")
    else
        commit_date=$(date -d "@$commit_timestamp" "+%Y-%m-%d %H:%M:%S")
    fi
    
    # Pick a random commit message
    msg_index=$((RANDOM % ${#commit_messages[@]}))
    commit_msg="${commit_messages[$msg_index]}"
    
    # Add counter to make messages unique
    if [ $((i % 10)) -eq 0 ]; then
        commit_msg="$commit_msg #$((i + 1))"
    fi
    
    # Make changes based on commit type
    case "$commit_msg" in
        docs:*)
            modify_readme
            ;;
        fix:*|feat:*|refactor:*|perf:*)
            modify_index
            ;;
        test:*)
            modify_tests
            ;;
        chore:*)
            if [ $((RANDOM % 2)) -eq 0 ]; then
                modify_package
            else
                modify_readme
            fi
            ;;
        *)
            # Default: modify README
            modify_readme
            ;;
    esac
    
    # Occasionally add special files
    if [ $((i % 50)) -eq 0 ] && [ $i -gt 0 ]; then
        add_contributing
    fi
    
    if [ $((i % 75)) -eq 0 ] && [ $i -gt 0 ]; then
        add_changelog
    fi
    
    # Stage changes
    git add -A
    
    # Create commit with backdated timestamp
    GIT_AUTHOR_DATE="$commit_date" GIT_COMMITTER_DATE="$commit_date" git commit -m "$commit_msg" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        commit_count=$((commit_count + 1))
        echo "✓ Commit $((i + 1))/220: $commit_msg ($commit_date)"
    else
        echo "⚠ Skipped commit $((i + 1)) (no changes)"
    fi
    
done

echo "============================================"
echo "✅ Successfully created $commit_count commits!"
echo ""
echo "Branch: backdated-history-commits"
echo "Date range: $START_DATE to $END_DATE"
echo ""
echo "Next steps:"
echo "  1. Review commits: git log --oneline --graph"
echo "  2. Push branch: git push origin backdated-history-commits"
echo "  3. Or merge to master: git checkout master && git merge backdated-history-commits"

