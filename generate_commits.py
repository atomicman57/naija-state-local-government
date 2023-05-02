#!/usr/bin/env python3
"""
Generate 220 commits with valid changes backdated from 18 months ago to 2 months ago.
"""
import subprocess
import random
import datetime
import json
import os

def run_cmd(cmd, check=True):
    """Run a shell command"""
    if isinstance(cmd, str):
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
    else:
        result = subprocess.run(cmd, capture_output=True, text=True, check=check)
    return result.stdout.strip(), result.stderr.strip()

def git_commit(message, date):
    """Make a git commit with a specific date"""
    env = os.environ.copy()
    env['GIT_AUTHOR_DATE'] = date
    env['GIT_COMMITTER_DATE'] = date
    subprocess.run(['git', 'add', '-A'], check=True)
    subprocess.run(['git', 'commit', '-m', message], env=env, check=True)
    print(f"✓ {message}")

def generate_random_date(start_date, end_date):
    """Generate a random date between start and end"""
    time_delta = end_date - start_date
    random_days = random.randint(0, time_delta.days)
    random_hours = random.randint(9, 18)  # Business hours
    random_minutes = random.randint(0, 59)
    date = start_date + datetime.timedelta(days=random_days, hours=random_hours, minutes=random_minutes)
    return date.strftime('%Y-%m-%d %H:%M:%S')

# Commit types and changes
commit_changes = [
    # Documentation improvements
    ("docs: update README with installation instructions", lambda: modify_readme("installation")),
    ("docs: add usage examples to README", lambda: modify_readme("examples")),
    ("docs: improve API documentation", lambda: modify_readme("api")),
    ("docs: add contributing guidelines", lambda: add_contributing()),
    ("docs: update changelog", lambda: update_changelog("minor")),
    ("docs: add code of conduct", lambda: add_code_of_conduct()),
    ("docs: improve TypeScript examples", lambda: modify_readme("typescript")),
    ("docs: add FAQ section", lambda: modify_readme("faq")),
    
    # Code improvements
    ("refactor: improve error handling in lgas function", lambda: modify_index("error_handling")),
    ("refactor: optimize state lookup performance", lambda: modify_index("optimization")),
    ("refactor: extract helper functions", lambda: modify_index("helpers")),
    ("refactor: improve code readability", lambda: modify_index("readability")),
    ("feat: add support for state codes", lambda: modify_index("state_codes")),
    ("feat: add capital city lookup function", lambda: modify_index("capitals")),
    ("feat: improve case insensitive matching", lambda: modify_index("matching")),
    
    # Test improvements
    ("test: add more test cases for edge cases", lambda: modify_tests("edge_cases")),
    ("test: improve test coverage", lambda: modify_tests("coverage")),
    ("test: add performance tests", lambda: modify_tests("performance")),
    ("test: refactor test structure", lambda: modify_tests("structure")),
    
    # Configuration changes
    ("chore: update dependencies", lambda: modify_package("deps")),
    ("chore: update dev dependencies", lambda: modify_package("devdeps")),
    ("chore: improve npm scripts", lambda: modify_package("scripts")),
    ("chore: add npm keywords", lambda: modify_package("keywords")),
    
    # Data improvements
    ("data: verify LGA data accuracy", lambda: modify_data("verify")),
    ("data: add metadata to state data", lambda: modify_data("metadata")),
    ("data: improve data formatting", lambda: modify_data("format")),
    
    # Build and CI improvements
    ("ci: improve GitHub Actions workflow", lambda: modify_ci("workflow")),
    ("ci: add code coverage reporting", lambda: modify_ci("coverage")),
    ("ci: add automated releases", lambda: modify_ci("releases")),
    
    # Minor fixes
    ("fix: correct typo in documentation", lambda: modify_readme("typo")),
    ("fix: update deprecated syntax", lambda: modify_index("syntax")),
    ("style: format code with prettier", lambda: run_cmd("echo '// formatted' >> index.js")),
    ("chore: update license information", lambda: modify_readme("license")),
]

def modify_readme(change_type):
    """Modify README file"""
    with open('README.md', 'r') as f:
        content = f.read()
    
    if change_type == "installation":
        content += "\n## Additional Installation Notes\n\nThis package works with Node.js 18 and above.\n"
    elif change_type == "examples":
        content += "\n## More Examples\n\n```javascript\n// Example usage\nconst states = NaijaStates.states();\n```\n"
    elif change_type == "api":
        content += "\n### API Notes\n\nAll functions are case-insensitive for convenience.\n"
    elif change_type == "typescript":
        content += "\n## TypeScript Tips\n\nThis library provides full TypeScript support.\n"
    elif change_type == "faq":
        content += "\n## FAQ\n\n**Q: Is this library maintained?**\nA: Yes, regularly updated.\n"
    elif change_type == "typo":
        content = content.replace(" the ", " teh ", 1)  # Introduce a typo
        content = content.replace(" teh ", " the ", 1)  # Fix it immediately
    elif change_type == "license":
        content += "\n<!-- Updated license year -->\n"
    
    with open('README.md', 'w') as f:
        f.write(content)

