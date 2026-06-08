#!/usr/bin/env python3
"""Generate Krishna Kumar's professional resume PDF."""

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT = "/home/gaurav/personal/krishna-portfolio/Krishna_Kumar_Resume.pdf"

ACCENT = colors.HexColor("#1a365d")
TEXT = colors.HexColor("#1a202c")
MUTED = colors.HexColor("#4a5568")
LIGHT = colors.HexColor("#718096")


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=ACCENT,
            spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=11,
            leading=14,
            textColor=MUTED,
            spaceAfter=6,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=LIGHT,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=14,
            textColor=ACCENT,
            spaceBefore=10,
            spaceAfter=4,
        ),
        "job_title": ParagraphStyle(
            "JobTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=TEXT,
        ),
        "job_meta": ParagraphStyle(
            "JobMeta",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=9,
            leading=12,
            textColor=MUTED,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            textColor=TEXT,
            alignment=TA_LEFT,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            textColor=TEXT,
            leftIndent=12,
            bulletIndent=0,
            spaceAfter=2,
        ),
        "skill_label": ParagraphStyle(
            "SkillLabel",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=12,
            textColor=TEXT,
        ),
        "skill_value": ParagraphStyle(
            "SkillValue",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=MUTED,
        ),
    }


def section_rule():
    return HRFlowable(
        width="100%",
        thickness=0.75,
        color=ACCENT,
        spaceBefore=2,
        spaceAfter=6,
    )


def job_block(styles, company, role, dates, location, bullets, tech=None):
    items = [
        Paragraph(f"{company}", styles["job_title"]),
        Paragraph(f"{role} &nbsp;|&nbsp; {dates} &nbsp;|&nbsp; {location}", styles["job_meta"]),
    ]
    if tech:
        items.append(
            Paragraph(f"<b>Technologies:</b> {tech}", styles["body"])
        )
        items.append(Spacer(1, 2))
    for bullet in bullets:
        items.append(Paragraph(f"• {bullet}", styles["bullet"]))
    items.append(Spacer(1, 6))
    return items


