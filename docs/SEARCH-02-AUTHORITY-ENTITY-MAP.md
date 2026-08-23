# Authority & Entity Map v1

**Date:** 24 August 2026  
**Workstream:** Search, Authority & Discoverability 02

## Entity objective

Make it easy for a human or machine to resolve the correct Glenn Hammond and understand the professional graph around him without reducing the practice to one tool or one legacy job title.

A naked search for **Glenn Hammond** is ambiguous. Current results include other professionals with the same name and significant results for aviation pioneer Glenn Hammond Curtiss. Entity resolution therefore depends on consistent co-occurrence, not keyword repetition.

## Canonical identity model

### Core identity

**Glenn Hammond → digital learning products, experiences, platforms and systems → Brisbane / Australia → first-hand project evidence**

Recommended public identity sentence:

> Glenn Hammond designs digital learning products, experiences, platforms and production systems, connecting product and learning strategy with UX, technology and hands-on implementation.

This is an umbrella description, not a mandated identical biography everywhere.

### Contextual role descriptions that may legitimately vary

- **Recruiter/employment context:** eLearning Specialist / Learning Systems Designer.
- **Practice context:** digital learning product, experience and systems specialist.
- **Project context:** use the actual role performed: product strategy, experience architecture, platform migration, learning design, interaction design, Storyline/Rise development, media production, etc.
- **Technical context:** Moodle, Storyline/Rise, xAPI, LRS and implementation language only where supported by the evidence being discussed.

The variation is useful provided all descriptions remain connected to the same practice graph.

## Authority graph

### Glenn → Practice

1. **Digital product strategy & experience architecture**
   - Evidence: Wellbeing Studio 2027 connected-service model, contextual entry and production slice.
2. **Learning platform architecture & migration**
   - Evidence: ISQ Connect & Learn concurrent migration; historical CASA LMS front-end work.
3. **Learning experience & interaction design**
   - Evidence: CASA examiner judgement; TAFE facilitator-led Pathways; Wellbeing contextual entry.
4. **Learning technology & production systems**
   - Evidence: CASA reusable Storyline production system; ISQ eLearning Design System; platform implementation work.
5. **Experience measurement / xAPI**
   - Evidence state: emerging; first-hand work exists but is not yet sufficiently represented in the canonical public evidence field.

### Practice → Projects

| Practice claim | Strongest current Project evidence | Supporting evidence |
|---|---|---|
| Product/experience architecture | Wellbeing Studio 2027 | TAFE Pathways human-led interaction model |
| Platform architecture/migration | ISQ Connect & Learn | CASA platform history |
| Learning/interaction design | CASA Flight Examiner Rating | TAFE Pathways, Wellbeing Studio |
| Production systems | CASA historical programme | ISQ eLearning Design System (needs canonicalisation) |
| Measurement/xAPI | future WS Experience Intelligence evidence | historical/current xAPI writing only |

### Projects → Organisations

- **Wellbeing Studio 2027 → Corporate Yoga Australia**
- **ISQ Connect & Learn → Independent Schools Queensland**
- **CASA Flight Examiner Rating → Civil Aviation Safety Authority**
- **TAFE Queensland SkillsTech Pathways → TAFE Queensland SkillsTech**
- **Historical authority recovery → Goodstart Early Learning, Sonic HealthPlus and other verified project organisations when evidence is restored**

### Projects → Technologies

Technology is subordinate evidence, not identity.

- **Moodle** → Connect & Learn; wider platform work.
- **Articulate Storyline** → CASA, TAFE, Connect & Learn course estate.
- **Articulate Rise** → current production-system/design-system practice where evidenced.
- **xAPI / LRS** → emerging experience-intelligence and measurement evidence.
- **Web application / modern front-end implementation** → Wellbeing Studio and current product implementation where publication is appropriate.
- **Video / multimedia production** → CASA and broader practice where first-hand assets exist.

### Projects → Outcomes / professional claims

Prefer claims about what was designed, changed, implemented or enabled over unverified performance claims.

Supported claim families include:

- changed the unit of design from content destinations to useful participant experiences;
- migrated a learning platform while rebuilding a large course estate concurrently;
- designed regulated learning around practitioner judgement rather than recall;
- created non-linear digital interaction to support a human facilitator rather than replace them;
- built reusable production approaches so learning could be produced consistently at scale.

## External-reference graph

### Strong authority assets

**Independent Schools Queensland annual report**  
Externally identifies Glenn Hammond as eLearning Specialist within ISQ's eLearning and ICT team. This is a high-trust organisation → person connection.