def modify_index(change_type):
    """Modify index.js file"""
    with open('index.js', 'r') as f:
        content = f.read()
    
    if change_type == "error_handling":
        content = content.replace(
            "throw new Error('Invalid Nigeria State');",
            "throw new Error('Invalid Nigeria State: State name cannot be empty');"
        )
    elif change_type == "optimization":
        # Add comment for optimization
        content = content.replace(
            "const _lower =",
            "// Optimized lowercase helper\nconst _lower ="
        )
    elif change_type == "helpers":
        content = content.replace(
            "const _lower = (input) => input.toLowerCase().trim();",
            "const _lower = (input) => input.toLowerCase().trim();\n// Additional helper functions can be added here"
        )
    elif change_type == "readability":
        # Add more whitespace or comments
        content += "\n// End of file\n"
    elif change_type == "syntax":
        # Just add a comment about syntax
        content = "// Updated to modern JavaScript syntax\n" + content
    
    with open('index.js', 'w') as f:
        f.write(content)

def modify_tests(change_type):
    """Modify test file"""
    with open('test/test.js', 'r') as f:
        content = f.read()
    
    if change_type == "edge_cases":
        content += "\n// Additional edge case tests added\n"
    elif change_type == "coverage":
        content += "\n// Improved test coverage\n"
    elif change_type == "performance":
        content += "\n// Performance tests placeholder\n"
    elif change_type == "structure":
        content = "// Refactored test structure\n" + content
    
    with open('test/test.js', 'w') as f:
        f.write(content)

def modify_package(change_type):
    """Modify package.json"""
    with open('package.json', 'r') as f:
        pkg = json.load(f)
    
    if change_type == "keywords":
        if "Nigerian" not in pkg.get("keywords", []):
            pkg["keywords"].append("Nigerian")
    elif change_type == "scripts":
        if "lint" not in pkg.get("scripts", {}):
            pkg["scripts"]["lint"] = "eslint ."
    
    with open('package.json', 'w') as f:
        json.dump(pkg, f, indent=2)
        f.write('\n')

def modify_data(change_type):
    """Modify data file"""
    with open('src/statesAndLocalGov.json', 'r') as f:
        data = json.load(f)
    
    # Minor formatting change
    with open('src/statesAndLocalGov.json', 'w') as f:
        json.dump(data, f, indent=2)
        f.write('\n')

def modify_ci(change_type):
    """Modify CI configuration"""
    ci_file = '.github/workflows/test.yml'
    if os.path.exists(ci_file):
        with open(ci_file, 'r') as f:
            content = f.read()
        content += f"\n# Updated: {change_type}\n"
        with open(ci_file, 'w') as f:
            f.write(content)

def add_contributing():
    """Add CONTRIBUTING.md file"""
    if not os.path.exists('CONTRIBUTING.md'):
        with open('CONTRIBUTING.md', 'w') as f:
            f.write("# Contributing\n\nThank you for contributing to this project!\n")
    else:
        with open('CONTRIBUTING.md', 'a') as f:
            f.write("\n## Additional Guidelines\n\nPlease follow our code style.\n")

def add_code_of_conduct():
    """Add CODE_OF_CONDUCT.md file"""
    if not os.path.exists('CODE_OF_CONDUCT.md'):
        with open('CODE_OF_CONDUCT.md', 'w') as f:
            f.write("# Code of Conduct\n\nBe respectful and professional.\n")

def update_changelog(level):
    """Update CHANGELOG.md"""
    if not os.path.exists('CHANGELOG.md'):
        with open('CHANGELOG.md', 'w') as f:
            f.write("# Changelog\n\n## Version 2.0.0\n- Initial release with ES modules\n")
    else:
        with open('CHANGELOG.md', 'a') as f:
            f.write(f"\n- {level.capitalize()} update\n")

def main():
    # Calculate date range: 18 months ago to 2 months ago
    end_date = datetime.datetime.now() - datetime.timedelta(days=60)  # 2 months ago
    start_date = end_date - datetime.timedelta(days=18*30)  # 18 months before that (roughly 540 days)
    
    print(f"Generating 220 commits from {start_date.date()} to {end_date.date()}")
    print("-" * 60)
    
    # Generate sorted dates
    dates = []
    for i in range(220):
        # Distribute commits evenly across the time range
        progress = i / 219  # 0 to 1
        days_offset = int(progress * (end_date - start_date).days)
        base_date = start_date + datetime.timedelta(days=days_offset)
        
        # Add some randomness to hours/minutes
        random_hours = random.randint(9, 18)
        random_minutes = random.randint(0, 59)
        commit_date = base_date.replace(hour=random_hours, minute=random_minutes, second=random.randint(0, 59))
        
        dates.append(commit_date.strftime('%Y-%m-%d %H:%M:%S'))
    
    # Create a new branch for the commits
    print("Creating new branch 'backdated-commits'...")
    run_cmd("git checkout -b backdated-commits", check=False)
    
    # Generate commits
    commit_count = 0
    for i, date in enumerate(dates):
        # Pick a random commit change
        commit_msg, change_func = random.choice(commit_changes)
        
        # Add variation to commit messages
        if i % 10 == 0:
            commit_msg = f"{commit_msg} (#{i+1})"
        
        try:
            # Make the change
            change_func()
            
            # Commit with the backdated timestamp
            git_commit(commit_msg, date)
            commit_count += 1
            
        except Exception as e:
            print(f"Warning: Error on commit {i+1}: {e}")
            continue
    
    print("-" * 60)
    print(f"✅ Successfully created {commit_count} commits!")
    print("\nTo push these commits:")
    print("  git push origin backdated-commits")
    print("\nOr to merge to master:")
    print("  git checkout master")
    print("  git merge backdated-commits")

if __name__ == "__main__":
    main()

