/**
 * PDF rendering for the audit result.
 *
 * Server-only. Uses @react-pdf/renderer so we don't need a Chromium
 * runtime on Vercel. Brand-matched: same accent color (#7058E3) as the
 * site spotlight, the same H1 → H2 → body hierarchy as the result page.
 */

import * as React from "react";
import { Document, Page, Text, View, StyleSheet, renderToBuffer } from "@react-pdf/renderer";
import type { AuditResult, ScoredTask } from "./types";
import { formatCurrency, formatCurrencyCompact, formatHours } from "./format";

const PRIMARY = "#7058E3";
const TEXT = "#1a1a1a";
const MUTED = "#5a5a6a";
const BORDER = "#e5e5ec";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 11,
    color: TEXT,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  eyebrow: { fontSize: 10, color: PRIMARY, marginBottom: 8, textTransform: "uppercase" },
  h1: { fontSize: 26, marginBottom: 12, fontFamily: "Helvetica-Bold", lineHeight: 1.2 },
  h2: { fontSize: 16, marginBottom: 8, fontFamily: "Helvetica-Bold", marginTop: 20 },
  h3: { fontSize: 13, marginBottom: 6, fontFamily: "Helvetica-Bold" },
  body: { fontSize: 11, color: TEXT, marginBottom: 8 },
  muted: { fontSize: 10, color: MUTED },
  headlineBox: {
    backgroundColor: "#f6f4ff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 12,
  },
  headlineNumber: { fontSize: 32, color: PRIMARY, fontFamily: "Helvetica-Bold" },
  card: {
    borderColor: BORDER,
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
  pill: {
    fontSize: 9,
    color: PRIMARY,
    backgroundColor: "#f6f4ff",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  table: { marginTop: 8 },
  tr: { flexDirection: "row", borderBottomColor: BORDER, borderBottomWidth: 1, paddingVertical: 6 },
  thRank: { width: "8%", fontSize: 10, color: MUTED, fontFamily: "Helvetica-Bold" },
  thTitle: { width: "44%", fontSize: 10, color: MUTED, fontFamily: "Helvetica-Bold" },
  thMetric: {
    width: "16%",
    fontSize: 10,
    color: MUTED,
    fontFamily: "Helvetica-Bold",
    textAlign: "right",
  },
  tdRank: { width: "8%", fontSize: 10 },
  tdTitle: { width: "44%", fontSize: 10 },
  tdMetric: { width: "16%", fontSize: 10, textAlign: "right" },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    fontSize: 9,
    color: MUTED,
    textAlign: "center",
  },
});

const QUADRANT_LABEL: Record<ScoredTask["quadrant"], string> = {
  "automate-first": "Automate First",
  delegate: "Delegate (build later)",
  "automate-later": "Automate Later",
  ignore: "Ignore",
};

function CoverPage({ result }: { result: AuditResult }) {
  const { firstName } = result.context;
  return (
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.eyebrow}>The AI-First Audit</Text>
      <Text style={styles.h1}>
        {firstName}, you&rsquo;re lighting {formatCurrencyCompact(result.headlineDollars)}/year on
        fire.
      </Text>
      <Text style={styles.body}>
        We scored {result.tasks.length} tasks across leverage and AI-readiness. Three of them sit in
        the top-right quadrant — those are the ones to ship first.
      </Text>

      <View style={styles.headlineBox}>
        <Text style={styles.muted}>Total annual time-cost across your top 3</Text>
        <Text style={styles.headlineNumber}>{formatCurrency(result.headlineDollars)}</Text>
        <Text style={styles.muted}>
          {formatHours(result.totalWeeklyHoursSaved)} per week recoverable at $
          {result.hourlyCost.toFixed(0)}/hr loaded cost
        </Text>
      </View>

      <Text style={styles.h2}>How to read this</Text>
      <Text style={styles.body}>
        Page 2 is your top 3 with the exact starter recipe for each. Page 3 is the 7-day deployment
        schedule. Page 4 is the full ranked task table so you can plan past the first sprint.
      </Text>

      <Text style={styles.footer}>Prestyj — AI agents for marketing &amp; sales</Text>
    </Page>
  );
}

