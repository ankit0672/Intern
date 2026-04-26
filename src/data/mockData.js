// ─── Developer Dimension ──────────────────────────────────────────────────────
export const developers = [
    { id: "dev1", name: "Ankit Kumar", role: "Frontend Engineer", team: "Platform", avatar: "AK" },
    { id: "dev2", name: "Priya Sharma", role: "Backend Engineer", team: "Platform", avatar: "PS" },
    { id: "dev3", name: "Rahul Mehta", role: "Full Stack Engineer", team: "Growth", avatar: "RM" },
    { id: "dev4", name: "Sneha Patel", role: "Backend Engineer", team: "Growth", avatar: "SP" },
    { id: "dev5", name: "Dev Rajan", role: "Frontend Engineer", team: "Core", avatar: "DR" },
];

// ─── Jira-like Issues ─────────────────────────────────────────────────────────
// status: "in_progress" → "done"
export const issues = [
    // Ankit Kumar - fast cycle time
    { id: "ISS-001", devId: "dev1", inProgressAt: "2026-04-01", doneAt: "2026-04-02" },
    { id: "ISS-002", devId: "dev1", inProgressAt: "2026-04-03", doneAt: "2026-04-05" },
    { id: "ISS-003", devId: "dev1", inProgressAt: "2026-04-06", doneAt: "2026-04-07" },
    { id: "ISS-004", devId: "dev1", inProgressAt: "2026-04-08", doneAt: "2026-04-10" },
    { id: "ISS-005", devId: "dev1", inProgressAt: "2026-04-11", doneAt: "2026-04-12" },
    { id: "ISS-006", devId: "dev1", inProgressAt: "2026-04-13", doneAt: "2026-04-14" },
    { id: "ISS-007", devId: "dev1", inProgressAt: "2026-04-15", doneAt: "2026-04-16" },
    { id: "ISS-008", devId: "dev1", inProgressAt: "2026-04-17", doneAt: "2026-04-19" },

    // Priya Sharma - longer cycle time
    { id: "ISS-009", devId: "dev2", inProgressAt: "2026-04-01", doneAt: "2026-04-06" },
    { id: "ISS-010", devId: "dev2", inProgressAt: "2026-04-07", doneAt: "2026-04-12" },
    { id: "ISS-011", devId: "dev2", inProgressAt: "2026-04-13", doneAt: "2026-04-19" },
    { id: "ISS-012", devId: "dev2", inProgressAt: "2026-04-20", doneAt: "2026-04-25" },

    // Rahul Mehta - medium cycle time
    { id: "ISS-013", devId: "dev3", inProgressAt: "2026-04-02", doneAt: "2026-04-04" },
    { id: "ISS-014", devId: "dev3", inProgressAt: "2026-04-05", doneAt: "2026-04-08" },
    { id: "ISS-015", devId: "dev3", inProgressAt: "2026-04-09", doneAt: "2026-04-11" },
    { id: "ISS-016", devId: "dev3", inProgressAt: "2026-04-12", doneAt: "2026-04-15" },
    { id: "ISS-017", devId: "dev3", inProgressAt: "2026-04-16", doneAt: "2026-04-19" },
    { id: "ISS-018", devId: "dev3", inProgressAt: "2026-04-20", doneAt: "2026-04-22" },

    // Sneha Patel
    { id: "ISS-019", devId: "dev4", inProgressAt: "2026-04-01", doneAt: "2026-04-05" },
    { id: "ISS-020", devId: "dev4", inProgressAt: "2026-04-06", doneAt: "2026-04-09" },
    { id: "ISS-021", devId: "dev4", inProgressAt: "2026-04-10", doneAt: "2026-04-14" },
    { id: "ISS-022", devId: "dev4", inProgressAt: "2026-04-15", doneAt: "2026-04-18" },
    { id: "ISS-023", devId: "dev4", inProgressAt: "2026-04-19", doneAt: "2026-04-22" },

    // Dev Rajan - slow but methodical
    { id: "ISS-024", devId: "dev5", inProgressAt: "2026-04-01", doneAt: "2026-04-08" },
    { id: "ISS-025", devId: "dev5", inProgressAt: "2026-04-09", doneAt: "2026-04-16" },
    { id: "ISS-026", devId: "dev5", inProgressAt: "2026-04-17", doneAt: "2026-04-22" },
];

