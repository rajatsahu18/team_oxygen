import React from 'react'
import { FeaturesBottomCard } from './FeaturesBottomCard'
import { FeaturesCard } from './FeaturesCard'

const array = [
    {
        heading: "Time tracker",
        description: "Start and stop timer as you work, or enter hours manually.",
        image: "https://clockify.me/assets/images/features/features-tracker-screenshot.svg",
        subHeading_1: "Timer",
        subHeadingDesc_1: "Track time using a stopwatch.",
        subHeading_2: "Add time",
        subHeadingDesc_2: "Enter and edit hours manually.",
        subHeading_3: "Resume",
        subHeadingDesc_3: "Continue tracking with one click.",
        subHeading_4: "Billable",
        subHeadingDesc_4: "Mark hours as billable."
    },
    {
        heading: "Timesheet",
        description: "Log your weekly activities in less than a minute.",
        image: "https://clockify.me/assets/images/features/features-timesheet-screenshot.svg",
        subHeading_1: "Activities",
        subHeadingDesc_1: "Select activity and enter time.",
        subHeading_2: "Notes",
        subHeadingDesc_2: "Add more information.",
        subHeading_3: "Totals",
        subHeadingDesc_3: "See total time per activity/day.",
        subHeading_4: "Templates",
        subHeadingDesc_4: "Quickly load activities each week."
    },
    {
        heading: "Calendar",
        description: "Visually track time and log activities.",
        image: "https://clockify.me/assets/images/features/features-calendar-screenshot.svg",
        subHeading_1: "Visualize",
        subHeadingDesc_1: "See how your day looks like.",
        subHeading_2: "Add",
        subHeadingDesc_2: "Block hours with a click.",
        subHeading_3: "Edit",
        subHeadingDesc_3: "Edit blocks by resizing.",
        subHeading_4: "COMING SOON",
        subHeadingDesc_4: "Add events from Outlook/Google."
    },
    {
        heading: "Dashboard",
        description: "See where you spend time and what your team is working on.",
        image: "https://clockify.me/assets/images/features/features-dashboard-screenshot.svg",
        subHeading_1: "Top activities",
        subHeadingDesc_1: "See where you spend most time.",
        subHeading_2: "Visual charts",
        subHeadingDesc_2: "All time and money at a glance.",
        subHeading_3: "Breakdowns",
        subHeadingDesc_3: "See what your team worked on.",
        subHeading_4: "Live status",
        subHeadingDesc_4: "See who currently works on what."
    },
    {
        heading: "Reports",
        description: "See who worked on what, how much money you earn, review your team's time, and export the data.",
        image: "https://clockify.me/assets/images/features/features-reports-screenshot.svg",
        subHeading_1: "Breakdowns",
        subHeadingDesc_1: "Overview by day, activity, and user.",
        subHeading_2: "Filters",
        subHeadingDesc_2: "Drill down into your data.",
        subHeading_3: "Share",
        subHeadingDesc_3: "Share reports with clients via link.",
        subHeading_4: "Export",
        subHeadingDesc_4: "Download PDF, CSV, or Excel."
    },
    {
        heading: "Projects",
        description: "Track time on projects, and keep an eye on progress and budget.",
        image: "https://clockify.me/assets/images/features/features-projects-screenshot.svg",
        subHeading_1: "Tasks",
        subHeadingDesc_1: "Categorize time by job type.",
        subHeading_2: "Estimates",
        subHeadingDesc_2: "See tracked vs estimated time.",
        subHeading_3: "Rates",
        subHeadingDesc_3: "Custom hourly rates for projects.",
        subHeading_4: "Status",
        subHeadingDesc_4: "Track project progress."
    },
    {
        heading: "Team",
        description: "Invite your team so they can record their attendance and track how much time they spend on activities.",
        image: "https://clockify.me/assets/images/features/features-team-screenshot.svg",
        subHeading_1: "Invite team",
        subHeadingDesc_1: "Unlimited number of users, free.",
        subHeading_2: "Rates",
        subHeadingDesc_2: "Set per user hourly rates.",
        subHeading_3: "Manager",
        subHeadingDesc_3: "Give additional permissions.",
        subHeading_4: "Groups",
        subHeadingDesc_4: "Manage access using groups."
    },
]

const array_2 = [
    {
        heading: "Extras",
        description: "Extend Clockify with additional features.",
        image: "https://clockify.me/assets/images/features/features-extra-screenshot.svg"
    },
    {
        heading: "Apps",
        description: "Track time from anywhere — everything is synced online.",
        image: "https://clockify.me/assets/images/features/features-apps.png",
    },
    {
        heading: "Integrations",
        description: "Track time inside other web apps.",
        image: "https://clockify.me/assets/images/integrations/time-tracking-integrations-trello.png",
    }
]

const FeaturesData = () => {
    return (
        <div>
            {array.map((item, i) => (
                <FeaturesCard data = {item} />
            ))}
            {array_2.map((item, i) => (
                <FeaturesBottomCard data = {item} />
            ))}
        </div>
    )
}

export {FeaturesData}
