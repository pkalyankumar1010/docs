# SUMA documentation

This repository contains the source for the SUMA documentation site, built with [Mintlify](https://mintlify.com). Documentation pages are written in MDX and registered in `docs.json`, which controls the sidebar and top-level tabs.

## Project structure

```text
docs/
├── docs.json                         # Mintlify site configuration and navigation
├── package.json                      # Local Node development dependencies
├── introduction.mdx                  # Root-level guide page
├── quickstart.mdx
├── development.mdx
├── eda_tools/                        # EDA tool documentation
│   └── crack_eda_tool_license.mdx
├── physical_design/                  # Physical-design documentation
│   ├── pd_inputs.mdx
│   └── floorplan.mdx
├── synthesis/                        # Synthesis documentation
│   └── setup_time.mdx
├── sta/                              # Static timing analysis pages and page assets
│   ├── frequency_divider.mdx
│   ├── wave_1.svg
│   └── wave_1.json
├── Python/                           # Python documentation
│   └── Using-UV.mdx
├── JavaScript/                       # JavaScript lessons; one folder per lesson
│   └── <lesson>/README.mdx
├── essentials/                       # Mintlify/Markdown usage examples
├── api-reference/                    # API documentation and OpenAPI specification
│   ├── openapi.json
│   ├── introduction.mdx
│   └── endpoint/
├── Plans/                            # Planning pages
│   └── Tasks.mdx
├── images/                           # Shared raster images used by pages
├── logo/                             # Site logo SVG files
├── favicon.svg                       # Browser favicon
└── snippets/                         # Reusable MDX snippets, when present
```

`JavaScript - Copy` and `JavaScript - Copy - Copy` are duplicate lesson trees retained in the repository. Only the `JavaScript/` tree is currently referenced by navigation.

## How pages are connected

There are two parts to publishing a normal documentation page:

1. Create the `.mdx` file in the appropriate folder.
2. Add its path (without `.mdx`) to the correct `pages` array in `docs.json`.

For example, the page at `physical_design/floorplan.mdx` is registered as:

```json
{
  "group": "Physical Design",
  "pages": [
    "physical_design/pd_inputs",
    "physical_design/floorplan"
  ]
}
```

The path is case-sensitive on many deployment environments, so it must match the file and directory names exactly.

## Add a documentation page

1. Choose the section folder, such as `physical_design/`, `synthesis/`, or `eda_tools/`.
2. Add a descriptive kebab-case file, for example `physical_design/power-planning.mdx`.
3. Start the page with front matter and then write standard Markdown or supported MDX components.
4. Add `physical_design/power-planning` to the correct `pages` list in `docs.json`.
5. Preview the change locally and confirm it appears in the sidebar and opens without a 404.

Minimal page template:

```mdx
---
title: Power Planning
description: Design and validate the power network.
---

# Power Planning

Brief introduction to the topic.

## Prerequisites

- Input floorplan
- Power intent

## Flow

1. Define power domains.
2. Build the power grid.
3. Run IR-drop checks.
```

## MDX file format

Every ordinary page should use YAML front matter at the top:

```mdx
---
title: Page title
description: Optional short description for search and previews.
---
```

Use Markdown for headings, prose, lists, tables, code blocks, and links. MDX also supports Mintlify components, for example:

```mdx
<Note>
Keep page paths and navigation entries aligned.
</Note>

<Card title="Related page" href="/physical_design/floorplan">
  Open the floorplanning guide.
</Card>
```

Use heading anchors for links within a page. Mintlify generates anchors from the full heading text; headings with punctuation or numeric prefixes may produce encoded URL fragments. Confirm these links in the local preview rather than guessing the fragment.

## Add images and other assets

- Put shared images in `images/` and reference them with a root-relative path: `![Description](/images/example.png)`.
- Keep assets used by one page beside that page when that makes the relationship clearer, as in `sta/wave_1.svg`.
- Use descriptive filenames and meaningful alt text.
- Use SVG for logos and diagrams where possible; use PNG/JPG/WebP for raster images.

Example:

```mdx
![Clock waveform](/sta/wave_1.svg)
```

## Add API reference content

The API specification lives at `api-reference/openapi.json`. Endpoint MDX pages in `api-reference/endpoint/` use front matter that points to an operation:

```mdx
---
title: Get Plants
openapi: GET /plants
---
```

When adding or changing an endpoint:

1. Update `api-reference/openapi.json` with the operation.
2. Add or update the corresponding MDX page under `api-reference/endpoint/`.
3. Register that page in the relevant `docs.json` navigation groups.

## Update site configuration

`docs.json` is the central Mintlify configuration file. Update it when you need to change:

- Navigation tabs, groups, page order, or page visibility.
- Site name, theme colors, logo, favicon, navbar, footer, and social links.
- Global navigation anchors.

Do not include `.mdx` in a navigation page path. For example, use `synthesis/setup_time`, not `synthesis/setup_time.mdx`.

## Run and test locally

Install the Mintlify CLI once:

```powershell
npm install -g mintlify
```

From the repository root (the folder containing `docs.json`), start the preview server:

```powershell
mintlify dev
```

Open the local URL printed by the command (normally `http://localhost:3000`). For each change, verify:

1. The page appears in its intended tab and sidebar group in the correct order.
2. The page URL loads without a 404.
3. Front matter, headings, code blocks, images, diagrams, and MDX components render correctly.
4. Internal links and table-of-contents links land on the intended heading.
5. The page works in both light and dark themes, especially images and diagrams.

If the preview does not start, run:

```powershell
mintlify install
mintlify dev
```

Common issues:

- **404 page:** confirm the `.mdx` file exists and its exact extension/casing matches the `docs.json` path.
- **Page missing from navigation:** add the extensionless path to the intended `pages` array in `docs.json`.
- **Broken image:** verify the file exists and the root-relative asset path starts with `/`.
- **Invalid MDX:** check that JSX-style components are closed and that front matter starts on the first line.

## Before committing

- Preview the site locally.
- Keep navigation paths, filenames, and link destinations in sync.
- Review the diff with `git diff`.
- Avoid committing `node_modules/`; it is excluded by `.gitignore`.
