#!/bin/bash
cd /Users/blessingphilips/Documents/naija-state-local-government

echo "=== Current Branch ==="
git branch | grep '*'

echo -e "\n=== Total Commits on This Branch ==="
git rev-list --count HEAD

echo -e "\n=== First 10 Commits ==="
git log --oneline | head -10

echo -e "\n=== Last 10 Commits ==="
git log --oneline | tail -10

echo -e "\n=== Commit Date Range ==="
echo "First commit:"
git log --reverse --pretty=format:"%ai %s" | head -1
echo -e "\nLast commit:"
git log --pretty=format:"%ai %s" | head -1

echo -e "\n=== Commits by Month ==="
git log --pretty=format:"%ai" | cut -d'-' -f1-2 | sort | uniq -c | sort -k2

echo -e "\n=== Branch Info ==="
git branch -a

