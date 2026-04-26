import { issues, pullRequests, deployments, bugs } from "../data/mockData";

const MONTH = "2026-04";

const daysBetween = (a, b) => {
    const diff = new Date(b) - new Date(a);
    return Math.round(diff / (1000 * 60 * 60 * 24) * 10) / 10;
};

const inMonth = (dateStr) => dateStr && dateStr.startsWith(MONTH);

/** Lead Time for Changes: avg days from PR opened → production deploy */
export const getLeadTime = (devId) => {
    const devPRs = pullRequests.filter(
        (pr) => pr.devId === devId && pr.mergedAt && pr.deployedAt && inMonth(pr.deployedAt)
    );
    if (!devPRs.length) return { value: 0, unit: "days", status: "none" };
    const avg = devPRs.reduce((sum, pr) => sum + daysBetween(pr.openedAt, pr.deployedAt), 0) / devPRs.length;
    const rounded = Math.round(avg * 10) / 10;
    return {
        value: rounded,
        unit: "days",
        status: rounded <= 2 ? "good" : rounded <= 5 ? "average" : "bad",
    };
};

/** Cycle Time: avg days from issue In Progress → Done */
export const getCycleTime = (devId) => {
    const devIssues = issues.filter(
        (i) => i.devId === devId && i.inProgressAt && i.doneAt && inMonth(i.doneAt)
    );
    if (!devIssues.length) return { value: 0, unit: "days", status: "none" };
    const avg = devIssues.reduce((sum, i) => sum + daysBetween(i.inProgressAt, i.doneAt), 0) / devIssues.length;
    const rounded = Math.round(avg * 10) / 10;
    return {
        value: rounded,
        unit: "days",
        status: rounded <= 3 ? "good" : rounded <= 6 ? "average" : "bad",
    };
};

/** Bug Rate: production bugs / issues completed * 100 */
export const getBugRate = (devId) => {
    const completedIssues = issues.filter(
        (i) => i.devId === devId && i.doneAt && inMonth(i.doneAt)
    ).length;
    const bugCount = bugs.filter((b) => b.devId === devId && b.month === MONTH).length;
    if (!completedIssues) return { value: 0, unit: "%", status: "good" };
    const rate = Math.round((bugCount / completedIssues) * 100 * 10) / 10;
    return {
        value: rate,
        unit: "%",
        status: rate <= 15 ? "good" : rate <= 30 ? "average" : "bad",
    };
};

/** Deployment Frequency: count of production deploys in the month */
export const getDeploymentFrequency = (devId) => {
    const count = deployments.filter(
        (d) => d.devId === devId && inMonth(d.deployedAt) && d.environment === "production"
    ).length;
    return {
        value: count,
        unit: "/ mo",
        status: count >= 8 ? "good" : count >= 4 ? "average" : "bad",
    };
};

/** PR Throughput: count of merged PRs in the month */
export const getPRThroughput = (devId) => {
    const count = pullRequests.filter(
        (pr) => pr.devId === devId && pr.mergedAt && inMonth(pr.mergedAt)
    ).length;
    return {
        value: count,
        unit: "PRs",
        status: count >= 8 ? "good" : count >= 4 ? "average" : "bad",
    };
};

export const getAllMetrics = (devId) => ({
    leadTime: getLeadTime(devId),
    cycleTime: getCycleTime(devId),
    bugRate: getBugRate(devId),
    deploymentFrequency: getDeploymentFrequency(devId),
    prThroughput: getPRThroughput(devId),
});
