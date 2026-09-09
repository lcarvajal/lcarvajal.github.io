---
startup: friends-in-flats
title: Organic tenant growth
summary: By interviewing users, rapidly iterating on the product, and building an AI support agent, I cut costs by €8,000 per month while increasing landlords’ MRR from €700 to over €50,000.
order: 1
---

## The effect

<figure class="project-media">
  <img src="/resources/images/friends-in-flats-revenue-graph.png" alt="Friends in Flats growth graph rising sharply after Lukas joined in Q3 2024" />
  <figcaption>Friends in Flats revenue growth after I joined in Q3 2024.</figcaption>
</figure>

- Landlords’ MRR increased from €700 to €50,000 per month
- Monthly spending decreased by €8,000

## Setting up tracking with PostHog

When I first joined, I saw we weren’t tracking conversions correctly through existing tools, so I set up PostHog to start monitoring events. I then ran tests and monitored results for every project we worked on.

## Getting Friends in Flats in front of students

Since we had few bookings and they were mainly made by university students, I attended uni orientation sessions to learn more about their listing search process.

**That uncovered a key detail:**
Students’ primary concern was finding accommodation quickly—far more important than their roommates, room size, or even, to a certain extent, location. They did that by applying to every link on a university recommendation page.

To get Friends in Flats listed on 10+ university recommendation pages, I rode a city bike around town, developing relationships with university administrators.

Over time, free university referrals generated 93% of all our bookings, enabling us to turn off our paid services.

## Upsetting the team by killing the flatmate-matching service

Friends in Flats had 8 people heavily invested in building up their flatmate-matching feature but it was clear flatmate matching wasn't really something students cared about.

But what could I do? I was new and nobody thought my research was valid.

Instead of pushing hard on my view, I built quick improvements that would complement the flatmate-matching service but at the same time build up toward removing it. For example:

- Simplifying application steps and reducing the info we communicated at each step
- Building out landlord tools to respond to applications quicker
- Making the flatmate-matching service optional

Once bookings started to flow in faster, I made the flatmate-matching service less and less prominent until I removed it entirely.

**This upset one of the engineers who quit midway through massive improvements he was making to our chat feature.**

Rather than panicking, I worked with the customer support person we had to quickly set up Intercom to replace our chat entirely. That change ended up saving over €60,000 in work over the next year—an expense that could otherwise have killed the startup.

## Automating listing enquiries with a customer support agent

A few months later, our customer support person landed an awesome new job. At this time, we were three people and moving down to just Mathias and me.

First, we split incoming requests into landlord and tenant enquiries so we could process them manually.

Over time, I built the following to reduce the time spent on support enquiries to a couple of hours a week:

- Self-service features for the website
- An MCP server with an agent that could respond to requests