// ─── Pull Requests ─────────────────────────────────────────────────────────────
export const pullRequests = [
    // dev1 - Ankit - high throughput, fast lead time
    { id: "PR-101", devId: "dev1", openedAt: "2026-04-01", mergedAt: "2026-04-02", deployedAt: "2026-04-02" },
    { id: "PR-102", devId: "dev1", openedAt: "2026-04-03", mergedAt: "2026-04-04", deployedAt: "2026-04-04" },
    { id: "PR-103", devId: "dev1", openedAt: "2026-04-05", mergedAt: "2026-04-06", deployedAt: "2026-04-07" },
    { id: "PR-104", devId: "dev1", openedAt: "2026-04-08", mergedAt: "2026-04-09", deployedAt: "2026-04-09" },
    { id: "PR-105", devId: "dev1", openedAt: "2026-04-10", mergedAt: "2026-04-11", deployedAt: "2026-04-11" },
    { id: "PR-106", devId: "dev1", openedAt: "2026-04-12", mergedAt: "2026-04-13", deployedAt: "2026-04-13" },
    { id: "PR-107", devId: "dev1", openedAt: "2026-04-14", mergedAt: "2026-04-15", deployedAt: "2026-04-15" },
    { id: "PR-108", devId: "dev1", openedAt: "2026-04-16", mergedAt: "2026-04-17", deployedAt: "2026-04-17" },
    { id: "PR-109", devId: "dev1", openedAt: "2026-04-18", mergedAt: "2026-04-19", deployedAt: "2026-04-19" },
    { id: "PR-110", devId: "dev1", openedAt: "2026-04-20", mergedAt: "2026-04-21", deployedAt: "2026-04-21" },
    { id: "PR-111", devId: "dev1", openedAt: "2026-04-22", mergedAt: "2026-04-23", deployedAt: "2026-04-23" },

    // dev2 - Priya - moderate throughput, slow lead time
    { id: "PR-201", devId: "dev2", openedAt: "2026-04-01", mergedAt: "2026-04-05", deployedAt: "2026-04-06" },
    { id: "PR-202", devId: "dev2", openedAt: "2026-04-07", mergedAt: "2026-04-11", deployedAt: "2026-04-12" },
    { id: "PR-203", devId: "dev2", openedAt: "2026-04-13", mergedAt: "2026-04-17", deployedAt: "2026-04-18" },
    { id: "PR-204", devId: "dev2", openedAt: "2026-04-18", mergedAt: "2026-04-22", deployedAt: "2026-04-23" },
    { id: "PR-205", devId: "dev2", openedAt: "2026-04-22", mergedAt: "2026-04-23", deployedAt: "2026-04-23" },

    // dev3 - Rahul - medium everything
    { id: "PR-301", devId: "dev3", openedAt: "2026-04-02", mergedAt: "2026-04-04", deployedAt: "2026-04-05" },
    { id: "PR-302", devId: "dev3", openedAt: "2026-04-06", mergedAt: "2026-04-08", deployedAt: "2026-04-09" },
    { id: "PR-303", devId: "dev3", openedAt: "2026-04-10", mergedAt: "2026-04-12", deployedAt: "2026-04-13" },
    { id: "PR-304", devId: "dev3", openedAt: "2026-04-14", mergedAt: "2026-04-16", deployedAt: "2026-04-17" },
    { id: "PR-305", devId: "dev3", openedAt: "2026-04-18", mergedAt: "2026-04-20", deployedAt: "2026-04-21" },
    { id: "PR-306", devId: "dev3", openedAt: "2026-04-21", mergedAt: "2026-04-23", deployedAt: "2026-04-23" },
    { id: "PR-307", devId: "dev3", openedAt: "2026-04-22", mergedAt: "2026-04-23", deployedAt: "2026-04-23" },

    // dev4 - Sneha
    { id: "PR-401", devId: "dev4", openedAt: "2026-04-01", mergedAt: "2026-04-03", deployedAt: "2026-04-04" },
    { id: "PR-402", devId: "dev4", openedAt: "2026-04-05", mergedAt: "2026-04-07", deployedAt: "2026-04-08" },
    { id: "PR-403", devId: "dev4", openedAt: "2026-04-09", mergedAt: "2026-04-11", deployedAt: "2026-04-12" },
    { id: "PR-404", devId: "dev4", openedAt: "2026-04-13", mergedAt: "2026-04-16", deployedAt: "2026-04-17" },
    { id: "PR-405", devId: "dev4", openedAt: "2026-04-18", mergedAt: "2026-04-20", deployedAt: "2026-04-21" },
    { id: "PR-406", devId: "dev4", openedAt: "2026-04-21", mergedAt: "2026-04-23", deployedAt: "2026-04-23" },

    // dev5 - Dev Rajan - few PRs, careful
    { id: "PR-501", devId: "dev5", openedAt: "2026-04-01", mergedAt: "2026-04-06", deployedAt: "2026-04-07" },
    { id: "PR-502", devId: "dev5", openedAt: "2026-04-08", mergedAt: "2026-04-14", deployedAt: "2026-04-15" },
    { id: "PR-503", devId: "dev5", openedAt: "2026-04-16", mergedAt: "2026-04-22", deployedAt: "2026-04-23" },
];

