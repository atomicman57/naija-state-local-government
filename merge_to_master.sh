#!/bin/bash

cd /Users/blessingphilips/Documents/naija-state-local-government

echo "=== Current Status ==="
git branch | grep '*'

echo -e "\n=== Checking out master ==="
git checkout master

echo -e "\n=== Current branch after checkout ==="
git branch | grep '*'

echo -e "\n=== Merging backdated-history-commits into master ==="
git merge backdated-history-commits -m "Merge backdated history commits" --no-ff

echo -e "\n=== Verification after merge ==="
echo "Total commits on master:"
git rev-list --count HEAD

echo -e "\nLast 10 commits:"
git log --oneline | head -10

echo -e "\n=== Commit date range on master ==="
echo "Oldest commit (from our backdated commits):"
git log --pretty=format:"%ai %s" --reverse | grep -E "2023-05|2023-06" | head -1

echo "Most recent commit:"
git log --pretty=format:"%ai %s" | head -1

echo -e "\n✅ Merge complete! You can now push with:"
echo "   git push origin master"
echo -e "\nOr if you need to force push (if there are conflicts with remote):"
echo "   git push origin master --force-with-lease"