def main():
    styles = build_styles()
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=letter,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.55 * inch,
    )

    story = []

    # Header
    story.append(Paragraph("Krishna Kumar", styles["name"]))
    story.append(
        Paragraph(
            "Software Engineer &nbsp;·&nbsp; React, React Native &amp; Full-Stack Web",
            styles["title"],
        )
    )
    story.append(
        Paragraph(
            "Seeking Remote Opportunities &nbsp;|&nbsp; Bengaluru, India (IST, flexible overlap)",
            styles["title"],
        )
    )
    story.append(
        Paragraph(
            "kumar.krishna190@gmail.com &nbsp;·&nbsp; +91 63623 54793 &nbsp;·&nbsp; "
            "linkedin.com/in/kumar-krishna-190 &nbsp;·&nbsp; github.com/kumarkrishna190 &nbsp;·&nbsp; "
            "krishna-portfolio-lime.vercel.app",
            styles["contact"],
        )
    )
    story.append(Spacer(1, 6))

    # Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", styles["section"]))
    story.append(section_rule())
    story.append(
        Paragraph(
            "Full-stack software engineer with 6+ years specializing in React.js, React Native, "
            "and Next.js across healthcare startups, SaaS, and product teams. Proven track record "
            "building responsive web apps, cross-platform mobile applications, and Node.js backends. "
            "Founding engineer experience shipping a healthcare platform from zero with Next.js and "
            "TypeScript. Strong in component architecture, API integration, state management, and "
            "frontend performance. Experienced leading web and mobile delivery end-to-end — from "
            "UI implementation to deployment on AWS/GCP. Seeking fully remote roles in modern web "
            "and mobile development.",
            styles["body"],
        )
    )

    # Skills
    story.append(Paragraph("TECHNICAL SKILLS", styles["section"]))
    story.append(section_rule())
    skills = [
        ("Core Stack", "React.js, React Native, Next.js, TypeScript, JavaScript, Node.js"),
        ("Web & UI", "Responsive design, component architecture, Ant Design, Webflow, REST APIs"),
        ("Mobile", "Cross-platform iOS/Android apps, React Native navigation, offline-ready UX"),
        ("Backend", "Node.js, Django, REST APIs, WebSockets, PostgreSQL, Redis"),
        ("Cloud & Tools", "AWS, GCP, Git, CI/CD, Google Analytics, GTM"),
        ("Domains", "Healthcare SaaS, compliance platforms, e-commerce, growth engineering"),
    ]
    skill_rows = []
    for label, value in skills:
        skill_rows.append(
            [
                Paragraph(label, styles["skill_label"]),
                Paragraph(value, styles["skill_value"]),
            ]
        )
    skill_table = Table(skill_rows, colWidths=[1.15 * inch, 5.55 * inch])
    skill_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("TOPPADDING", (0, 0), (-1, -1), 1),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    story.append(skill_table)

    # Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", styles["section"]))
    story.append(section_rule())

    story.extend(
        job_block(
            styles,
            "Noccarc Robotics",
            "Software Engineer II",
            "2023 – Present",
            "Pune, India",
            [
                "Build clinician and patient-facing dashboards in React.js and React Native for healthcare products used in critical care settings.",
                "Develop responsive web interfaces and cross-platform mobile apps with reusable component libraries and API-driven architecture.",
                "Implement Node.js and Django backend integrations for real-time data, user workflows, and cloud deployment on AWS and GCP.",
                "Collaborate on full-stack feature delivery across web, mobile, and connected device platforms.",
            ],
            tech="React.js, React Native, Next.js, TypeScript, Node.js, Django, AWS, GCP",
        )
    )

    story.extend(
        job_block(
            styles,
            "Allo Health",
            "Founding Software Engineer",
            "2021 – 2023",
            "Bengaluru, India",
            [
                "Early engineering hire at a healthcare startup backed by OLA co-founder; built product and growth infrastructure from the ground up.",
                "Architected and developed the core web application using Next.js and TypeScript with Node.js backend services.",
                "Built marketing sites in Webflow and end-to-end growth stack: Google Ads, GTM, GA, Facebook Ads, conversion funnels, and attribution.",
                "Optimized landing pages and campaigns to drive high-conversion healthcare user acquisition.",
            ],
            tech="Next.js, TypeScript, Node.js, Webflow, Google Ads, GTM, GA",
        )
    )

    story.extend(
        job_block(
            styles,
            "Noya & Unibook",
            "Lead Software Engineer",
            "2020 – 2021",
            "Remote / India",
            [
                "Led architecture and delivery of full product stacks for a fast-fashion platform and payment management tool.",
                "Designed scalable React.js frontends and React Native mobile apps backed by Node.js APIs.",
                "Mentored developers and owned feature delivery, performance, and reliability across web and mobile.",
            ],
            tech="React.js, React Native, Node.js",
        )
    )

    story.extend(
        job_block(
            styles,
            "Turbo Comply",
            "Software Engineer (Consultant)",
            "2020 – 2021",
            "Remote / India",
            [
                "Delivered complex, form-heavy UI workflows for a compliance management SaaS platform.",
                "Improved enterprise UX and maintainability using React.js, TypeScript, and Ant Design.",
                "Partnered closely with product teams to ship reliable compliance-driven features.",
            ],
            tech="React.js, TypeScript, Ant Design",
        )
    )

    story.extend(
        job_block(
            styles,
            "Sporthood",
            "Software Engineer",
            "2019 – 2020",
            "India",
            [
                "Built full-stack features for a sports community platform connecting athletes with coaches.",
                "Developed React.js web apps, React Native mobile apps, and Django backend services.",
                "Integrated APIs and managed user data flows across web and mobile clients.",
            ],
            tech="React.js, React Native, Django",
        )
    )

    # Selected Projects
    story.append(Paragraph("SELECTED PROJECTS", styles["section"]))
    story.append(section_rule())
    projects = [
        (
            "Allo Health Web Platform",
            "Core product built with Next.js and TypeScript — patient-facing flows, provider dashboards, and marketing landing pages scaled from zero to thousands of users.",
        ),
        (
            "Cross-Platform Mobile Apps",
            "React Native applications for patients and clinicians with real-time API integration, responsive UI, and shared component patterns across iOS and Android.",
        ),
        (
            "Healthcare & SaaS Dashboards",
            "React.js admin and compliance interfaces with complex form workflows, role-based views, and TypeScript for maintainable, production-grade UI.",
        ),
    ]
    for title, desc in projects:
        story.append(Paragraph(f"<b>{title}</b>", styles["job_title"]))
        story.append(Paragraph(desc, styles["body"]))
        story.append(Spacer(1, 4))

    # Education
    story.append(Paragraph("EDUCATION", styles["section"]))
    story.append(section_rule())
    story.append(Paragraph("Sir M. Visvesvaraya Institute of Technology (SMVIT), VTU", styles["job_title"]))
    story.append(
        Paragraph("Bachelor of Engineering &nbsp;|&nbsp; Bengaluru, Karnataka, India", styles["job_meta"])
    )

    doc.build(story)
    print(f"Resume generated: {OUTPUT}")


if __name__ == "__main__":
    main()
