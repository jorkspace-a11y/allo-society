export const coreAdminServices = [
  'Inbox Management',
  'Calendar & Scheduling',
  'Operations Support',
  'Customer Support',
  'Research & Data',
  'Documentation',
  'CRM Updates',
  'Reporting Support',
  'File Organisation',
  'Recurring Administration',
  'Project Coordination',
  'Executive Support',
]

export const serviceGroups = [
  {
    id: '01',
    name: 'RUN',
    line: 'Keep the business moving.',
    answer: 'RUN covers the recurring work that keeps the business organised, responsive, and moving each week.',
    services: [
      {
        name: 'Administration & Operations',
        slug: 'administration-operations',
        line: 'Recurring business support across inbox, calendar, customers, research, records, reporting, and coordination.',
        tags: ['Inbox + calendar', 'Customer support', 'Reporting + coordination'],
      },
      {
        name: 'Social Media Management',
        slug: 'social-media',
        line: 'Ongoing planning, publishing, community management, monitoring, reporting, and campaign coordination.',
        tags: ['Content planning', 'Channel management', 'Reporting'],
      },
    ],
  },
  {
    id: '02',
    name: 'GROW',
    line: 'Move demand forward.',
    answer: 'GROW brings together the digital work that helps a business reach people, explain its offer, and move campaigns forward.',
    services: [
      {
        name: 'Landing Pages & Websites',
        slug: 'websites',
        line: 'Focused websites and landing pages with clear structure, responsive delivery, forms, analytics, and basic search setup.',
        tags: ['Landing pages', 'Business websites', 'Maintenance'],
      },
      {
        name: 'Digital Ads Strategy',
        slug: 'digital-ads',
        line: 'Campaign strategy, audience research, tracking, monitoring, testing, reporting, and optimisation recommendations.',
        tags: ['Meta Ads', 'Google Ads support', 'Tracking + reporting'],
      },
    ],
  },
  {
    id: '03',
    name: 'BUILD',
    line: 'Improve how the business works.',
    answer: 'BUILD structures the systems, automation, visibility, and internal workflows behind the day-to-day business.',
    services: [
      {
        name: 'CRM & Automation',
        slug: 'crm-automation',
        line: 'CRM setup, pipeline design, lead routing, follow-up workflows, notifications, integrations, and task automation.',
        tags: ['CRM setup', 'Workflow automation', 'Integrations'],
      },
      {
        name: 'Dashboards & Reporting',
        slug: 'dashboards',
        line: 'Operational, sales, and marketing reporting that gives managers clearer visibility into what the business is doing.',
        tags: ['KPI tracking', 'Data consolidation', 'Recurring reports'],
      },
      {
        name: 'Internal Tools & ERP',
        slug: 'internal-tools-erp',
        line: 'Suitable platforms, low-code tools, integrations, and custom workflows structured around how the business operates.',
        tags: ['Internal workflows', 'Low-code systems', 'ERP configuration'],
      },
    ],
  },
]

export const supportModels = [
  {
    id: '01',
    name: 'Allo Assistant',
    line: 'For recurring administrative and operational execution.',
    fit: 'Inbox, calendar, customer support, research, CRM updates, documentation, reporting support, and coordination.',
  },
  {
    id: '02',
    name: 'Allo Executive',
    line: 'For higher-trust support around founders, managers, and leadership.',
    fit: 'Executive coordination, calendar ownership, communication support, reporting, priorities, and stakeholder follow-up.',
  },
  {
    id: '03',
    name: 'Allo Specialist',
    line: 'For deeper digital, marketing, systems, automation, and reporting work.',
    fit: 'Websites, social media, digital ads, CRM, automation, dashboards, internal tools, and ERP configuration.',
  },
]
