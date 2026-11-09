# SUMA Documentation Project

This repository contains the source for the SUMA documentation site, built with Mintlify. Content is written in MDX, and `docs.json` defines the site's tabs, sidebar groups, and page navigation.

## Project layout

- `docs.json` — Mintlify configuration and navigation.
- `Plans/` — Personal plans and daily activity logs.
- `JavaScript/` — JavaScript lessons and practice notes.
- `Python/` — Python documentation.
- `eda_tools/`, `physical_design/`, `synthesis/`, and `sta/` — VLSI and EDA documentation.
- `essentials/` — General documentation and Mintlify guides.
- `api-reference/` — API reference pages and the OpenAPI specification.
- `introduction.mdx`, `quickstart.mdx`, and `development.mdx` — Site guide pages.

Most pages use YAML front matter followed by Markdown or MDX. A page must also be listed by its extensionless path in the appropriate `pages` array in `docs.json` to appear in navigation.

## Daily activity updates

When I describe what I did or learned today, treat it as a request to update this documentation site:

1. Find the most relevant existing page or section before creating anything. For routine personal progress, use `Plans/Daily-Tasks.mdx`; put reusable technical explanations in the corresponding subject page as well when appropriate.
2. Add a dated entry under the existing daily log, keeping previous entries intact and in chronological order. Use the current local date and the page's existing date format. Do not silently replace an earlier entry.
3. Keep the update faithful to what I reported. Correct obvious typos (for example, "lession" to "lesson"), but do not invent lessons, outcomes, or technical details. If a necessary detail is unclear, record only what is known or ask a concise question.
4. Keep ongoing tasks in the task list separate from completed work in the dated log. Update a task's status only when my report makes its status clear.
5. Create a new MDX page only when the information is substantial enough to deserve a separate, reusable topic page and no existing page is a good fit. Give it front matter, place it in the appropriate section, and add its extensionless path to the appropriate navigation group in `docs.json`. Do not create a new page just to hold one day's short activity.
6. Preserve existing content and unrelated work. Make the smallest appropriate edit; do not reorganize pages or navigation unnecessarily.

## Commit and push

Do not commit or push while work is still being reviewed. Only do so after I confirm that everything is done and looks correct and explicitly ask you to "commit and push" (or give an equally clear instruction).

When authorized:

1. Review `git status` and the final diff. Stage only the files belonging to the approved work; leave unrelated or pre-existing changes untouched.
2. Create a concise, appropriate commit message that describes the changes.
3. Push the commit to the current branch's configured upstream. Never force-push. If there is no configured upstream, or the push fails for a reason requiring a decision or credential change, stop and tell me rather than guessing.

## Validation

After editing navigation, confirm `docs.json` is valid JSON and that every newly added navigation path points to an existing MDX page. For content-only changes, check the page structure and links. If the Mintlify CLI is available and the change warrants it, run the local preview or relevant validation.