**International Islamic University Malaysia clinical-supervision material**  
Directly cites `glennhammond.com/principles-of-assessment-and-rules-of-evidence/`. This is a genuine knowledge-resource citation and should be preserved.

**Goodstart historical project reference**  
A third-party Goodstart portal directory still links to the historical Glenn Hammond project URL and describes the My Portal work. The referring site is not itself a high-authority editorial source, but the live external URL relationship makes the historical project an authority-recovery priority.

**LinkedIn professional profile**  
Search visibility reinforces Brisbane/Australia and digital-learning/platform/product identity. Keep profile language directionally aligned with the site.

**Remote Reviewer testimonial**  
A current external product site identifies Glenn Hammond as eLearning Specialist and publishes a substantive testimonial about evidence-based assessment. It is useful supporting evidence of current professional participation, not a substitute for first-party project evidence.

### Neutral references

- historical Slideshare/learning materials attributed to Glenn Hammond;
- legitimate older community references that demonstrate continuity but do not materially strengthen current positioning.

### Identity-noise references

Search results include unrelated Glenn Hammonds and Glenn Hammond Curtiss. These are not negative authority; they simply increase the need for clear entity qualifiers.

## Entity Consistency Contract

### Must remain consistent

1. **Name:** Glenn Hammond.
2. **Primary domain:** `https://glennhammond.com`.
3. **Geographic context where relevant:** Brisbane / Queensland / Australia.
4. **Professional domain:** digital learning, learning systems/products/experiences/platforms.
5. **Project organisations and dates:** only verified facts.
6. **Role in each project:** exact role, not inflated umbrella wording.
7. **Evidence boundaries:** do not turn implemented work into unmeasured outcome claims.

### May vary by context

- eLearning Specialist vs Learning Systems Designer vs broader practice description;
- which expertise cluster is foregrounded;
- short vs long biography;
- technology list relevant to the specific project or channel.

### Should not become canonical identity labels

- “Moodle developer” alone;
- “Storyline developer” alone;
- “instructional designer” alone;
- “SEO expert”;
- generic “digital consultant”.

These either understate the evidence or make claims the public evidence field does not establish.

## Structured-data implications

The current Person schema is directionally sound but should be tightened after final identity review.

### BUILD NOW

- Keep one stable `Person` `@id` at `https://glennhammond.com/#person`.
- Ensure Project/Record structured data references the same Person node.
- Keep claims factual and evidence-bounded.
- Add organisation relationships only when project publication/attribution is approved.
- Make visible page content carry the same identity facts; schema must not contain a richer hidden biography than the page.

### BEFORE LAUNCH

- Verify whether the public GitHub profile is appropriate for `sameAs`; do not add merely because the repository username matches.
- Keep LinkedIn as confirmed `sameAs`.
- Verify LearnX award evidence before retaining the current `award` claim in schema. The repository comment itself already says this claim is frozen pending certificate evidence.
- Review `knowsAbout` against the final Practice claims. It should reflect proven recurring practice, not every tool ever used.

### POST-LAUNCH

- Monitor branded SERPs for whether glennhammond.com, LinkedIn and relevant organisation/project references increasingly cohere around the intended professional identity.
- Do not manufacture entity signals through low-value directories.

## Recommended internal graph behaviour

Every indexed Record should expose:

**Glenn → role in this work → Project → Organisation → problem/decision → disciplines/technologies → evidence → related Practice claims**

Every Project should expose:

**Organisation → body of work → Glenn's role → Records → related Practice**

Every independently indexed Artefact should expose:

**Artefact → Record → Project → provenance → what it proves / does not prove**

This is both an information-architecture and entity-understanding requirement.

## Authority-building priority

1. Preserve/recover existing external citations and linked historical project pages.
2. Align first-party identity across Home, Practice, structured data and professional profiles.
3. Publish stronger canonical evidence for design systems/production systems.
4. Publish first-hand xAPI/experience-intelligence evidence before expanding the xAPI claim.
5. Reclaim/update broken external links only where there is a real successor.
6. Prefer organisation acknowledgements, substantial collaboration and useful first-party publishing over directory/link-building activity.

## Evidence gaps

- LearnX certificate/project attribution.
- Public suitability of GitHub profile as `sameAs`.
- Complete backlink/referring-domain graph.
- Current branded query distribution from Search Console/Bing.
- Further high-trust external references for CASA, TAFE and Goodstart work.