function TopThreePage({ result }: { result: AuditResult }) {
  return (
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.eyebrow}>Top 3 to automate first</Text>
      <Text style={styles.h2}>Your three highest-leverage automations</Text>

      {result.topThree.map((task, i) => (
        <View key={task.input.id} style={styles.card} wrap={false}>
          <Text style={styles.pill}>
            {i + 1} · {task.recipe.displayName}
          </Text>
          <Text style={styles.h3}>{task.input.title}</Text>
          <View style={styles.row}>
            <Text style={styles.muted}>Weekly hours recovered</Text>
            <Text style={styles.body}>{formatHours(task.weeklyHoursSaved)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.muted}>Annual $ value</Text>
            <Text style={styles.body}>{formatCurrency(task.annualDollarsSaved)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.muted}>Recommended stack</Text>
            <Text style={styles.body}>{task.recipe.stack}</Text>
          </View>
          <Text style={[styles.muted, { marginTop: 8 }]}>Starter recipe</Text>
          <Text style={styles.body}>{task.recipe.starterRecipe}</Text>
          <Text style={[styles.muted, { marginTop: 4 }]}>Watch out</Text>
          <Text style={styles.body}>{task.recipe.watchOut}</Text>
        </View>
      ))}

      <Text style={styles.footer}>Prestyj — AI agents for marketing &amp; sales</Text>
    </Page>
  );
}

function SevenDayPage({ result }: { result: AuditResult }) {
  return (
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.eyebrow}>7-day deployment</Text>
      <Text style={styles.h2}>Your week, one task at a time</Text>
      {result.sevenDayPlan.map((day) => (
        <View key={day.day} style={styles.card} wrap={false}>
          <Text style={styles.h3}>{day.title}</Text>
          <Text style={styles.body}>{day.body}</Text>
        </View>
      ))}
      <Text style={styles.footer}>Prestyj — AI agents for marketing &amp; sales</Text>
    </Page>
  );
}

function RankedTablePage({ result }: { result: AuditResult }) {
  return (
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.eyebrow}>Full ranking</Text>
      <Text style={styles.h2}>All scored tasks</Text>
      <Text style={styles.body}>
        Sorted by composite score (leverage × readiness). Top of the list is what to ship next once
        you finish your top 3.
      </Text>

      <View style={styles.table}>
        <View style={styles.tr}>
          <Text style={styles.thRank}>#</Text>
          <Text style={styles.thTitle}>Task</Text>
          <Text style={styles.thMetric}>Leverage</Text>
          <Text style={styles.thMetric}>Readiness</Text>
          <Text style={styles.thMetric}>Quadrant</Text>
        </View>
        {result.tasks.map((task, i) => (
          <View key={task.input.id} style={styles.tr} wrap={false}>
            <Text style={styles.tdRank}>{i + 1}</Text>
            <Text style={styles.tdTitle}>{task.input.title}</Text>
            <Text style={styles.tdMetric}>{task.leverage}</Text>
            <Text style={styles.tdMetric}>{task.readiness}</Text>
            <Text style={styles.tdMetric}>{QUADRANT_LABEL[task.quadrant]}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>Prestyj — AI agents for marketing &amp; sales</Text>
    </Page>
  );
}

function AuditDocument({ result }: { result: AuditResult }) {
  return (
    <Document title="AI-First Audit" author="Prestyj" subject="Personalized AI deployment audit">
      <CoverPage result={result} />
      <TopThreePage result={result} />
      <SevenDayPage result={result} />
      <RankedTablePage result={result} />
    </Document>
  );
}

export async function renderAuditPdf(result: AuditResult): Promise<Buffer> {
  return renderToBuffer(<AuditDocument result={result} />);
}