// ─── Deployments ───────────────────────────────────────────────────────────────
export const deployments = [
    ...pullRequests.filter(pr => pr.deployedAt).map(pr => ({
        id: `DEP-${pr.id}`, devId: pr.devId, deployedAt: pr.deployedAt, environment: "production"
    }))
];

// ─── Post-release Bugs ─────────────────────────────────────────────────────────
export const bugs = [
    // dev1 - 2 bugs out of 11 PRs (low rate)
    { id: "BUG-001", devId: "dev1", month: "2026-04" },
    { id: "BUG-002", devId: "dev1", month: "2026-04" },

    // dev2 - 3 bugs out of 5 issues (high rate)
    { id: "BUG-003", devId: "dev2", month: "2026-04" },
    { id: "BUG-004", devId: "dev2", month: "2026-04" },
    { id: "BUG-005", devId: "dev2", month: "2026-04" },

    // dev3 - 1 bug out of 6 issues (healthy)
    { id: "BUG-006", devId: "dev3", month: "2026-04" },

    // dev4 - 2 bugs out of 5 issues (moderate)
    { id: "BUG-007", devId: "dev4", month: "2026-04" },
    { id: "BUG-008", devId: "dev4", month: "2026-04" },

    // dev5 - 0 bugs (very careful)
];

// ─── Per-developer Insights ────────────────────────────────────────────────────
export const insights = {
    dev1: {
        interpretation: "Ankit ships frequently with short lead times — a sign of strong CI/CD habits and small, focused PRs. The low bug rate confirms quality is not being sacrificed for speed.",
        nextSteps: [
            "Consider mentoring a teammate on PR decomposition strategies.",
            "Explore canary releases to further reduce production risk.",
        ],
    },
    dev2: {
        interpretation: "Priya's high bug rate (60%) combined with a long lead time suggests PRs may be too large or reviews are cursory. The slow cycle time points to possible context-switching or unclear acceptance criteria.",
        nextSteps: [
            "Break work into smaller PRs — aim for <300 lines of diff per PR.",
            "Add a blocking pre-merge test coverage gate in CI.",
        ],
    },
    dev3: {
        interpretation: "Rahul shows a well-balanced profile with consistent throughput. A single production bug in the month is an acceptable baseline. Cycle time is slightly above average.",
        nextSteps: [
            "Investigate the one production bug root cause to prevent recurrence.",
            "Look for opportunities to reduce WIP (work-in-progress) items at any given time.",
        ],
    },
    dev4: {
        interpretation: "Sneha has a moderate bug rate and a healthy deployment frequency. The metrics suggest steady output but occasional quality slippage — likely under sprint deadline pressure.",
        nextSteps: [
            "Prioritize code review pairing with a senior engineer on high-risk PRs.",
            "Use a pre-commit hook for linting and unit test validation.",
        ],
    },
    dev5: {
        interpretation: "Dev Rajan ships fewer PRs with zero production bugs — a methodical, quality-first approach. The lower throughput and frequency may reflect working on larger, more complex features.",
        nextSteps: [
            "Confirm if large PRs are avoidable — feature flags can help ship smaller increments.",
            "Document the careful review process so the team can adopt it.",
        ],
    },
};
